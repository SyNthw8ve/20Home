---
description: Descrição do deployment da aplicação.
---

# Deployment

## Front End

Depois de construído o Front End, a aplicação é compilada através da CLI do Angular. O resultado dessa compilação é então o bundle que será usado para o deployment do site. Para o deployment, será utilizado um web server, neste caso Nginx. A configuração do Nginx é a que segue:

```text
worker_processes 1;

events {
    worker_connections 1024;
}

http {

    log_format upstreamlog '[$time_local] 
        $remote_addr - $remote_user - $server_name to: 
        $upstream_addr: $request';


    upstream backend {
        ip_hash;
        server nest:3000 weight=5;
    }

   
    server {
        listen 80;
        server_name localhost;

        root /usr/share/nginx/html;
        index index.html index.htm;
        include /etc/nginx/mime.types;

        location / {

            try_files $uri $uri/ /index.html;
        }

        location /api/ {

            rewrite /api/(.*) /$1  break;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For 
                $proxy_add_x_forwarded_for;
            proxy_pass http://backend;
            access_log  /var/log/nginx/access.log upstreamlog;

        }

        location /socket.io {

            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            add_header  Front-End-Https   on;
            access_log  /var/log/nginx/access.log upstreamlog;
        }
        
    }
}
```

Este web server será executado num contentor de Docker.

```text
FROM nginx:alpine

COPY deploy/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/home-fe .
```

## Back End

O Back End, sendo constituído por vários componentes, terá vários contentores. 

### NestJs

```text
FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
```

### Flask

```text
FROM tensorflow/tensorflow:latest

WORKDIR /usr/src/app

RUN pip install --upgrade pip

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "server.py"]
```

## PostgreSQL e Redis

As imagens oficiais do PostgreSQL e Redis estão disponíveis no DockerHub, pelo que não é necessário um Dockerfile específico nesta aplicação. Basta apenas passar as respectivas variáveis de ambiente. 

## Docker Compose

Posto isto, resta ligar os diversos contentores utilizando docker-compose.

```yaml
version: '3.7'

services: 

  nest:
    build:
      context: ./20-home
    command: npm run start:dev
    restart: always
    volumes: 
      - ./20-home:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - 3000:3000
    env_file: 
      - .env
    networks:
      - webnet
    depends_on:
      - redis
      - postgres
      - flask

  nginx:
    build: 
      context: ./home-fe
    ports:
      - 8080:80
    networks:
      - webnet
    depends_on:
      - nest
    links: 
      - nest

  flask:
    container_name: flask
    build:
      context: ./flask
    ports: 
      - 5000:5000
    depends_on: 
      - redis
      - postgres
    volumes:
      - ./flask/models:/usr/src/app/models

  redis:
    container_name: redis
    image: redis:5
    restart: always
    networks:
      - webnet
    ports:
      - 6379:6379

  postgres:
    container_name: postgres
    image: postgres:11
    restart: always
    env_file: 
      - .env
    networks:
      - webnet
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_DB: ${DB_DATABASE_NAME}
      PG_DATA: /var/lib/postgresql/data
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - 5432:5432

networks:
  webnet:
    
volumes:
  pgdata:
```

Este comando cria as imagens não existentes ou faz o download das imagens do Docker Hub e constrói os respectivos contentores.

```bash
docker-compose build
```

Para executar o serviço:

```bash
docker-compose up
```

No caso de não existirem alterações aos ficheiros, basta executar o último comando. Todavia, no caso de existirem alterações, o Docker detectá-las-à e recria os contentores necessários.



