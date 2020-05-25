from flask import Flask
#import tensorflow as tf

app = Flask(__name__)

@app.route('/')
def hello_world():

    return 'Hello, world?'