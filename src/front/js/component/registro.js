import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Group, Button, Text, Alert, Select } from "react-bootstrap";
import misEstilos from "../../styles/misEstilos.css";

export const Registro = () => {
	const [auth, setAuth] = useState(false);
	let [tipo_idnt, setIdnt] = useState("");
	let [identificacion, setId] = useState("");
	let [nombre, setNombre] = useState("");
	let [apellido1, setApellido1] = useState("");
	let [apellido2, setApellido2] = useState("");
	let [telefono, setTelefono] = useState("");
	let [fecha_nacimiento, setFN] = useState("");
	let [genero, setGenero] = useState("");
	let [estado_civil, setEC] = useState("");
	let [provincia, setProvincia] = useState("");
	let [canton, setCanton] = useState("");
	let [distrito, setDistrito] = useState("");
	let [dir_exacta, setDE] = useState("");
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	const handleClick = e => {
		e.preventDefault();

		const body = {
			tipo_idnt: tipo_idnt,
			identificacion: identificacion,
			nombre: nombre,
			apellido1: apellido1,
			apellido2: apellido2,
			telefono: telefono,
			fecha_nacimiento,
			genero: genero,
			estado_civil: estado_civil,
			provincia: provincia,
			canton: canton,
			distrito: distrito,
			dir_exacta: dir_exacta
		};

		//fetch("https://empleo45-proyecto-final.herokuapp.com/api/registro", {

		fetch("https://3001-maroon-flea-pas0jdhb.ws-us04.gitpod.io/api/registro", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("Soy data:" + data);
				setAuth(true);
			})
			.catch(error => console.log("Cargando un error desde el Backend", error));
	};

	const handleClick2 = e => {
		e.preventDefault();

		const body = {
			id: identificacion,
			email: email,
			password: password,
			is_active: true
		};

		//fetch("https://empleo45-proyecto-final.herokuapp.com/api/registro", {

		fetch("https://3001-maroon-flea-pas0jdhb.ws-us04.gitpod.io/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("Soy data:" + data);
				setAuth(true);
			})
			.catch(error => console.log("Cargando un error desde el Backend", error));
	};

	return (
		<Container className="mt-5 borde mb-5">
			<Row>
				<div>
					<Form className="mt-5 regis-style" onSubmit={handleClick}>
						<h2>Regístrese en Empleo 45+</h2>
						<h3>Datos de Contacto</h3>
						<hr />
						<Form.Row>
							<Form.Group className="row p-1" controlId="formBasicSelect">
								<Form.Label className="col-sm-12">Tipo de identificación:</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										as="select"
										value={tipo_idnt}
										onChange={e => {
											console.log("e.target.value", e.target.value);
											setIdnt(e.target.value);
										}}>
										<option value="Nacional">Nacional</option>
										<option value="Extranjero">Pasaporte</option>
										<option value="Otro">Otro</option>
									</Form.Control>
								</Col>
							</Form.Group>
							<Form.Group className="row p-1" controlId="formGridState">
								<Form.Label className="col-sm-12">Número de identificación</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputID"
										value={identificacion}
										placeholder="Ingrese su identificación"
										onChange={e => setId(e.target.value)}
										required="required"
									/>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridZip">
								<Form.Label className="col-sm-12">Fecha de nacimiento</Form.Label>
								<Col className="col-sm-12">
									<input
										type="date"
										id="inputFN"
										value={fecha_nacimiento}
										placeholder="Ingrese su fecha nacimiento"
										onChange={e => setFN(e.target.value)}
										required="required"></input>
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
										type="text"
										id="inputNombre"
										value={nombre}
										placeholder="Ingrese su nombre"
										onChange={e => setNombre(e.target.value)}
										required="required"
									/>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridState">
								<Form.Label className="col-sm-12" sm="10">
									Primer Apellido
								</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputApe1"
										value={apellido1}
										placeholder="Ingrese su primer apellido"
										onChange={e => setApellido1(e.target.value)}
										required="required"
									/>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridState">
								<Form.Label className="col-sm-12" sm="10">
									Segundo Apellido
								</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputApe2"
										value={apellido2}
										placeholder="Ingrese su segundo apellido"
										onChange={e => setApellido2(e.target.value)}
										required="required"
									/>
								</Col>
							</Form.Group>
						</Form.Row>
						{/* ******** */}
						<Form.Row>
							<Form.Group className="row p-1" controlId="formBasicSelect">
								<Form.Label className="col-sm-12">Género:</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										as="select"
										value={genero}
										onChange={e => {
											console.log("e.target.value", e.target.value);
											setGenero(e.target.value);
										}}>
										<option value="Femenino">Femenino</option>
										<option value="Masculino">Masculino</option>
										<option value="No definido">No definido</option>
									</Form.Control>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formBasicSelect">
								<Form.Label className="col-sm-12">Estado Civil:</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										as="select"
										value={estado_civil}
										onChange={e => {
											console.log("e.target.value", e.target.value);
											setEC(e.target.value);
										}}>
										<option value="Soltero/a">Soltero/a</option>
										<option value="Casado/a">Casado/a</option>
										<option value="Divorciado/a">Divorciado/a</option>
										<option value="Viudo/a">Viudo/a</option>
									</Form.Control>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridZip">
								<Form.Label className="col-sm-12">Teléfono</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputTelefono"
										value={telefono}
										placeholder="Ingrese su número de teléfono"
										onChange={e => setTelefono(e.target.value)}
										required="required"
									/>
								</Col>
							</Form.Group>
						</Form.Row>

						{/* LUGAR */}
						<Form.Row>
							<Form.Group className="row p-1" controlId="formBasicSelect">
								<Form.Label className="col-sm-12">Provincia:</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										as="select"
										value={provincia}
										onChange={e => {
											console.log("e.target.value", e.target.value);
											setProvincia(e.target.value);
										}}>
										<option value="San José">San José</option>
										<option value="Alajuela">Alajuela</option>
										<option value="Cartago">Cartago</option>
										<option value="Heredia">Heredia</option>
										<option value="Guanacaste">Guanacaste</option>
										<option value="Puntarenas">Puntarenas</option>
										<option value="Limón">Limón</option>
									</Form.Control>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridState">
								<Form.Label className="col-sm-12">Cantón</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputCanton"
										value={canton}
										placeholder="Ingrese su cantón"
										onChange={e => setCanton(e.target.value)}
									/>
								</Col>
							</Form.Group>

							<Form.Group className="row p-1" controlId="formGridZip">
								<Form.Label className="col-sm-12">Distrito</Form.Label>
								<Col className="col-sm-12">
									<Form.Control
										type="text"
										id="inputDistrito"
										value={distrito}
										placeholder="Ingrese su distrito"
										onChange={e => setDistrito(e.target.value)}
									/>
								</Col>
							</Form.Group>
						</Form.Row>

						{/* DIRECCION EXACTA */}

						<Form.Group className="row p-1" controlId="formGridAddress1">
							<Form.Label className="col-sm-12">Dirección Exacta</Form.Label>
							<Col className="col-sm-12">
								<Form.Control
									type="text"
									id="inputDE"
									value={dir_exacta}
									placeholder="Ingrese su dirección exacta"
									onChange={e => setDE(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form className="mt-5 regis-style" onSubmit={handleClick2}>
							<h3>Datos de Acceso a la plataforma</h3>
							<hr />
							{/* CORREO ELECTRONICO */}
							<Form.Row>
								<Form.Group className="row p-1" controlId="formGridEmail">
									<Form.Label className="col-sm-12">Correo Electrónico</Form.Label>
									<Col className="col-sm-12">
										<Form.Control
											type="text"
											id="inputEmail"
											value={email}
											placeholder="Ingrese su correo electrónico"
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</Form.Group>

								<Form.Group className="row p-1" controlId="formGridPassword">
									<Form.Label className="col-sm-12">Contraseña</Form.Label>
									<Col className="col-sm-12">
										<Form.Control
											type="password"
											id="inputPasword"
											value={password}
											placeholder="Ingrese su password"
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</Form.Group>
							</Form.Row>
							<button type="submit" className="btn btn-outline-primary float-right ml-1">
								Registrarme
							</button>
							<Link to="/">
								<button type="submit" className="btn btn-outline-primary  float-right ml-1">
									Cancelar
								</button>
							</Link>
						</Form>
					</Form>
					{auth ? <Redirect to="/login" /> : null}
				</div>
			</Row>
		</Container>
	);
};

{
	/*
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
		<Container className="mt-5 borde mb-5">
			<Row>
				<Form className="mt-5 regis-style">
					<h2>¡Regístrese en Empleo 45+!</h2>
					<h3>Datos de Contacto</h3>
					<hr />

				
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

					

					<Form.Group className="row p-1" controlId="formGridAddress1">
						<Form.Label className="col-sm-12">Dirección Exacta</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Dirección Exacta" name="direccion" />
						</Col>
					</Form.Group>

					<h3>Datos de Acceso a la plataforma</h3>
					<hr />
				
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
*/
}
