"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
# -Karla- se importa OS
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, user, registro
from api.utils import generate_sitemap, APIException

# -Karla- Se importó desde Basic Usage
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# -Karla- Create flask app
api = Blueprint('api', __name__)

#-----------------------------------------------------------#

@api.route("/token", methods=["POST"])
def create_token():    
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email, password)
   
    if email is None:
        return jsonify({"msg": "Please provide an email address"}), 401
    if password is None:
        return jsonify({"msg": "Please provide an password address"}), 401
   
    user_current = user.query.filter_by(email=email).first()
    print(user_current.password)
   
    if user_current is None:
        return jsonify({"msg": "Incorrect username"}), 401
    if user_current.password != password:
        return jsonify({"msg": "Incorrect password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

#-----------------------------------------------------------#

@api.route('/register', methods=['GET'])
def get_register():
    query = user.query.all()
    all_todos = list(map(lambda x: x.serialize(), query))
    return jsonify(all_todos), 200

#-----------------------------------------------------------#

@api.route('/register/<string:email>', methods=['PUT'])
def put_register(email):
        data = request.get_json()
        usuario = user.query.filter_by(email=email).first()
        if usuario:
            usuario.password = data["password"]
        else:
            usuario = user(email=email,**data)
        db.session.add(usuario)
        db.session.commit()
        return usuario.json()

#-----------------------------------------------------------#

@api.route('/register/<string:email>', methods=['DELETE'])
def delete_register(email):    
    usuario = user.query.filter_by(email=email).first()
    if usuario:
        db.session.delete(usuario)
        db.session.commit()
        return {'message':'Usuario Eliminado'},200
    else:
        print(email)
        return {'message': 'Usuario no encontrado'},404

#-----------------------------------------------------------#

@api.route("/register", methods=["POST"])
def register_user():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", None)
    print(email, password)
    
    if email is None:
        return jsonify({"msg": "Por favor, agregue un email"}), 401
    if password is None:
        return jsonify({"msg": "Por favor, agregue una contraseña"}), 401
    if is_active is None:
        return jsonify({"msg": "Active el usuario"}), 401    

    user_nuevo = user(email=email, password=password, is_active=is_active)
    db.session.add(user_nuevo)
    db.session.commit()
    
    return jsonify({"msg": "Usuario creado satisfactorimente"}), 200    

#-----------------------------------------------------------#


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }   
    return jsonify(response_body), 200

#-----------------------------------------------------------#