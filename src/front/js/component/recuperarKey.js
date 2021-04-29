import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
//import { BsFillEyeFill } from "react-icons/bs";

export const RecuperarKey = () => {
	let [password1, cambiarPassword1] = useState({ campo: "", valido: true });
	let [password2, cambiarPassword2] = useState({ campo: "", valido: true });

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
				cambiarPassword1({ ...password1, valido: true });
			} else {
				console.log("Input incorrecto");
				cambiarPassword1({ ...password1, valido: false });
			}
		}
	};

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
								{/*<BsFillEyeFill />*/}
								<Form.Text className={password2.valido === true ? "text-light" : "alert-danger"}>
									Las contraseñas no coinciden, vuelva a intentarlo
								</Form.Text>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								{/* <Form.Check type="checkbox" label="Check me out" /> */}
							</Form.Group>
							<Link
								className={
									password2.valido === true
										? "btn btn-outline-primary float-right ml-1"
										: "btn btn-outline-secondary disabled float-right ml-1"
								}
								eventKey={2}
								to="/">
								Enviar
							</Link>
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
