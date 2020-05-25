import tensorflow as tf

import numpy as np
import os

values = [
  15804, 16122, 16534, 17109, 17719, 17846,
  18388, 18882, 19518, 19700, 20054, 20332,
  20715, 21235, 21632, 21742, 22550, 22749,
  22885, 15804, 16122, 16534, 17109, 17719,
  17846, 18388, 18882, 19518, 19700, 20054,
  20332, 20715, 21235, 21632, 21742, 22550,
  22749, 22885, 15804, 16122, 16534, 17109,
  17719, 17846, 18388, 18882, 19518, 19700,
  20054, 20332, 20715, 21235, 21632, 21742,
  22550, 22749, 22885
]

def univariate_data(dataset, start_index, end_index, history_size, target_size):

  data = []
  labels = []

  start_index = start_index + history_size

  if end_index is None:
    end_index = len(dataset) - target_size

  for i in range(start_index, end_index):
    
    data.append(np.reshape(dataset[i-history_size:i], (history_size, 1)))
    labels.append(dataset[i + target_size])

  return np.array(data), np.array(labels)

values_t, labels_t = univariate_data(values, 0, None, 7, 7) 

BATCH_SIZE = 256
BUFFER_SIZE = 10000

train_x = tf.data.Dataset.from_tensor_slices((values_t, labels_t))
train_x = train_x.cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE).repeat()

model = tf.keras.models.Sequential([
    tf.keras.layers.LSTM(8, input_shape=values_t.shape[-2:]),
    tf.keras.layers.Dense(1)
])

model.compile(optimizer='adam', loss='mae')

model.summary()

EVALUATION_INTERVAL = 200
EPOCHS = 20

model.fit(train_x, epochs=EPOCHS, steps_per_epoch=EVALUATION_INTERVAL)
