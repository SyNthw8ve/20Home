# Flask

O servidor NestJs não é o mais adequado para treinar modelos de deep learning, para além dos recursos necessários, a arquitectura de JavaScript não fornece boas ferramentas para treinar modelos de machine ou deep learning. Desta maneira, recorre-se a um ambiente python para tal.

## Endpoints

O servidor Flask disponibiliza apenas um endpoint que diz respeito ao país cujo modelo necessita de ser treinado e cujas previsões precisam de ser actualizadas.

{% api-method method="post" host="/api" path="/model" %}
{% api-method-summary %}
Train Model
{% endapi-method-summary %}

{% api-method-description %}
Treina o modelo correspondente ao país e efectua novas previsões.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="country\_code" type="string" required=true %}
Código do país a treinar o modelo.
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{'success': True}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Queues

Também o servidor Flask dispões de duas queues. Uma queue responsável pelo treino dos modelos e outra responsável pela previsão e actualização das previsões da base de dados.



## Treino



