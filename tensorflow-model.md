---
description: Descrição detalhada do modelo que prevê o número de casos activos de um país.
---

# TensorFlow Model

Na secção de Flask, é feita menção ao modelo utilizado para estimar o número de casos activos numa janela de sete dias. Para tal, recorreu-se à framework de deep learning TensorFlow.

## Modelo

O modelo é constituído pelas seguintes camadas:

### GRU Layer

```python
tf.keras.layers.GRU(
                32, activation='relu', 
                return_sequences=True, 
                input_shape=values_t.shape[-2:])
```

Esta camada permite captar informação temporal geral sobre as variações dos valores de casos activos. É usada em alternativa a uma camada LSTM, visto que as células GRU tem menos parâmetros a treinar e alcançam a mesma performance. É a única camada directamente relacionada com séries temporais utilizada, uma vez que estas camadas requerem mais memória e têm problemas quando aplicado o gradiente.

### CNN Layer

```python
tf.keras.layers.Conv1D(filters=32, 
      kernel_size=7, 
      strides=4, 
      padding="valid")
```

Seguida da camada GRU, são utilizadas uma sucessão de camadas CNN. Apesar de CNN serem normalmente utilizadas em problemas de imagem, estas camadas conseguem captar padrões mais facilmente do que várias camadas LSTM, não sofrendo de problemas de memória e de gradiente.

### Max Pooling Layer

```python
tf.keras.layers.MaxPool1D(pool_size=1)
```

Entre cada camada CNN existe uma camada de Max Pooling, esta camada serve para reduzir o número de dados, de maneira a que as camadas seguintes se possam focar na aprendizagem de outros padrões.

### Flatten Layer

```python
tf.keras.layers.Flatten()
```

Esta camada surge na necessidade de achatar o resultado da última CNN para que se possa propagar uma camada Dense.

### Dense Layer

```python
tf.keras.layers.Dense(32, activation='relu')
tf.keras.layers.Dense(1)
```

Última camada responsável por aprender a avaliar os padrões já processados e atribuir uma estimativa final.

Assim, o modelo resulta em:

```python
tf.keras.models.Sequential([
  tf.keras.layers.GRU(
     32,
     activation='relu', 
     return_sequences=True,
     input_shape=values_t.shape[-2:]),
  tf.keras.layers.Conv1D(filters=32, kernel_size=7,
     strides=4, 
     padding="valid"),
  tf.keras.layers.MaxPool1D(pool_size=1),
  tf.keras.layers.Conv1D(filters=32, kernel_size=1,
            strides=2, padding="valid"),
  tf.keras.layers.MaxPool1D(pool_size=1),
  tf.keras.layers.Conv1D(filters=32, kernel_size=1,
            strides=2, padding="valid"),
  tf.keras.layers.Flatten(),
  tf.keras.layers.Dense(32, activation='relu'),
  tf.keras.layers.Dense(1)
])
```

## Treino

O modelo é treinado durante 20 épocas com um batch size de 32. Os dados de treino são agrupados em janelas de 7 dias. Como optimizador é utilizado Adam e como loss function a função mean absolute error. 

