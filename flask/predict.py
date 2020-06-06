import tensorflow as tf

import numpy as np
import os

""" vals = [
    22684,
    25991,
    28436,
    30816,
    51784,
    54701,
    59296] """

vals = [
        257,
        297,
        200,
        195,
        366,
        331,
        377]


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


model = tf.keras.models.load_model('./PT')

before = vals

for i in range(7):

    values_t, _ = univariate_data(before, 0, None, 7, -1)

    new_pred = model.predict(values_t)[0][0]

    print(new_pred)

    before.pop(0)
    before.append(new_pred)

