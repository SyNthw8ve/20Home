# NestJs

## Autenticação

## Endpoints

O servidor dispõem um API REST a que o cliente pode efectuar pedidos. Segue a lista de endpoints que a compõem.

### Countries

{% api-method method="get" host="/api/country" path="/" %}
{% api-method-summary %}
All Countries
{% endapi-method-summary %}

{% api-method-description %}
Devolve todos os países com os respectivos indicadores.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "countryCode": "DO",
        "countryName": "Dominican Republic",
        "confirmed": 20415,
        "deaths": 544,
        "recovered": 12208,
        "lat": "18.74",
        "long": "-70.16"
    },
    {
        "countryCode": "FR",
        "countryName": "France",
        "confirmed": 191523,
        "deaths": 29299,
        "recovered": 71626,
        "lat": "-12.83",
        "long": "45.17"
    },
    {
        "countryCode": "JM",
        "countryName": "Jamaica",
        "confirmed": 605,
        "deaths": 10,
        "recovered": 405,
        "lat": "18.11",
        "long": "-77.3"
    },
    ...
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/country" path="/:country\_code" %}
{% api-method-summary %}
Country
{% endapi-method-summary %}

{% api-method-description %}
Devolve os dados de um país.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país a obter os dados.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "countryCode": "FR",
    "countryName": "France",
    "confirmed": 191523,
    "deaths": 29299,
    "recovered": 71626,
    "lat": "-12.83",
    "long": "45.17"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/country" path="/regions/:country\_code" %}
{% api-method-summary %}
Country Regions
{% endapi-method-summary %}

{% api-method-description %}
Endpoint para obter as regiões de um país.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país para obter as regiões.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "regionName": "Mayotte",
        "long": "45.17",
        "lat": "-12.83"
    },
    {
        "regionName": "Martinique",
        "long": "-61.02",
        "lat": "14.64"
    },
    {
        "regionName": "Saint Barthelemy",
        "long": "-62.83",
        "lat": "17.9"
    },
    {
        "regionName": "New Caledonia",
        "long": "165.62",
        "lat": "-20.9"
    },
    {
        "regionName": "Reunion",
        "long": "55.25",
        "lat": "-21.14"
    },
    {
        "regionName": "Guadeloupe",
        "long": "-61.58",
        "lat": "16.25"
    },
    {
        "regionName": "French Polynesia",
        "long": "149.41",
        "lat": "-17.68"
    },
    {
        "regionName": "French Guiana",
        "long": "-53.13",
        "lat": "3.93"
    },
    {
        "regionName": "St Martin",
        "long": "-63.05",
        "lat": "18.07"
    },
    {
        "regionName": "Saint Pierre and Miquelon",
        "long": "-56.32",
        "lat": "46.89"
    }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Records Country

{% api-method method="get" host="/api/records\_country/:country\_code" path="/" %}
{% api-method-summary %}
Records Country
{% endapi-method-summary %}

{% api-method-description %}
Devolve todos os registos de um país.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país a extrair os registos.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
  [
    ...
    {
        "countryCode": "PT",
        "recordDate": "2020-06-02T23:00:00.000Z",
        "recovered": 20079,
        "deaths": 1447,
        "cases": 33261,
        "active": 11735
    },
    {
        "countryCode": "PT",
        "recordDate": "2020-06-03T23:00:00.000Z",
        "recovered": 20323,
        "deaths": 1455,
        "cases": 33592,
        "active": 11814
    },
    {
        "countryCode": "PT",
        "recordDate": "2020-06-04T23:00:00.000Z",
        "recovered": 20526,
        "deaths": 1465,
        "cases": 33969,
        "active": 11978
    }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/records\_country/:country\_code" path="/:date" %}
{% api-method-summary %}
Records Country Date
{% endapi-method-summary %}

{% api-method-description %}
Devolve um registo de um país num dia.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país a extrair os registos.
{% endapi-method-parameter %}

{% api-method-parameter name="date" type="string" required=true %}
Data do registo a obter.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "countryCode": "PT",
    "recordDate": "2020-06-02T23:00:00.000Z",
    "recovered": 20079,
    "deaths": 1447,
    "cases": 33261,
    "active": 11735
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Regions

{% api-method method="get" host="/api/region" path="/" %}
{% api-method-summary %}
All Regions
{% endapi-method-summary %}

{% api-method-description %}
Devolve todas as regiões.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "regionName": "New South Wales",
        "long": "151.21",
        "lat": "-33.87"
    },
    {
        "regionName": "Queensland",
        "long": "153.4",
        "lat": "-28.02"
    },
    {
        "regionName": "Victoria",
        "long": "144.96",
        "lat": "-37.81"
    },
    ...
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/region" path="/:region\_name" %}
{% api-method-summary %}
Region
{% endapi-method-summary %}

{% api-method-description %}
Devolve uma região com os respectivos detalhes.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="region\_name" type="string" required=true %}
Nome da região a obter.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "regionName": "Victoria",
    "long": "144.96",
    "lat": "-37.81"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Records Region

