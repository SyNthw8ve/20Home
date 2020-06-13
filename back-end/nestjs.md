# NestJs

## Autenticação

## TypeORM

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

Como dito na secção de Database, os dados são actualizados por rotinas de servidor agendadas. Este agendamento é conseguido através do uso de um scheduler providenciado pelo NestJs, o Cron.

### Update dos Registos dos Países

O update dos registos dos países é feito de 12 em 12 horas.

```typescript
@Cron('0 0 */12 * * *')
```

Por cada país é adicionado a uma queue de processamento um pedido de actualização dos registos desse país, por forma a não bloquear a thread principal com esta tarefa. Quando o pedido de cada país é processado, é feito um pedido à API que devolve os registos de um país entre duas datas: a de começo e a de fim. Desta maneira, mesmo que exista um problema no servidor e este não possa executar o procedimento, ao utilizar a data do último registo do país e a data actual, é possível restabelecer os dados.

Ao receber os dados, verifica-se se é necessário um update. Caso não seja, chegamos ao fim do processamento do país. Caso existam novos dados, estes são separados em dados correspondentes ao país e às regiões. Após este tratamento, são actualizadas as tabelas correspondentes.

```typescript
const data: any = job.data;
const country = data.country;

const last_update: Date = await this.records_country_service
    .get_last_date(country['ISO2']);

const date_string = this.format_date(last_update);

const url: string = `https://api.covid19api.com/live/country/
    ${country.Slug}/status/confirmed/date/${date_string}`;

this.logger.log(`Checking for record updates of country 
    ${country.Country}`)

this.http.get(url, {}).subscribe(async (res: any) => {

    const logs = res.data;

    if (logs.length == 0) this.logger
        .log(`Records of ${country.Country} is up to date`);

    else {

        this.logger.log(`Found ${logs.length} 
            new entries for country ${country.Country}. 
            Updating...`)

        const records = this.filter_countries(logs);

        const records_country = records.countries;
        const records_region = records.regions;

        try {

            await this.records_country_service
                .insert_new_records(records_country);

        } catch (err) {

            this.logger.error(err);
        }

        try {

            await this.records_region_service
                .insert_new_records(records_region);

        } catch (err) {

            this.logger.error(err);
        }

        this.logger.log(`Updated entries for country 
            ${country.Country}`);
    }

});
```

### Update dos Indicadores do País

O update dos indicadores do país é feito de 12 em 12 horas.

```typescript
@Cron('0 0 */12 * * *')
```

Neste caso, antes de adicionar o pedido de processamento à queue, é feito um pedido à API que contém todos os novos indicadores dos países. Assim, como já obtivemos os dados correspondentes, basta actualizar os respectivos países.

```typescript
this.http.get('https://api.covid19api.com/summary', {})
    .subscribe((res: any) => {

    res.data.Countries.forEach(async item => {

        try {

            await this.update_queue
                .add('country', { country: item })

        } catch (error) {


        }
    })
})
```

Desta maneira, um job na queue só precisa de actualizar as respectivas tabelas.

```typescript
const data: any = job.data;
const country_data = data.country;

const update_data = {
    countryCode: country_data.CountryCode, 
    confirmed: country_data.TotalConfirmed,
    deaths: country_data.TotalDeaths, 
    recovered: country_data.TotalRecovered
}

try {

    this.logger.log(`Updating country 
        ${country_data.Country} values...`);

    await this.country_service.update_country(update_data);

    this.logger.log(`Updated country 
        ${country_data.Country}`);

} catch (error) {

    this.logger.error(error);
}
```

### Update das Regiões de Portugal

Os dados das regiões de Portugal não estão disponíveis na API principal, todavia, podemos utilizar a API da DGS que disponibiliza dos dados para as regiões portuguesas. Este update é feito à 1 da manhã todos os dias.

```typescript
@Cron('0 0 1 * * *')
```

Neste caso, basta efectuar o pedido à API no endpoint correspondente ao último update e processar os dados de maneira a que se adequém à estrutura da base de dados.

```typescript
this.http
.get('https://covid19-api.vost.pt/Requests/get_last_update', 
    {}).subscribe(async (res: any) => {

    const last_update = res.data;
    
    const data = {
        date: last_update.data_dados + ':00', records: [
            {
                regionName: 'Norte',
                confirmed: last_update.confirmados_arsnorte,
                recovered: last_update.recuperados_arsnorte 
                    == null ? 
                        0 : 
                        last_update.recuperados_arsnorte,
                deaths: last_update.obitos_arsnorte
            },
            {
                regionName: 'Centro',
                confirmed: last_update.confirmados_arscentro,
                recovered: last_update.recuperados_arscentro 
                    == null ? 
                        0 : 
                        last_update.recuperados_arscentro,
                deaths: last_update.obitos_arscentro
            },
            {
                regionName: 'Lisboa e Vale do Tejo',
                confirmed: last_update.confirmados_arslvt,
                recovered: last_update.recuperados_arslvt 
                    == null ? 
                        0 : 
                        last_update.recuperados_arslvt,
                deaths: last_update.obitos_arslvt
            },
            {
                regionName: 'Alentejo',
                confirmed: last_update
                    .confirmados_arsalentejo,
                recovered: last_update
                    .recuperados_arsalentejo 
                    == null ?
                         0 : 
                         last_update.recuperados_arsalentejo,
                deaths: last_update.obitos_arsalentejo
            },
            {
                regionName: 'Algarve',
                confirmed: last_update
                    .confirmados_arsalgarve,
                recovered: last_update.recuperados_arsalgarve 
                    == null ? 
                        0 : 
                        last_update.recuperados_arsalgarve,
                deaths: last_update.obitos_arsalgarve
            },
            {
                regionName: 'Açores',
                confirmed: last_update.confirmados_acores,
                recovered: last_update.recuperados_acores 
                    == null ?
                         0 : 
                         last_update.recuperados_acores,
                deaths: last_update.obitos_acores
            },
            {
                regionName: 'Madeira',
                confirmed: last_update.confirmados_madeira,
                recovered: last_update.recuperados_madeira 
                    == null ?
                    0 : 
                    last_update.recuperados_madeira,
                deaths: last_update.obitos_madeira
            },
        ]
    }
```

