# NestJs

## Autenticação

## Endpoints

O servidor dispõem um API REST a que o cliente pode efectuar pedidos. Segue a lista de endpoints que a compõem.

### Country

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
{% api-method-parameter name="country\_code" type="string" required=false %}
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
{% api-method-parameter name="country\_code" type="string" required=false %}
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

## Updates de Dados

## Subscribers

## TypeORM

## Queues

## WebSockets



