import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Group, Button, Text, Alert } from "react-bootstrap";
import misEstilos from "../../styles/misEstilos.css";

export const Registro = () => {
	let [id, cambiarId] = useState({ campo: "", valido: null }); //generico
	let [nombre, cambiarNombre] = useState({ campo: "", valido: null }); //generico
	let [apellido1, cambiarApellido1] = useState({ campo: "", valido: null }); //generico
	let [apellido2, cambiarApellido2] = useState({ campo: "", valido: null }); //generico
	let [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
	let [canton, cambiarCanton] = useState({ campo: "", valido: null }); //generico
	let [distrito, cambiarDistrito] = useState({ campo: "", valido: null }); //generico
	let [email, cambiarEmail] = useState({ campo: "", valido: null });
	let [password1, cambiarPassword1] = useState({ campo: "", valido: null });

	const expresiones = {
		//usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		generico: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
		password: /^\d{4,12}$/, // 4 a 12 digitos.
		id: /^\d{9,19}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	};

	//ejecuta una función cuando existe un cambio en el input
	const onChangeId = e => {
		console.log(e.target.value);
		cambiarId({ ...id, campo: e.target.value });
	};

	const onChangeN = e => {
		console.log(e.target.value);
		cambiarNombre({ ...nombre, campo: e.target.value });
	};

	const onChangeA1 = e => {
		console.log(e.target.value);
		cambiarApellido1({ ...apellido1, campo: e.target.value });
	};

	const onChangeA2 = e => {
		console.log(e.target.value);
		cambiarApellido2({ ...apellido2, campo: e.target.value });
	};

	const onChangeT = e => {
		console.log(e.target.value);
		cambiarTelefono({ ...telefono, campo: e.target.value });
	};

	const onChangeC = e => {
		console.log(e.target.value);
		cambiarCanton({ ...canton, campo: e.target.value });
	};

	const onChangeD = e => {
		console.log(e.target.value);
		cambiarDistrito({ ...distrito, campo: e.target.value });
	};

	const onChangeE = e => {
		console.log(e.target.value);
		cambiarEmail({ ...email, campo: e.target.value });
	};

	const onChangePass = e => {
		console.log(e.target.value);
		cambiarPassword1({ ...password1, campo: e.target.value });
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarId = () => {
		if (expresiones.id) {
			if (expresiones.id.test(id.campo)) {
				console.log("Input correcto");
				cambiarId({ ...id, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarId({ ...id, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarNombre = () => {
		if (expresiones.generico) {
			if (expresiones.generico.test(nombre.campo)) {
				console.log("Input correcto");
				cambiarNombre({ ...nombre, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarNombre({ ...nombre, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarApellido1 = () => {
		if (expresiones.generico) {
			if (expresiones.generico.test(apellido1.campo)) {
				console.log("Input correcto");
				cambiarApellido1({ ...apellido1, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarApellido1({ ...apellido1, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarApellido2 = () => {
		if (expresiones.generico) {
			if (expresiones.generico.test(apellido2.campo)) {
				console.log("Input correcto");
				cambiarApellido2({ ...apellido2, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarApellido2({ ...apellido2, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarTelefono = () => {
		if (expresiones.telefono) {
			if (expresiones.telefono.test(telefono.campo)) {
				console.log("Input correcto");
				cambiarTelefono({ ...telefono, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarTelefono({ ...telefono, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarCanton = () => {
		if (expresiones.generico) {
			if (expresiones.generico.test(canton.campo)) {
				console.log("Input correcto");
				cambiarCanton({ ...canton, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarCanton({ ...canton, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarDistrito = () => {
		if (expresiones.generico) {
			if (expresiones.generico.test(distrito.campo)) {
				console.log("Input correcto");
				cambiarDistrito({ ...distrito, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarDistrito({ ...distrito, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarEmail = () => {
		if (expresiones.correo) {
			if (expresiones.correo.test(email.campo)) {
				console.log("Input correcto");
				cambiarEmail({ ...email, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarEmail({ ...email, valido: false });
			}
		}
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarContraseña = () => {
		if (expresiones.password) {
			if (expresiones.password.test(password1.campo)) {
				console.log("Input correcto");
				cambiarPassword1({ ...password1, valido: false });
			} else {
				console.log("Input incorrecto");
				cambiarPassword1({ ...password1, valido: true });
			}
		}
	};

	return (
		<Container className="mt-5 borde">
			<Row>
				<Form className="mt-5 regis-style">
					<h2>¡Regístrese en Empleo 45+!</h2>
					<h3>Datos de Contacto</h3>
					<hr />

					{/* CEDULA */}
					<Form.Row>
						<Form.Group className="row p-1" controlId="formGridCity">
							<Form.Label className="col-sm-12">Tipo de identificación</Form.Label>
							<Col className="col-sm-12">
								<Form.Control as="select" defaultValue="Seleccione" name="tipoIdentificacion">
									<option>Residente</option>
									<option>Pasaporte</option>
								</Form.Control>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12">Número de identificación</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Número Identificación"
									name="Identificacion"
									value={id.campo}
									onChange={onChangeId}
									onKeyUp={validarId} //se activa cuando pulsa una tecla
									onBlur={validarId} // se activa cuando pulsa afuera del input
									valido={id.valido}
								/>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridZip">
							<Form.Label className="col-sm-12">Fecha de nacimiento</Form.Label>
							<Col className="col-sm-12">
								<Form.Control placeholder="Fecha Nacimiento" type="date" name="fechaNacimiento" />
							</Col>
						</Form.Group>
					</Form.Row>

					{/* NOMBRE Y APELLIDO */}
					<Form.Row>
						<Form.Group className="row p-1" controlId="formGridCity">
							<Form.Label className="col-sm-12" sm="10">
								Nombre
							</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Nombre"
									name="nombre"
									value={nombre.campo}
									onChange={onChangeN}
									onKeyUp={validarNombre} //se activa cuando pulsa una tecla
									onBlur={validarNombre} // se activa cuando pulsa afuera del input
									valido={nombre.valido}
								/>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12" sm="10">
								Primer Apellido
							</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Apellido"
									name="apellido"
									value={apellido1.campo}
									onChange={onChangeA1}
									onKeyUp={validarApellido1} //se activa cuando pulsa una tecla
									onBlur={validarApellido1} // se activa cuando pulsa afuera del input
									valido={apellido1.valido}
								/>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12" sm="10">
								Segundo Apellido
							</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Segundo Apellido"
									name="segundoApellido"
									value={apellido2.campo}
									onChange={onChangeA2}
									onKeyUp={validarApellido2} //se activa cuando pulsa una tecla
									onBlur={validarApellido2} // se activa cuando pulsa afuera del input
									valido={apellido2.valido}
								/>
							</Col>
						</Form.Group>
					</Form.Row>
					{/* ******** */}
					<Form.Row>
						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12">Género</Form.Label>
							<Col className="col-sm-12">
								<Form.Control as="select" defaultValue="Eliga el Género" name="genero">
									<option>Femenino</option>
									<option>Masculino</option>
									<option>Otros</option>
								</Form.Control>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12">Estado Civil</Form.Label>
							<Col className="col-sm-12">
								<Form.Control as="select" defaultValue="Estado Civil" name="estadoCivil">
									<option>Soltero/a</option>
									<option>Casado/a</option>
									<option>Viudo/a</option>
								</Form.Control>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridZip">
							<Form.Label className="col-sm-12">Teléfono</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									defaultValue="Número de teléfono"
									name="telefono"
									value={telefono.campo}
									onChange={onChangeT}
									onKeyUp={validarTelefono} //se activa cuando pulsa una tecla
									onBlur={validarTelefono} // se activa cuando pulsa afuera del input
									valido={telefono.valido}
								/>
							</Col>
						</Form.Group>
					</Form.Row>

					{/* LUGAR */}
					<Form.Row>
						<Form.Group className="row p-1" controlId="formGridCity">
							<Form.Label className="col-sm-12">Provincia</Form.Label>
							<Col className="col-sm-12">
								<Form.Control as="select" defaultValue="Provincia" name="provincia">
									<option>Alajuela</option>
									<option>Cartago</option>
									<option>Guanacaste</option>
									<option>Heredia</option>
									<option>Limón</option>
									<option>Puntarenas</option>
									<option>San José</option>
								</Form.Control>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridState">
							<Form.Label className="col-sm-12">Cantón</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Ingrese Cantón"
									name="canton"
									value={canton.campo}
									onChange={onChangeC}
									onKeyUp={validarCanton} //se activa cuando pulsa una tecla
									onBlur={validarCanton} // se activa cuando pulsa afuera del input
									valido={canton.valido}></Form.Control>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridZip">
							<Form.Label className="col-sm-12">Distrito</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Ingrese Distrito"
									name="distrito"
									value={distrito.campo}
									onChange={onChangeD}
									onKeyUp={validarDistrito} //se activa cuando pulsa una tecla
									onBlur={validarDistrito} // se activa cuando pulsa afuera del input
									valido={distrito.valido}></Form.Control>
							</Col>
						</Form.Group>
					</Form.Row>

					{/* DIRECCION EXACTA */}

					<Form.Group className="row p-1" controlId="formGridAddress1">
						<Form.Label className="col-sm-12">Dirección Exacta</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Dirección Exacta" name="direccion" />
						</Col>
					</Form.Group>

					<h3>Datos de Acceso a la plataforma</h3>
					<hr />
					{/* CORREO ELECTRONICO */}
					<Form.Row>
						<Form.Group className="row p-1" controlId="formGridEmail">
							<Form.Label className="col-sm-12">Correo Electrónico</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Correo Electrónico"
									name="email"
									value={email.campo}
									onChange={onChangeE}
									onKeyUp={validarEmail} //se activa cuando pulsa una tecla
									onBlur={validarEmail} // se activa cuando pulsa afuera del input
									valido={email.valido}
								/>
							</Col>
						</Form.Group>

						<Form.Group className="row p-1" controlId="formGridPassword">
							<Form.Label className="col-sm-12">Contraseña</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									placeholder="Contraseña"
									name="password"
									value={password1.campo}
									onChange={onChangePass}
									onKeyUp={validarContraseña} //se activa cuando pulsa una tecla
									onBlur={validarContraseña} // se activa cuando pulsa afuera del input
									valido={password1.valido}
								/>
							</Col>
						</Form.Group>
					</Form.Row>
					{/* ALERTAS*/}
					<Alert className={id.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>identificación.</strong>
					</Alert>
					<Alert className={nombre.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>Nombre.</strong>
					</Alert>
					<Alert className={apellido1.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>Primer Apellido.</strong>
					</Alert>
					<Alert className={telefono.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>teléfono.</strong>
					</Alert>
					<Alert className={email.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>correo electrónico.</strong>
					</Alert>
					<Alert className={password1.valido === false ? "alert-danger" : "ocultar"}>
						Complete el campo de <strong>contraseña.</strong>
					</Alert>
					{/* BOTONES */}
					<Link
						className={
							password1.valido === true &&
							nombre.valido === true &&
							apellido1.valido === true &&
							password1.valido === true &&
							email.valido === true &&
							telefono.valido === true
								? "btn btn-outline-primary float-right ml-1"
								: "btn btn-outline-secondary disabled float-right ml-1"
						}
						eventKey={2}
						to="/login">
						Registrarse
					</Link>

					<Link className="btn btn-outline-primary  float-right ml-1" eventKey={2} to="/">
						Cancelar
					</Link>
				</Form>
			</Row>
		</Container>
	);
};
