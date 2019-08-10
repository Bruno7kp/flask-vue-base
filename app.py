from flask import Flask, jsonify, render_template
from flask_cors import CORS


# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')


if __name__ == '__main__':
    app.run()
