import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const ValidarCuenta = () => {
	//let [email, cambiarEmail] = useState({ campo: "", valido: null });

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
								<Form.Control type="email" placeholder="Correo Electrónico" id="email" />
							</Form.Group>
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/recuperar">
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
