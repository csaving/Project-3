import json
from flask import Flask, jsonify, render_template
from pymongo import MongoClient

app = Flask(__name__)

# # MongoDB Setup
# client = MongoClient('mongodb://localhost:27017/')
# db = client['chi_housing'] 
# suicides_collection = db['home_values'] 

@app.route("/")
def welcome():
    return render_template("index.html")



@app.route("/api/test/data")
def data():
    data = [{
        "id": 1,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
        }, {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
        }, {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
        }, {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
    }]
    return jsonify(data)
# @app.route("/api/v1.0/barchart/<state_name>")
# def barchart(state_name): 
#     # users = User.query.filter_by(state=StateName).all()

#     if not users:
#         return jsonify({'message': 'No users found for this state abbreviation'}), 404
#     """"
#     given the state abbreviation, filter the data to return the city names and most recent years median house prices
    
#     """
#     results = housing_values_collection.find({}, {"_id": 0, "RegionID": 1, "RegionName": 1, "StateName": 1, "2023-11-31": 1})

#     all_values = []
#     for record in results:
#         all_values.append(record)

#     return jsonify(all_values)

# @app.route("/api/v1.0/linechart/<state_name>")
# def linechart(state_name): 
#      users = User.query.filter_by(state=StateName).all()

#     if not users:
#         return jsonify({'message': 'No users found for this state abbreviation'}), 404
#     """"
#     given the state abbreviation, return the 8 most recent years data for every city in the state 

#     """
# results = housing_values_collection.find({}, {"_id": 0, "RegionID": 1, "RegionName": 1, "StateName": 1, "2009-01-31": 1, "2010-01-31": 1, "2011-01-31" : 1, "2012-01-31" : 1, "2013-01-31" : 1, "2014-01-31" : 1, "2015-01-31" :1, "2016-01-31" : 1, "2017-01-31" : 1, "2018-01-31" : 1,"2019-01-31" : 1, "2020-01-31" :1, "2021-01-31" : 1, "2022-01-31" :1, "2023-01-31": 1})
#     all_values = []
#     for record in results:
#         all_values.append(record)

#     return jsonify(all_values)

# @app.route("/api/v1.0/boundaries")
# def boundary():
#     with open("./static/data/allData_reduced.geojson") as file:
#         json_decoded = json.load(file)

#     return json_decoded

if __name__ == '__main__':
    app.run(debug=True)