#app.py

from flask import Flask
from src.Controllers.indexcontroller import hello_world


app = Flask(__name__)

@app.route("/",methods = ['POST'])
def index():
    return sendJsonSurvey()

