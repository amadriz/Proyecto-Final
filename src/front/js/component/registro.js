import React from "react";
import { Container, Row, Col, Form, Group, Button } from "react-bootstrap";

export const Registro = () => (
	<Container className="mt-5">
		<Form className="mt-5">
			{/* <Row>
				<Col>
					<h1>Datos Personales</h1>
					<Form.Control placeholder="Tipo de identificación" />
				</Col>
				<Col>
					<Form.Control placeholder="Número de identificación" />
				</Col>
				<Col>
					<Form.Control placeholder="Fecha de nacimiento" />
				</Col>

			</Row>
		</Form> */}
			{/* CEDULA */}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Tipo de identificación</Form.Label>
					<Form.Control as="select" defaultValue="Choose...">
						<option>Residente</option>
						<option>Pasaporte</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Número de identificación</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Fecha de nacimiento</Form.Label>
					<Form.Control />
				</Form.Group>
			</Form.Row>
			{/* NOMBRE Y APELLIDO */}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Nombre</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Primer Apellido</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Segundo Apellido</Form.Label>
					<Form.Control />
				</Form.Group>
			</Form.Row>
			{/* LUGAR */}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Provincia</Form.Label>
					<Form.Control as="select" defaultValue="Choose...">
						<option>Alajuela</option>
						<option>Cartago</option>
						<option>Guanacaste</option>
						<option>Heredia</option>
						<option>Limón</option>
						<option>Puntarenas</option>
						<option>San José</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Cantón</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Distrito</Form.Label>
					<Form.Control />
				</Form.Group>
			</Form.Row>
			{/* DIRECCION EXACTA */}
			<Form.Group controlId="formGridAddress1">
				<Form.Label>Dirección Exacta</Form.Label>
				<Form.Control placeholder=" " />
			</Form.Group>
			{/* CORREO ELECTRONICO */}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridEmail">
					<Form.Label>Correo Electrónico</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
			</Form.Row>
			{/* ******** */}
			<Form.Row>
				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Género</Form.Label>
					<Form.Control as="select" defaultValue="Choose... ">
						<option>Femenino</option>
						<option>Masculino</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>Estado Civil</Form.Label>
					<Form.Control as="select" defaultValue="Choose... ">
						<option>Soltero/a</option>
						<option>Casado/a</option>
						<option>Viudo/a</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Teléfono</Form.Label>
					<Form.Control />
				</Form.Group>
			</Form.Row>

			{/* BOTONES */}
			<Button variant="primary" type="submit">
				Guardar
			</Button>
			<Button variant="primary" type="submit">
				Cancelar
			</Button>
		</Form>
	</Container>
);