Com isto, o job adicionado à queue vai apenas actualizar as respectivas tabelas, tal como no update dos países.

```typescript
const data: any = job.data;
const region_data = data.regions;

const date = this.format_date(region_data.date);

this.logger.log('Updating Portugal region data...')

const records = region_data.records.map(record => {

    record.recordDate = date;

    return record;
})

try {

    await this.records_region_service
        .insert_new_records(records);

    this.logger.log('Finished updating Portugal region data')

} catch (error) {

    this.logger.error(error);
}
```

## Triggers

Para desencadear algumas das funcionalidades da aplicação, recorre-se a triggers.

### Notificações

Aquando da inserção de um novo caso individual, um trigger é accionado, despoletando a sequência de acções necessárias para notificar os utilizadores.

```typescript
async afterInsert(event: InsertEvent<Pointcases>) {

    const a = Math.sin(event.entity.lat);
    const b = Math.cos(event.entity.lat);
    const c = event.entity.long;

    const users: DBUser[] = await event.manager
        .createQueryBuilder()
            .select("dbuser")
            .from(DBUser, "dbuser")
            .where(`acos(:a*sin(dbuser.lat) + 
                :b*cos(dbuser.lat)
                *cos(abs(:c - dbuser.long)))*:r 
                <= :d`, { a: a, b: b, r: R, d: d, c: c })
            .getMany();

    this.notify_service.
        dispatch_notifications(users, event.entity);
}
```

Em primeiro lugar, o trigger, após a inserção de um novo caso, começa por filtrar os utilizadores que estão a 1 km do caso individual. Estes utilizadores serão processados numa queue.

Cada utilizador no raio de 1 km será notificado, mas antes é necessário actualizar as tabelas. Por fim, aos utilizadores online será emitido um evento com a nova notificação. 

```typescript
const job_data: any = job.data;
const users = job_data.users;
const point = job_data.new_case;

users.forEach(async (user) => {

    const notification: Notification = {
        notification_time: new Date().toISOString(),
        notification_type: NotificationType.PROX, 
        is_read: false
    }

    const n_notification = await this.notifications_service
        .insert_notification(notification, 
                            user.username, point);
    
    if (this.gateway.hasUser(user.username)) {

        this.gateway.emitNotification(user.username, 
            n_notification);
    }
})
```

### Registos

Quando é inserido um novo registo num país, as previsões precisam de ser actualizadas e os modelos re-treinados com os novos dados. O treino será discutido aqui:

{% page-ref page="flask.md" %}

Por forma a executar os procedimentos necessários, utiliza-se um trigger que dispara quando um novo registo é inserido.

```typescript
afterInsert(event: InsertEvent<Recordscountry>) {

    const country_code: string = event.entity.countryCode;

    this.update_service.update_models(country_code);
}
```

Os países cujos modelos e previsões serão actualizados, são encaminhados para uma queue que reencaminhará o pedido de processamento para um servidor Flask.

```typescript
async update_models(job: Job<unknown>) {

    const data: any = job.data;
    const country_code = data.country_code;

    this.logger.log(`Updating model for country 
        ${country_code}`);

    this.http.post('localhost:5000/model', 
        {country_code: country_code}).subscribe( (data) => {

        this.logger.log(`Updated model for country 
            ${country_code}`);
    });
}
```

## Queues

De maneira a não ocupar a thread principal do servidor com tarefas para além do atendimento de pedidos e para não ocupar os recursos com várias tarefas em simultâneo, foram criadas duas queues para se ocuparem desse tipo de tarefas e executarem os trabalhos a elas delegados.

As queues são implementadas com o módulo Bull do NestJs.

### Update Queue

Esta queue é responsável por tratar todas as tarefas relacionadas a updates, concretizando:

* Update dos registos dos países
* Update dos indicadores dos países
* Update dos registos das regiões portuguesas

### Notifications Queue

Esta queue é responsável por executar os procedimentos necessários a enviar notificações aos utilizadores, como já discutido junto do trigger de notificações.

## WebSockets

Como dito anteriormente, para os utilizadores online são enviadas notificações em tempo real. Isto é conseguido através do uso de sockets. Um cliente ao entrar na sua conta emite um evento que permite ao conectá-lo ao servidor para que possa receber as notificações. Quando este sai da sua conta ou fecha a janela da aplicação, está conecção é removida, visto que o utilizador não está online. O servidor mantém todos os cliente online.

Quando uma nova notificação é criada, verifica-se se o utilizador está online e emite-se um evento a que o cliente está subscrito. Este evento contém a nova notificação.

```typescript
@WebSocketServer()
server: Server;

@SubscribeMessage('register')
handleMessage(client: any, payload: any) {
  
  const {username, ...data} = payload;
  
  this.users.set(username, client);

  this.logger.warn(`User ${username} registered`);
}

@SubscribeMessage('remove_user')
handleEvent(client: any, payload: any) {

  const username = payload;

  this.users.delete(username);

  this.logger.warn(`User ${username} unregistered`);
}

hasUser(username: string) : boolean {

  return this.users.has(username);
}

emitNotification(username: string, notification) {

  const client: any = this.users.get(username);

  client.emit('notification', notification);
}
```



