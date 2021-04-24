import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";

export const RecuperarKey = () => {
	let [password1, cambiarPassword1] = useState({ campo: "", valido: null });
	let [password2, cambiarPassword2] = useState({ campo: "", valido: null });

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
								<Form.Control type="password" placeholder="Nueva contraseña" id="password1" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Confirme su nueva contraseña</Form.Label>
								<Form.Control type="password" placeholder="Confirme su contraseña" id="password2" />
								<BsFillEyeFill />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								{/* <Form.Check type="checkbox" label="Check me out" /> */}
							</Form.Group>
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/">
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