{% api-method method="get" host="/api/records\_region/:region\_name" path="/" %}
{% api-method-summary %}
All Records From Region
{% endapi-method-summary %}

{% api-method-description %}
Devolve todos os registos de uma região.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="region\_name" type="string" required=true %}
Nome da região a obter registos.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    ...
    {
        "regionName": "Victoria",
        "recordDate": "2020-06-02T23:00:00.000Z",
        "confirmed": 1678,
        "recovered": 1569,
        "deaths": 19
    },
    {
        "regionName": "Victoria",
        "recordDate": "2020-06-03T23:00:00.000Z",
        "confirmed": 1681,
        "recovered": 1586,
        "deaths": 19
    },
    {
        "regionName": "Victoria",
        "recordDate": "2020-06-04T23:00:00.000Z",
        "confirmed": 1681,
        "recovered": 1586,
        "deaths": 19
    }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/records\_region/:region\_name" path="/:date" %}
{% api-method-summary %}
Record From Region on Date
{% endapi-method-summary %}

{% api-method-description %}
Devolve um registo de uma região numa data.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="date" type="string" required=true %}
Data do registo a obter.
{% endapi-method-parameter %}

{% api-method-parameter name="region\_name" type="string" required=true %}
Nome da região.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "regionName": "Victoria",
    "recordDate": "2020-06-02T23:00:00.000Z",
    "confirmed": 1678,
    "recovered": 1569,
    "deaths": 19
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### User

{% api-method method="post" host="/api/user" path="/new" %}
{% api-method-summary %}
New User
{% endapi-method-summary %}

{% api-method-description %}
Cria um novo utilizador.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="user" type="object" required=true %}
Objecto com dos dados do novo utilizador.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/user" path="/notification/:username" %}
{% api-method-summary %}
Notifications
{% endapi-method-summary %}

{% api-method-description %}
Devolve as notificações não lidas de um utilizador.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="username" type="string" required=true %}
Username do utilizador a obter notificações.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "id": 247,
        "notificationTime": "2020-06-13T16:15:19.064Z",
        "notificationType": "proximity",
        "isRead": false
    }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/user" path="/check\_email?email=:email" %}
{% api-method-summary %}
Check Email
{% endapi-method-summary %}

{% api-method-description %}
Verifica se um email está disponível.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
Email a verificar disponibilidade.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
true
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/user" path="/check\_username?username=:username" %}
{% api-method-summary %}
Check Username
{% endapi-method-summary %}

{% api-method-description %}
Verifica se um username está disponível.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="username" type="string" required=true %}
Username a verificar disponibilidade.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
false
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="/api/user" path="/check\_health\_code?health\_code=:health\_code" %}
{% api-method-summary %}
Check Health Code
{% endapi-method-summary %}

{% api-method-description %}
Verifica se o código de profissional de saúde está disponível. \(Apenas para registos de profissionais de saúde\).
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="health\_code" type="string" required=true %}
Código de saúde a verificar disponibilidade.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
true
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Notifications

{% api-method method="put" host="/api/notification" path="/update" %}
{% api-method-summary %}
Update Notifications
{% endapi-method-summary %}

{% api-method-description %}
Actualiza o estado de uma notificação.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="notifications" type="object" required=true %}
Notificações a actualizar.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Point Cases

{% api-method method="get" host="/api/pointcases" path="/" %}
{% api-method-summary %}
All Point Cases
{% endapi-method-summary %}

{% api-method-description %}
Devolve todos os casos individuais registados.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "id": 8,
        "long": "-9.13560928232255",
        "lat": "38.72762263347028",
        "caseTime": "2020-05-16T19:48:27.289Z"
    },
    {
        "id": 9,
        "long": "-9.14309234255547",
        "lat": "38.71257201354583",
        "caseTime": "2020-05-16T20:37:11.461Z"
    },
    ...
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="/api/pointcases" path="/new" %}
{% api-method-summary %}
New Point Case
{% endapi-method-summary %}

{% api-method-description %}
Adiciona um novo caso individual.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="new\_case" type="object" required=true %}
Objecto que representa o novo caso a adicionar.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### Predictions

{% api-method method="get" host="/api/predictions" path="/:country\_code" %}
{% api-method-summary %}
Predictions From Country
{% endapi-method-summary %}

{% api-method-description %}
Devolve as previsões para um país.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país a obter as previsões.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    {
        "countryCode": "PT",
        "predictionValue": 11474,
        "predictionDate": "2020-06-05T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 11174,
        "predictionDate": "2020-06-06T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 10794,
        "predictionDate": "2020-06-07T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 10368,
        "predictionDate": "2020-06-08T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 9786,
        "predictionDate": "2020-06-09T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 9087,
        "predictionDate": "2020-06-10T23:00:00.000Z"
    },
    {
        "countryCode": "PT",
        "predictionValue": 8269,
        "predictionDate": "2020-06-11T23:00:00.000Z"
    }
]
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=401 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
    "statusCode": 401,
    "message": "Unauthorized"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Updates de Dados

## Subscribers

## TypeORM

## Queues

## WebSockets



