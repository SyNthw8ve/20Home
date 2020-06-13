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

## Treino e Previsão

Para treinar os modelos, recorreu-se ao TensorFlow.  Em primeiro lugar, extraem-se os dados relativos ao país da base de dados. O acesso à base de dados é feito através do package psycopg2. Os dados recolhidos são encaminhados para a queue de treino, que irá treinar o modelo correspondente. A discussão do modelo por ser encontrada aqui:

{% page-ref page="../tensorflow-model.md" %}

O módulo de queues utilizado permite estabelecer relações de dependência entre tarefas. Esta funcionalidade é utilizada para estabelecer uma dependência entre o tarefa de treino e a tarefa de previsão. A tarefa de previsão só é executada quando o treino do modelo estiver treinado. O treino termina quando 

Após o treino, a tarefa de previsão carrega o modelo 

