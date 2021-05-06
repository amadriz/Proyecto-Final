"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
# -Karla- se importa OS
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
#, RegistroPersona
from api.utils import generate_sitemap, APIException

# -Karla- Se importó desde Basic Usage
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# -Karla- Create flask app
api = Blueprint('api', __name__)

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



#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

#    response_body = {
#        "message": "Hello! I'm a message that came from the backend"
#    }

#    return jsonify(response_body), 200

