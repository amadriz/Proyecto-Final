from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }



class RegistroPersona(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    identificacion = db.Column(db.Integer, primary_key=True)
    tipo_id = db.Column(db.String(120), unique=True, nullable=False)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    apellido1 = db.Column(db.String(120), unique=True, nullable=False)
    apellido2 = db.Column(db.String(120), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=False)
    fecha_nacimiento = db.Column(db.String, unique=True, nullable=False)
    genero = db.Column(db.String(120), unique=False, nullable=False)
    estado_civil = db.Column(db.String(120), unique=False, nullable=False)
    provincia = db.Column(db.String(120), unique=False, nullable=False)
    canton = db.Column(db.String(120), unique=False, nullable=False)
    distrito = db.Column(db.String(120), unique=False, nullable=False)
    dir_exacta = db.Column(db.String(120), unique=False, nullable=False)


    def __repr__(self):
        return '<RegistroPersona %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            # do not serialize the password, its a security breach
        }
    
