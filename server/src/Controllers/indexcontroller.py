#indexcontroller.py
import os
from flask import Flask, render_template, json, url_for, jsonify,current_app as app

def sendJsonSurvey():
    
   # Read the json file directory and return data
    filename = os.path.join( app.root_path,'src/data', 'surveyData.json')
    with open(filename) as test_file:
     data = json.load(test_file)

    return jsonify(data)