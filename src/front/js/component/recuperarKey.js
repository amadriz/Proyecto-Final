import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";

//import { BsFillEyeFill } from "react-icons/bs";

export const RecuperarKey = () => {
	let [password1, cambiarPassword1] = useState({ campo: "", valido: null });
	let [password2, cambiarPassword2] = useState({ campo: "", valido: null });
	let [show, setShow] = useState(true);

	const expresiones = {
		contraseña: /^.{8,12}$/ // 4 a 12 digitos.
	};

	//ejecuta una función cuando existe un cambio en el input
	const onChange = e => {
		console.log(e.target.value);
		cambiarPassword1({ ...password1, campo: e.target.value });
	};

	const onChange2 = e => {
		console.log(e.target.value);
		cambiarPassword2({ ...password2, campo: e.target.value });
	};

	// ejecuta una función cuando existe un cambio en una tecla o dar un click fuera del input
	const validarContraseña = () => {
		if (expresiones.contraseña) {
			if (expresiones.contraseña.test(password1.campo)) {
				console.log("Input correcto");
				cambiarPassword1({ ...password1, valido: false });
			} else {
				console.log("Input incorrecto");
				cambiarPassword1({ ...password1, valido: true });
			}
		}
	};

	{
		/* Función para Validar si ambas contraseñas son iguales*/
	}
	const validarPassword2 = () => {
		if (password1.campo.length > 0) {
			if (password1.campo !== password2.campo) {
				console.log("Son diferentes");
				cambiarPassword2(prevState => {
					return { ...prevState, valido: false };
				});
			} else {
				cambiarPassword2(prevState => {
					console.log("Son iguales");
					return { ...prevState, valido: true };
				});
			}
		}
	};

	return (
		<>
			<Container className="mt-auto vs-container">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>Recupere su contraseña</h1>

						<hr />

						<Form>
							{/* Formulario: Campo Nueva contraseña*/}
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Ingrese su nueva contraseña</Form.Label>
								<Form.Control
									type="password"
									placeholder="Nueva contraseña"
									id="password1"
									value={password1.campo}
									onChange={onChange}
									onKeyUp={validarContraseña} //se activa cuando pulsa una tecla
									onBlur={validarContraseña} // se activa cuando pulsa afuera del input
									valido={password1.valido}
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								{/* Formulario: Campo Confirmar nueva contraseña*/}
								<Form.Label>Confirme su nueva contraseña</Form.Label>
								<Form.Control
									type="password"
									placeholder="Confirme su contraseña"
									id="password2"
									value={password2.campo}
									onChange={onChange2}
									onKeyUp={validarPassword2}
									valido={password2.valido}
								/>
								<Alert className={password2.valido === false ? "mostrar alert-danger" : "ocultar"}>
									<button className="close">
										<span>&times;</span>
									</button>
									<strong>¡Contraseñas incorrectas!</strong>, ingrese información válida para
									continuar.
								</Alert>
								{/* Text de advertencia en caso de que las contraseñas no coincidan*/}
								<Form.Text className={password2.valido === false ? "alert-success" : ""}>
									{/*Las contraseñas no coinciden, vuelva a intentarlo*/}
								</Form.Text>
							</Form.Group>
							{/* Permite routear al componente Login si se cumple los requesitos de la contraseña*/}
							<Link
								className={
									password2.valido === true
										? "btn btn-outline-primary float-right ml-1"
										: "btn btn-outline-secondary disabled float-right ml-1"
								}
								eventKey={2}
								to="/login">
								Enviar
							</Link>
							{/* Permite routear al Home en caso de cancelar el cambio de contraseña*/}
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/">
								Cancelar
							</Link>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

{
	/* 
	<Alert className="alert-success">
												<button className="close">
													<span>&times;</span>
												</button>
												<strong>Alerta!</strong>Hola Mundo
											</Alert>
*/
}
