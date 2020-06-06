import tensorflow as tf

import numpy as np
import os

values = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 2,
    "6": 2,
    "7": 2,
    "8": 3,
    "9": 4,
    "10": 8,
    "11": 9,
    "12": 9,
    "13": 2,
    "14": 18,
    "15": 19,
    "16": 34,
    "17": 57,
    "18": 76,
    "19": 86,
    "20": 117,
    "21": 194,
    "22": 143,
    "23": 235,
    "24": 260,
    "25": 320,
    "26": 460,
    "27": 302,
    "28": 633,
    "29": 549,
    "30": 724,
    "31": 902,
    "32": 792,
    "33": 446,
    "34": 1035,
    "35": 808,
    "36": 783,
    "37": 852,
    "38": 638,
    "39": 754,
    "40": 452,
    "41": 712,
    "42": 699,
    "43": 815,
    "44": 1516,
    "45": 515,
    "46": 598,
    "47": 349,
    "48": 514,
    "49": 643,
    "50": 750,
    "51": 181,
    "52": 663,
    "53": 521,
    "54": 657,
    "55": 516,
    "56": 603,
    "57": 371,
    "58": 444,
    "59": 474,
    "60": 412,
    "61": 163,
    "62": 295,
    "63": 183,
    "64": 368,
    "65": 295,
    "66": 203,
    "67": 92,
    "68": 242,
    "69": 178,
    "70": 480,
    "71": 533,
    "72": 553,
    "73": 138,
    "74": 175,
    "75": 98,
    "76": 234,
    "77": 219,
    "78": 187,
    "79": 264,
    "80": 227,
    "81": 226,
    "82": 173,
    "83": 223,
    "84": 228,
    "85": 252,
    "86": 288,
    "87": 271,
    "88": 152,
    "89": 165,
    "90": 219,
    "91": 285,
    "92": 304,
    "93": 350,
    "94": 257,
    "95": 297,
    "96": 200,
    "97": 195,
    "98": 366,
    "99": 331,
    "100": 377
}

values = list(values.values())

""" values = [20915,
  21929,
   9704,
  13126,
  14710,
  18024,
  20366,
  14062,
  16026,
  16013,
  17533,
  19606,
  22684,
  25991,
  28436,
  30816,
  51784,
  54701,
  59296]
 """

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


values_t, labels_t = univariate_data(values, 0, None, 7, 0)


BATCH_SIZE = 32
BUFFER_SIZE = 1000

train_x = tf.data.Dataset.from_tensor_slices((values_t, labels_t))
train_x = train_x.cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE).repeat()

model = tf.keras.models.Sequential([
    tf.keras.layers.GRU(32, activation='relu', return_sequences=True, input_shape=values_t.shape[-2:]),
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

EVALUATION_INTERVAL = 200
EPOCHS = 20

model.fit(train_x, epochs=EPOCHS, steps_per_epoch=EVALUATION_INTERVAL, batch_size=BATCH_SIZE)

model.save('./PT')