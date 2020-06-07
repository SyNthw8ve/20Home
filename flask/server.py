import tensorflow as tf

import numpy as np
import os

from redis import Redis
from rq import Queue

from flask import Flask
from flask import request

from database import get_values
from process import train
from process import predict

MODELS_FOLDER = './models/'

redis_conn = Redis(host='localhost', port=6379)

app = Flask(__name__)

q_train = Queue('train', connection=redis_conn)
q_predict = Queue('predict', connection=redis_conn)


@app.route('/model', methods=['POST'])
def update_model():

    try:

        country_code = request.get_json()['country_code']

        data, timestamps = get_values(country_code)

        path = MODELS_FOLDER + country_code

        job_train = q_train.enqueue(train, args=(path, data,))
        job_predict = q_predict.enqueue(predict, depends_on=job_train, args=(
            path, data[-7:], timestamps, country_code))

    except Exception as e:

        return {'success': False}

    return {'success': True}


if __name__ == '__main__':

    app.run()
