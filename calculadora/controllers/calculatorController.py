from flask import Flask, request, redirect, url_for, flash, jsonify
from flask import Blueprint, render_template
from zeep import Client
import json

Route = Blueprint('Login',__name__)

class Loging():

    @Route.route('/',methods=['GET','POST'])
    def index():
        if request.method == 'POST': 
            url = 'http://dneonline.com/calculator.asmx?wsdl'
            client = Client(wsdl=url)
            # ! data es los datos de las variables, provienen de js atraves de ajax 
            data = request.json
            resultado = ''
            if data['operacion'] == '+':
                resultado = client.service.Add(data['v1'],data['v2'])
            if data['operacion'] == '/':
                resultado = client.service.Divide(data['v1'],data['v2'])
            if data['operacion'] == 'x':
                resultado = client.service.Multiply(data['v1'],data['v2'])
            if data['operacion'] == '-':
                resultado = client.service.Subtract(data['v1'],data['v2'])
            
            return json.JSONEncoder().encode(resultado)
        else:
            return render_template('index.html')