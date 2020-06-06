import tensorflow as tf

import numpy as np
import os

from datetime import datetime
from datetime import timedelta

from database import update_predictions

BATCH_SIZE = 32
BUFFER_SIZE = 1000

EVALUATION_INTERVAL = 200
EPOCHS = 20

PREDICTION_FORECAST = 7

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

def train(model_path, data):

    values_t, labels_t = univariate_data(data, 0, None, PREDICTION_FORECAST, 0)

    train_x = tf.data.Dataset.from_tensor_slices((values_t, labels_t))
    train_x = train_x.cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE).repeat()

    if os.path.isdir(model_path):

        model = tf.keras.models.load_model(model_path)

    else:

        model = tf.keras.models.Sequential([
            tf.keras.layers.GRU(
                32, activation='relu', return_sequences=True, input_shape=values_t.shape[-2:]),
            tf.keras.layers.Conv1D(filters=32, kernel_size=7, strides=4, padding="valid",
                                   ),
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

        model.compile(optimizer='adam', loss='mae')

        model.summary()

    model.fit(train_x, epochs=EPOCHS,
              steps_per_epoch=EVALUATION_INTERVAL, batch_size=BATCH_SIZE)

    model.save(model_path)

def predict(model_path, base_values, timestamps, country_code):

    model = tf.keras.models.load_model(model_path)

    last_timestamp = timestamps[-1]
    before = base_values
    new_predictions = []

    for i in range(PREDICTION_FORECAST):

        values_t, _ = univariate_data(before, 0, None, PREDICTION_FORECAST, -1)

        new_pred = model.predict(values_t)[0][0]

        before.pop(0)
        before.append(new_pred)

        new_predictions.append((new_pred, last_timestamp + timedelta(days=(i + 1))))

    update_predictions(country_code, new_predictions)
