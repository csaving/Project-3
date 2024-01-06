import json
from flask import Flask, jsonify, render_template
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB Setup
client = MongoClient('mongodb://localhost:27017/')
db = client['us_housing'] 
hv = db['home_values'] 

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/api/v1.0/linechart/<state_name>")
def linechart(state_name): 
    client = MongoClient(port=27017)
    db = client['us_housing'] 
    hv = db['home_values']  

    query = {"StateName": {"$exists": True, "$eq": state_name}}
    projection = {"_id": False}

    # Perform the find operation with field exclusion
    results = hv.find(query, projection)

    all_values = []

    for record in results:
        all_values.append(record)

    return jsonify(all_values)

@app.route("/api/v1.0/barchart")
def barchart(): 
    client = MongoClient(port=27017)
    db = client['us_housing'] 
    hv = db['home_values']  

    # Perform the find operation with field exclusion
    results = hv.find({}, {"_id": False})

    all_values = []

    for record in results:
        all_values.append(record)

    return jsonify(all_values)

# @app.route("/api/v1.0/boundaries")
# def boundary():
#     with open("./static/data/allData_reduced.geojson") as file:
#         json_decoded = json.load(file)

#     return json_decoded

if __name__ == '__main__':
    app.run(debug=True)

