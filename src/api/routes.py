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

#@api.route('/register/<string:email>', methods=['PUT'])
#def put_register(email):
#        email = request.json.get("email", None)
#        print(email)
#        usuario = user.query.filter_by(email=email).first()
#        if usuario:
#            usuario.password = email["password"]
#        else:
#            usuario = user(email=email)
#            #usuario = user(email=email,**email)
#        db.session.add(usuario)
#        db.session.commit()
#        return usuario.json(),200



@api.route('/register/<string:email>', methods=['PUT'])
def update_register(email): 

    usuario = user.query.get(email)
    if usuario is None:
        raise APIException('Usuario no encontrado', status_code=403)

    request_body = request.get.json()
    if "password" in request_body:
        usuario.password = register_body["password"]

    db.session.commit()

    return jsonify("El usuario se ha actualizado correctamente"), 200   


@api.route('/register/<int:id>', methods=['PUT'])
def update_register_2(id): 
    usuario = user.query.get(id)
    if usuario is None:
        raise APIException('Usuario no encontrado', status_code=403)
    request_body = request.json.get()
    if "password" in request_body:
        usuario.password = register_body["password"]
    db.session.commit()
    return jsonify("El usuario se ha actualizado correctamente"), 200


@api.route('/register', methods=['PUT'])
def update_register_3(): 

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    usuario = user.query.filter_by(email=email).first()   

    print(email, password)
    
    if email is None:
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    
    if "email" in email:
       
        usuario.password = register_body["password"]
      
    print(usuario.password)

    db.session.commit()
   # request_body = request.get.json()
   # if "password" in request_body:
   #     usuario.password = register_body["password"]

    return jsonify({"msg:" "El usuario se ha actualizado correctamente"}), 200  

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
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    if password is None:
        return jsonify({"msg": "Por favor, agregue una contraseña"}), 400
    if is_active is None:
        return jsonify({"msg": "Active el usuario"}), 400

    usuario = user.query.filter_by(email=email, password=password).first()
    if usuario:
        return jsonify({"msg": "Ya existe este usuario en la BD"}),401
    else:
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

@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    usuario = user.query.get(current_user_id)

    print(current_user_id, usuario)
    return jsonify({"id":usuario.id, "email": usuario.email}), 200


#-----------------------------------------------------------#