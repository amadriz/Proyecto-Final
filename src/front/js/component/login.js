import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Button, Form, Label, Text, Alert } from "react-bootstrap";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	//let [email, cambiarEmail] = useState({ campo: "", valido: null });
	//let [password, cambiarPassword] = useState({ campo: "", valido: null });
	//let [newEmail, useEmail] = useState("");
	//let [newPassword, usePassword] = useState("");

	let [email, cambiarEmail] = useState("");
	let [password, cambiarPassword] = useState("");
	const token = sessionStorage.getItem("token");
	console.log("This is you token", store.token);
	//console.log(email.campo, password.campo);
	console.log("Información ingresada por el usuario:", email, password);

	/*const handleClick = () => {
		actions.login(email.campo, password.campo);
    };*/

	const handleClick = () => {
		actions.login(email, password);
	};

	if (store.token && store.token != "" && store.token != undefined) {
		history.push("/listaEmpleos");
	} else if (store.token && store.token == "" && store.token == undefined) {
		history.push("/login");
	}

	const expresiones = {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		contraseña: /^.{8,12}$/
	};

	/**/
	//ejecuta una función cuando existe un cambio en el input
	const onChange = e => {
		console.log(e.target.value);
		cambiarEmail({ ...email, campo: e.target.value });
	};

	const onChange2 = e => {
		console.log(e.target.value);
		cambiarPassword({ ...password, campo: e.target.value });
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
		if (expresiones.contraseña) {
			if (expresiones.contraseña.test(password.campo)) {
				console.log("-Input correcto-");
				cambiarPassword({ ...password, valido: false });
			} else {
				console.log("-Input incorrecto-");
				cambiarPassword({ ...password, valido: true });
			}
		}
	};
	return (
		<>
			<Container className="mt-auto vs-container mb-5">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>Ingrese a su perfil</h1>
						<hr />

						{store.token && store.token != undefined ? (
							"You are logged in with" + store.token
						) : (
							<div>
								<div>
									{/*<label className="col-sm-12 vs-label">Usuario</label>*/}
									<input
										className="btnInput"
										type="email"
										placeholder="Ingrese su correo electrónico"
										value={email}
										onChange={e => cambiarEmail(e.target.value)}
										required="required"></input>
								</div>
								<div>
									{/*<label className="col-sm-12 vs-label">Contraseña</label>*/}
									<input
										className="btnInput"
										type="password"
										placeholder="Ingrese su contraseña"
										value={password}
										onChange={e => cambiarPassword(e.target.value)}
										required="required"></input>
								</div>
								<button className="btn btnEnviar btn-primary" onClick={() => handleClick()}>
									Iniciar sesión
								</button>
							</div>
						)}
					</Col>
					<div className="min-footer">
						<Link to="/verificar">
							<Button variant="btn btn-link" type="submit">
								¿Ha olvidado su contraseña?
							</Button>
						</Link>
						<Link to="/registro">
							<Button variant="btn  btn-link" type="submit">
								¿No tienes cuenta? Regístrese aquí
							</Button>
						</Link>
					</div>
				</Row>
			</Container>
		</>
	);
};

{
	/*
    	<div>
								<input
									type="text"
									placeholder="email"
									value={email}
									onChange={e => cambiarEmail(e.target.value)}></input>
								<input
									type="text"
									placeholder="clave"
									value={password}
									onChange={e => cambiarPassword(e.target.value)}></input>
								<button className="btn btn-primary" onClick={() => handleClick()}>
									Iniciar sesión
								</button>
							</div>

/----- :(aquí agregar el form)

		<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Usuario</Form.Label>
									<Form.Control
										className="btnInput"
										type="email"
										placeholder="Ingrese su correo electrónico"
										id="email"
										value={email.campo}
										onChange={onChange}
										onKeyUp={validarEmail} //se activa cuando pulsa una tecla
										onBlur={validarEmail} // se activa cuando pulsa afuera del input
										valido={email.valido}
									/>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										className="btnInput"
										type="password"
										placeholder="Ingrese su contraseña"
										id="password1"
										value={password.campo}
										onChange={onChange2}
										onKeyUp={validarContraseña}
										onBlur={validarContraseña}
										valido={password.valido}
									/>
								</Form.Group>

								<Alert className={email.valido === false ? "alert-danger" : "ocultar"}>
									Ingrese un correo electrónico válido
								</Alert>

								<button
									className={
										email.valido === true
											? "btn btn-outline-primary float-right ml-1"
											: "btn btn-outline-secondary disabled float-right ml-1"
									}
									onClick={() => handleClick()}>
									Iniciar sesión
								</button>

								<Link className="" eventKey={2} to="/">
									<Button variant="btn btn-outline-primary float-right ml-1" type="submit">
										Cancelar
									</Button>
								</Link>
							</Form>
		
                                
*/
}
