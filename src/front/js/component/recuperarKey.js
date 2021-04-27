import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
//import { BsFillEyeFill } from "react-icons/bs";

export const RecuperarKey = () => {
	return (
		<>
			<Container className="mt-auto vs-container">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>Recupere su contraseña</h1>
						<Form>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Nueva contraseña</Form.Label>
								<Form.Control
									type="password"
									placeholder="Ingrese su nueva contraseña"
									id="password1"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Confirmar contraseña</Form.Label>
								<Form.Control type="password" placeholder="Confirme su contraseña" id="password2" />
								{/*<BsFillEyeFill /><BsFillEyeFill />*/}
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								{/* <Form.Check type="checkbox" label="Check me out" /> */}
							</Form.Group>
							<Button variant="primary" type="submit">
								Enviar
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};
