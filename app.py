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
    
    # return render_template("index.html")
    # return "<a href=http://127.0.0.1:5000/api/v1.0/barchart/AL>Click here for AL</a>"
    return render_template("index.html")


@app.route("/api/v1.0/barchart/<state_name>")
# /api/v1.0/barchart/AL
def barchart(state_name): 

    client = MongoClient(port=27017)
    db = client['us_housing'] 
    hv = db['home_values'] 

    query = {"StateName": {"$exists": True, "$eq": state_name}}
    projection = {"_id": False}

# Perform the find operation with field exclusion
    results = hv.find(query, projection)

    all_values = []

    for value in results[:100]:
        print(value)
        all_values.append({
            "StateName": value["StateName"],
            "HomeValue": value["2023-07-31"],
            "City": value["RegionName"]
        })
    return jsonify(all_values)

if __name__ == "__main__":
    app.run(debug=True)