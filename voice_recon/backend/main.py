from flask import Flask
from flask import jsonify, make_response
from flask_cors import CORS
from lights import led
from DHT11Test import temp
from datetime import datetime
app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_word():
    return "<p>pwp</p>"

@app.route("/lights")
def lights():
    led()
    return "OK"


@app.route("/temps")
def temps():
    temperature, humidity = temp()
    return make_response(jsonify({
        "temp": temperature,
        "humidity": humidity,
        "date": datetime.now()
    }), 200)

if __name__ == '__main__':
    app.run(port=8080, debug=True)