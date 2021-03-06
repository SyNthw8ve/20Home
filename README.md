---
description: >-
  Descrição geral da aplicação e respectivas funcionalidades. Breve visão sobre
  a arquitectura utilizada e tecnologias.
---

# Visão Geral

## Descrição

Dada a situação actual que vivemos, é importante estarmos informados sobre a evolução da pandemia no nosso país e no mundo. Desta forma, pretende-se desenvolver uma aplicação web que permita visualizar, principalmente, a distribuição de casos pelos vários países. Caso os países disponham dessa informação, também se adicionará a informação respeitante às suas regiões, podendo obter também a sua distribuição de casos. Como tal, a aplicação deverá assentar sobre uma base de dados que mantenha toda a informação pertinente e permita as funcionalidades abaixo listadas. 

## Funcionalidades

Posto a descrição geral da aplicação, comecemos a detalhar um pouco mais, esclarecendo quanto às funcionalidades disponíveis da aplicação.

* 1\) Obter o número de casos num país.
* 1\) Obter estatísticas sobre a evolução de indicadores num país, em especial:
  * Evolução de casos confirmados.
  * Evolução de óbitos.
  * Evolução de casos activos.
  * Evolução de casos recuperados.
* 1\) Obter o número de casos numa região \(se disponível\).
* 1\) Obter estatísticas sobre a evolução de indicadores numa região, destacando:
  * Evolução de casos confirmados.
  * Evolução de óbitos.
  * Evolução de casos recuperados.
* 2\) Inserir um novo caso.
* 3\) Notificar utilizadores sobre novos casos perto de si.
  * Aqueles que estiverem online receberão as notificações em tempo real.
  * Não obstante, todas as notificações ficarão na base de dados até o utilizador as marcar como lidas e as eliminar.
* 3\) Actualizar os dados da aplicação.
* 3\) Manter uma previsão dos casos activos de cada país. Estes valores serão previstos numa janela de 7 dias.
* 1\) Consultar as previsões.
* 3\) Actualizar as previsões aquando da inserção de novos dados.
* 3\) Permitir o registo e login de utilizadores. Estes serão divididos em:
  * Utilizador comum.
  * Profissional de Saúde.

### Permissões

* Todos os utilizadores podem realizar as operações assinaladas com 1\).
* Apenas profissionais de saúde podem realizar as operações assinaladas com 2\).
* Só o sistema tem permissão para realizar as operações assinaladas com 3\).

## Stack de Tecnologias

Para o desenvolvimento da aplicação foram utilizadas as seguintes tecnologias:

* Front End:
  * [Angular](https://angular.io/)
  * [Nginx](https://www.nginx.com/)
* Back End:
  * [NestJS](https://nestjs.com/)
  * [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* Base de Dados/Cache:
  * [Redis](https://redis.io/)
  * [PostgreSQL](https://www.postgresql.org/)
* Deployment/Micro-serviços:
  * [Docker](https://www.docker.com/)
* AI:
  * [Tensorflow](https://www.tensorflow.org/)

Estas interagem segundo o seguinte diagrama:

![Interac&#xE7;&#xE3;o dos Componentes da Aplica&#xE7;&#xE3;o](.gitbook/assets/group-1.png)

## Data Sources

O fornecimento de dados é feito através de pedidos REST às seguintes APIs:

* \*\*\*\*[**COVID-19 REST API Portugal**](https://covid19-api.vost.pt/)\*\*\*\*
* \*\*\*\*[**COVID19 API**](https://covid19api.com/)\*\*\*\*





