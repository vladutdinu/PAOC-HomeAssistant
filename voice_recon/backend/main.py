from flask import Flask
from flask import jsonify, make_response
from flask_cors import CORS
import lights
import requests
from DHT11Test import temp
from datetime import datetime
from datetime import datetime

from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

# You can generate an API token from the "API Tokens Tab" in the UI
token = "00MG5PQI2xwnFLLPfboOcXvQhOls-Y698AKDn8zHN7JG1kno3onDihW6ywc8LPo9oLOiTMvSGBe0Uwu_vcFpEw=="
org = "astroswipe2021@gmail.com"
bucket = "astroswipe2021's Bucket"
ESP_IP="http://192.168.43.47"
app = Flask(__name__)
CORS(app)
@app.route("/")
def hello_word():
    return "<p>pwp</p>"

@app.route("/led1/<on>", methods=['POST'])
def bedroom(on):
    lights.bedroom(float(on))
    return "OK"

@app.route("/led2/<on>", methods=['POST'])
def livingroom(on):
    lights.living_room(float(on))
    return "OK"

@app.route("/led3/<on>", methods=['POST'])
def garden(on):
    lights.garden(float(on))
    return "OK"

@app.route("/temps")
def temps():
	temperature = requests.get(ESP_IP+"/temp").content.decode('utf-8')
	print(temperature)
	#temperature, humidity = temp()
	with InfluxDBClient(url="https://eu-central-1-1.aws.cloud2.influxdata.com", token=token, org=org, verify_ssl=False) as client:
		write_api = client.write_api(write_options=SYNCHRONOUS)
		#data="pi4,host=pi4 temp={} humidity={}".format(temperature, humidity)
		point = Point("mem").tag("host", "pi4").field("temp", float(temperature)).time(datetime.utcnow(), WritePrecision.NS)
		write_api.write(bucket, org, point)
		return make_response(jsonify({
			"temp": float(temperature),
			"time": datetime.now().strftime('%H:%M:%S')
			}),200)

@app.route("/humds")
def humds():
	humidity = requests.get(ESP_IP+"/humd").content.decode('utf-8')
	print(humidity)
	with InfluxDBClient(url="https://eu-central-1-1.aws.cloud2.influxdata.com", token=token, org=org,  verify_ssl=False) as client:
		write_api = client.write_api(write_options=SYNCHRONOUS)
		#data="pi4,host=pi4 temp={} humidity={}".format(temperature, humidity)
		point = Point("mem").tag("host", "pi4").field("humidity", float(humidity)).time(datetime.utcnow(), WritePrecision.NS)
		write_api.write(bucket, org, point)
		return make_response(jsonify({
			"humidity": float(humidity),
			"time": datetime.now().strftime('%H:%M:%S')
			}),200)
@app.route("/temperaturi")
def temperaturi():
	d={
		"temp": [],
		"time": []
	}
	with InfluxDBClient(url="https://eu-central-1-1.aws.cloud2.influxdata.com", token=token, org=org,  verify_ssl=False) as client:
		q4='''
			from(bucket: "astroswipe2021's Bucket")
  |> range(start: -30d)
  |> filter(fn: (r) => r["_measurement"] == "mem")
  |> filter(fn: (r) => r["_field"] == "temp")
  |> yield(name: "mean")
		'''
		tables = client.query_api().query(q4, org=org)
		for table in tables:
			for record in table.records:
				d["temp"].append(float(record['_value']))
				d["time"].append(str(record['_time'].strftime('%H:%M:%S')))

		if(len(d)>30):
			d["temp"] = d["temp"][-30:]
			d["time"] = d["time"][-30:]
	return make_response(jsonify(d))
@app.route("/umiditati")
def umiditati():
	d={
		"humidity": [],
		"time": []
	}
	with InfluxDBClient(url="https://eu-central-1-1.aws.cloud2.influxdata.com", token=token, org=org, verify_ssl=False) as client:
		q4='''
			from(bucket: "astroswipe2021's Bucket")
  |> range(start: -30d)
  |> filter(fn: (r) => r["_measurement"] == "mem")
  |> filter(fn: (r) => r["_field"] == "humidity")
  |> yield(name: "mean")
		'''
		tables = client.query_api().query(q4, org=org)
		for table in tables:
			for record in table.records:
				d["humidity"].append(float(record['_value']))
				d["time"].append(str(record['_time'].strftime('%H:%M:%S')))
		if(len(d)>30):
				d["humidity"] = d["temp"][-30:]
				d["time"] = d["time"][-30:]
	return make_response(jsonify(d))

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
