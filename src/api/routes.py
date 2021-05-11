"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
# -Karla- se importa OS
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, user, registro
#, RegistroPersona
from api.utils import generate_sitemap, APIException

# -Karla- Se importó desde Basic Usage
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# -Karla- Create flask app
api = Blueprint('api', __name__)
#Note that USER wil only be a GET used for log in not put needed 

####################### GET POST for USER ############################################
#@api.route('/user', methods=['GET'])
#def handle_hello():

#    people_query = user.query.all()
#    all_people = list(map(lambda x: x.serialize(), people_query))
    
#    return jsonify(all_people), 200

#@api.route('/user', methods=['POST'])
#def add_user():
 #   request_body_user = request.get_json()

 #   bobo = user( #este es el que tiene que ir en M
 #       email= request_body_user["email"],password=request_body_user["password"])

 #   db.session.add(bobo)
 #   db.session.commit()

 #   return jsonify(request_body_user), 200


####################### GET POST for Registro ############################################

@api.route('/registro', methods=['GET'])
def registro_hello():

    registro_query = registro.query.all()
    all_registro = list(map(lambda x: x.serialize(), registro_query))
    
    return jsonify(all_registro), 200

@api.route('/registro', methods=['POST'])
def add_registro():
    request_body_registro = request.get_json()

    toto = registro( #este es el que tiene que ir en M
     identificacion= request_body_registro["identificacion"],
     nombre=request_body_registro["nombre"],
     apellido1=request_body_registro["apellido1"],
     apellido2=request_body_registro["apellido2"],
     telefono=request_body_registro["telefono"],
     fecha_nacimiento=request_body_registro["fecha_nacimiento"],
     genero=request_body_registro["genero"], 
     provincia=request_body_registro["provincia"])

    db.session.add(toto)
    db.session.commit()

    return jsonify(request_body_registro), 200
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

#@app.route("/token", methods=["POST"])
#def create_token():
#    email = request.json.get("email", None)
#    password = request.json.get("password", None)
#    if email != "test" or password != "test":
#        return jsonify({"msg": "Bad email or password"}), 401

#    access_token = create_access_token(identity=email)
#    return jsonify(access_token=access_token)




