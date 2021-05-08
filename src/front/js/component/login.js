import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Button, Form, Label, Text, Alert, Input } from "react-bootstrap";

export const Login = () => {
	//let [email, cambiarEmail] = useState({ campo: "", valido: null });
	//let [password, cambiarPassword] = useState({ campo: "", valido: null });
	const { store, actions } = useContext(Context);
	let [email, cambiarEmail] = useState("");
	let [password, cambiarPassword] = useState("");
	const history = useHistory();

	//const token = sessionStorage.getItem("token");
	console.log("This is you token", store.token);

	const handleClick = () => {
		actions.login(email, password);

		/*
		const opts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};

		fetch("https://3001-purple-bear-vtpt4t9n.ws-us03.gitpod.io/api/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then(data => {
				console.log("This came from the backend", data);
				sessionStorage.setItem("token", data.access_token);
			})
			.catch(error => {
				console.error("There was an ERROR!!!!", error);
            });*/
	};

	if (store.token && store.token != "" && store.token != undefined) history.push("/");

	const expresiones = {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		contraseña: /^.{8,12}$/
	};

	return (
		<>
			<Container className="mt-auto vs-container">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>Ingrese a su perfil</h1>
						<hr />
						{store.token && store.token != undefined ? (
							"You are logged in with" + store.token
						) : (
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
								{/*<button className="btn btn-primary" onClick={handleClick}>*/}
								<button className="btn btn-primary" onClick={() => handleClick()}>
									LOGIN-PRUEBA
								</button>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

{
	/* 


		<Form>
							<Form.Group controlId="formBasicEmail">
								{/* Formulario: Campo Email para buscar usuario*/
}
//<Form.Label>Usuario</Form.Label>
//<Form.Control
//	type="email"
//	placeholder="Ingrese su correo electrónico"
//	id="email"
//	value={email.campo}
//	onChange={onChange}
//onKeyUp={validarEmail} //se activa cuando pulsa una tecla
//onBlur={validarEmail} // se activa cuando pulsa afuera del input
//valido={email.valido}
///>
//	</Form.Group>
//<Form.Group controlId="formBasicPassword">
{
	/* Formulario: Campo contraseña*/
}
//		<Form.Label>Contraseña</Form.Label>
//		<Form.Control
//			type="password"
//			placeholder="Ingrese su contraseña"
//			id="password1"
//			value={password.campo}
//			onChange={onChange2}
//onKeyUp={validarContraseña} //se activa cuando pulsa una tecla
//onBlur={validarContraseña} // se activa cuando pulsa afuera del input
//valido={password.valido}
//		/>
//	</Form.Group>
{
	/* Text de advertencia en caso que muestra al validar la exxpresión de email*/
}
//	<Alert className={email.valido === false ? "alert-danger" : "ocultar"}>
//		Ingrese un correo electrónico válido
//	</Alert>

//	<button className="btn btn-primary" onClick={handleClick}>
//		LOGIN-PRUEBA
//	</button>

{
	/* Permite routear al componente SocialPage si se cumple los requesitos de acceso
							<Link
								className={
									email.valido === true
										? "btn btn-outline-primary float-right ml-1"
										: "btn btn-outline-secondary disabled float-right ml-1"
									
								}
								eventKey={2}
								onClick={handleClick}
								to={email.valido === true ? "/socialpage" : "/"}
							>
								Ingresar
							</Link>

							 Permite routear al Home en caso de cancelar la acción
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/">
								Cancelar
                            </Link>
                            */
}

{
	/*
                            <Link to="/">
				                    <button className="btn btn-primary">Back home</button>
			                </Link>
                            */
}
{
	/*
							<Button variant="primary" type="submit">
								Siguiente
							</Button>*/
}
//	</Form>

{
	/* 


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
				console.log("Input correcto");
				cambiarPassword({ ...password, valido: false });
			} else {
				console.log("Input incorrecto");
				cambiarPassword({ ...password, valido: true });
			}
		}
	};




*/
}
