import React from "react";
import { Container, Row, Col, Form, Group, Button } from "react-bootstrap";
import misEstilos from "../../styles/misEstilos.css";

export const Registro = () => (
	<Container className="mt-5 borde">
		<Row>
			<Form className="mt-5">
				{/* CEDULA */}
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
							<Form.Control placeholder="Número Identificación" name="numIdentificacion" />
						</Col>
					</Form.Group>
					<Form.Group className="row p-1" controlId="formGridZip">
						<Form.Label className="col-sm-12">Fecha de nacimiento</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Fecha Nacimiento" type="date" name="fechaNacimiento" />
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
							<Form.Control placeholder="Nombre" name="nombre" />
						</Col>
					</Form.Group>

					<Form.Group className="row p-1" controlId="formGridState">
						<Form.Label className="col-sm-12" sm="10">
							Primer Apellido
						</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Apellido" name="apellido" />
						</Col>
					</Form.Group>
					<Form.Group className="row p-1" controlId="formGridState">
						<Form.Label className="col-sm-12" sm="10">
							Segundo Apellido
						</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Segundo Apellido" name="segundoApellido" />
						</Col>
					</Form.Group>
				</Form.Row>
				{/* LUGAR */}
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
							<Form.Control placeholder="Sleccione Cantón" name="canton"></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group className="row p-1" controlId="formGridZip">
						<Form.Label className="col-sm-12">Distrito</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Sleccione Distrito" name="distrito"></Form.Control>
						</Col>
					</Form.Group>
				</Form.Row>
				{/* DIRECCION EXACTA */}
				<Form.Group className="row p-1" controlId="formGridAddress1">
					<Form.Label className="col-sm-12">Dirección Exacta</Form.Label>
					<Col className="col-sm-12">
						<Form.Control placeholder="Dirección Exacta" name="direccion" />
					</Col>
				</Form.Group>
				{/* CORREO ELECTRONICO */}
				<Form.Row>
					<Form.Group className="row p-1" controlId="formGridEmail">
						<Form.Label className="col-sm-12">Correo Electrónico</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Correo Electrónico" name="email" />
						</Col>
					</Form.Group>
					<Form.Group className="row p-1" controlId="formGridPassword">
						<Form.Label className="col-sm-12">Contraseña</Form.Label>
						<Col className="col-sm-12">
							<Form.Control placeholder="Costraseña" name="password" />
						</Col>
					</Form.Group>
				</Form.Row>
				{/* ******** */}
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
							<Form.Control defaultValue="Número de teléfono" name="telefono" />
						</Col>
					</Form.Group>
				</Form.Row>
				{/* BOTONES */}
				<Button variant="primary" type="submit">
					Guardar
				</Button>
				<Button className="m-2" variant="primary">
					Cancelar
				</Button>
			</Form>
		</Row>
	</Container>
);
