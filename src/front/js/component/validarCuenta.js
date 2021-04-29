import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, Label, Text } from "react-bootstrap";

export const ValidarCuenta = () => {
	let [email, cambiarEmail] = useState({ campo: "", valido: true });

	const expresiones = {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	};

	//ejecuta una función cuando existe un cambio en el input
	const onChange = e => {
		console.log(e.target.value);
		cambiarEmail({ ...email, campo: e.target.value });
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

	return (
		<>
			<Container className="mt-auto vs-container">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>Recuperar su cuenta</h1>
						<hr />
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>
									Ingrese su dirección de correo electrónico para buscar su cuenta
								</Form.Label>
								<Form.Control
									type="email"
									placeholder="Correo Electrónico"
									id="email"
									value={email.campo}
									onChange={onChange}
									onKeyUp={validarEmail} //se activa cuando pulsa una tecla
									onBlur={validarEmail} // se activa cuando pulsa afuera del input
									valido={email.valido}
								/>
								<Form.Text className={email.valido === true ? "text-light" : "alert-danger"}>
									Ingrese un correo electrónico válido
								</Form.Text>
							</Form.Group>

							<Link
								className={
									email.valido === true
										? "btn btn-outline-primary float-right ml-1"
										: "btn btn-outline-secondary disabled float-right ml-1"
								}
								eventKey={2}
								to={email.valido === true ? "/recuperar" : "/"}>
								Buscar
							</Link>
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/">
								Cancelar
							</Link>

							{/*
							<Button variant="primary" type="submit">
								Siguiente
							</Button>*/}
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};
