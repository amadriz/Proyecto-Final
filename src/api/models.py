from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<user %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class registro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    identificacion = db.Column(db.Integer, unique=True, nullable=False)
    tipo_id = db.Column(db.String(120), unique=True, nullable=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    apellido1 = db.Column(db.String(120), unique=True, nullable=False)
    apellido2 = db.Column(db.String(120), unique=False, nullable=True)
    telefono = db.Column(db.Integer, unique=True, nullable=False)
    fecha_nacimiento = db.Column(db.String, unique=True, nullable=False)
    genero = db.Column(db.String(120), unique=False, nullable=True)
    estado_civil = db.Column(db.String(120), unique=False, nullable=True)
    provincia = db.Column(db.String(120), unique=False, nullable=False)
    canton = db.Column(db.String(120), unique=False, nullable=True)
    distrito = db.Column(db.String(120), unique=False, nullable=True)
    dir_exacta = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
       return '<registro %r>' % self.nombre

    def serialize(self):
       return {
            "id": self.id,
            "identificacion":self.identificacion,
            "tipo_id":self.tipo_id,
            "nombre": self.nombre,
            "apellido1": self.apellido1,
            "apellido2": self.apellido2,
            "telefono": self.telefono,
            "fecha_nacimiento":self.fecha_nacimiento,
            "genero":self.genero,
            "estado_civil":self.estado_civil,
            "provincia":self.provincia,
            "canton":self.canton,
            "distrito":self.distrito,
            "dir_exacta":self.dir_exacta,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
