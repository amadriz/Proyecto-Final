"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
# -Karla- se importa OS
import os
from flask import Flask, request, jsonify, url_for, Blueprint, flash
from api.models import db, User, Registro
from api.utils import generate_sitemap, APIException

# -Karla- Se importó desde Basic Usage
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# -Karla- Create flask app
api = Blueprint('api', __name__)
#Note that USER wil only be a GET used for log in not put needed 


#-----------------------------------------------------------#

@api.route("/token", methods=["POST"])
def create_token():  
      
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    print(email, password)
 
    if email is None:
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if email == "":
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if password is None:
        return jsonify({"msg": "Para continuar, agregue su contraseña"}), 400
    
    if password == "":
        return jsonify({"msg": "Para continuar, agregue su contraseña"}), 400
   
    user_current = User.query.filter_by(email=email).first()
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
    query = User.query.all()
    all_todos = list(map(lambda x: x.serialize(), query))
    return jsonify(all_todos), 200

#-----------------------------------------------------------#

@api.route('/register', methods=['PUT'])
def update_register(): 

    email = request.json.get("email", None)
    
    password = request.json.get("password", None)

    usuario = User.query.filter_by(email=email).first()   

    usuario.password = password

    print(email, password)
    
    if email is None:
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if email == "":
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if email == " ":
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if password is None:
        return jsonify({"msg": "Para continuar, agregue su nueva contraseña"}), 400
    
    if password == "":
        return jsonify({"msg": "Para continuar, agregue su nueva contraseña"}), 400
    
    if password == " ":
        return jsonify({"msg": "Para continuar, agregue su nueva contraseña"}), 400
        
    else:
        print(usuario.password)
        db.session.commit()
        
    return jsonify({"msg": "Los datos se han actualizado correctamente"}), 200  

#-----------------------------------------------------------#

@api.route('/register/<string:email>', methods=['DELETE'])
def delete_register(email):    
    usuario = User.query.filter_by(email=email).first()
    if usuario:
        db.session.delete(usuario)
        db.session.commit()
        return {'message':'Usuario Eliminado'},200
    else:
        print(email)
        return {'message': 'Usuario no encontrado'},404



@api.route('/register', methods=['DELETE'])
def del_register(): 

    email = request.json.get("email", None)
    
    usuario = User.query.filter_by(email=email).first()   

    print(email)
    
    if email is None:
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if email == "":
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
    if email == " ":
        return jsonify({"msg": "Para continuar, agregue su email"}), 400
    
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
    id = request.json.get("identificacion", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    is_active = request.json.get("is_active", None)
    print(email, password)
    
    if email and password == " ":
        return jsonify({"msg": "Por favor, agregue un email y contraseña"}), 400
    if email is None:
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    if email == "":
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    if email == " ":
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    if password is None:
        return jsonify({"msg": "Por favor, agregue una contraseña"}), 400
    if password == "":
        return jsonify({"msg": "Por favor, agregue una contraseña"}), 400
    if password == " ":
        return jsonify({"msg": "Por favor, agregue una contraseña"}), 400

    if is_active is None:
        return jsonify({"msg": "Active el usuario"}), 400

    usuario = User.query.filter_by(email=email, password=password).first()
    if usuario:
        return jsonify({"msg": "Ya existe este usuario en la BD"}),401
    else:
        user_nuevo = User(id=id, email=email, password=password, is_active=is_active)
    
        db.session.add(user_nuevo)
        db.session.commit()

        flash("Se ha registrado exitosamente")
        
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
    email = get_jwt_identity()
    usuario = User.query.get(email)

    print(email, usuario)
    return jsonify({"id":usuario.id, "email": usuario.email}), 200


#-----------------------------------------------------------#

@api.route('/registro', methods=['GET'])

def registro_hello():
   
    registro_query = Registro.query.all()
    all_registro = list(map(lambda x: x.serialize(), registro_query))
    
    return jsonify(all_registro), 200

#-----------------------------------------------------------#

@api.route('/registro', methods=['POST'])
def add_registro():
    
    request_body_registro = request.get_json()

    toto = Registro( 
     tipo_idnt = request_body_registro["tipo_idnt"],
     identificacion= request_body_registro["identificacion"],
     nombre=request_body_registro["nombre"],
     apellido1=request_body_registro["apellido1"],
     apellido2=request_body_registro["apellido2"],
     telefono=request_body_registro["telefono"],
     fecha_nacimiento=request_body_registro["fecha_nacimiento"],
     genero=request_body_registro["genero"], 
     estado_civil=request_body_registro["estado_civil"],
     provincia=request_body_registro["provincia"],
     canton=request_body_registro["canton"],
     distrito=request_body_registro["distrito"],
     dir_exacta=request_body_registro["dir_exacta"],
     email=request_body_registro["email"])

    db.session.add(toto)
    db.session.commit()

    return jsonify(request_body_registro), 200
   #Karla agrega campos que faltan del formulario 12-05-2021 (tipo_idnt, dir_exacta, canton, distrito)
#-----------------------------------------------------------#
@api.route('/registroUser', methods=['GET'])
def get_registroUser():


    email = request.json.get("email", None)

    if email is None:
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    
    if email == "":
        return jsonify({"msg": "Por favor, agregue un email"}), 400
        
    if email == " ":
        return jsonify({"msg": "Por favor, agregue un email"}), 400
    
    usuarioUser = User.query.filter_by(email=email).first()   
    usuarioRegistro = Registro.query.filter_by(email=email).first()   
    
    print(usuarioUser.email)
    print(usuarioRegistro.email)
    
    nuevoUser = usuarioUser.email
    nuevoRegistro = usuarioRegistro.email
    
    print(nuevoUser, nuevoRegistro)

    if nuevoUser == nuevoRegistro:
        queryUser = User.query.all()
        queryRegistro = Registro.query.all()
        all_user = list(map(lambda x: x.serialize(), queryUser))
        all_registro = list(map(lambda x: x.serialize(), queryRegistro))
        return jsonify(all_registro, all_user), 200
      
    else:
      return jsonify({"msg": "Usuario no Existe en la BD"}), 400
   

