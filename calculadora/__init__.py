from flask import Flask
from zeep import Client
# from flask_login import LoginManager
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker


import sys
sys.path.append(".")

app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/namedb'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SECRET_KEY'] = 'your secret key'

from calculadora.controllers.calculatorController import  Route
app.register_blueprint(Route, url_prefix='/')