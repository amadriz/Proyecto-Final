import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, Carousel, Modal, Nav, Form, NavDropdown } from "react-bootstrap";
import logopeq from "../../img/logopeq.png";
import { Context } from "../store/appContext";

export const Navbars = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
				<Navbar.Brand href="/">
					<img src={logopeq} alt="logo" width="100" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="/listaempleos">Empleos Disponibles</Nav.Link>
					</Nav>
					<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
						<Modal.Header closeButton>
							<Modal.Title>Ingresar</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{/* Formulario de login */}
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Usuario</Form.Label>
									<Form.Control type="email" placeholder="Ingrese el usuario" />
									<Form.Text className="text-muted">
										Nunca compartiremos su información personal.
									</Form.Text>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Ingrese su contraseña" />
								</Form.Group>
								<Form.Group controlId="formBasicCheckbox">
									{/* <Form.Check type="checkbox" label="Check me out" /> */}
								</Form.Group>
								<Link className="btn btn-link" eventKey={2} onClick={handleClose} to="/verificar">
									¿Ha olvidado su contraseña?
								</Link>
								<Link className="btn btn-link" eventKey={2} onClick={handleClose} to="/registro">
									¿No tienes cuenta? Regístrese aquí
								</Link>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cerrar
							</Button>
							<Link
								className="btn btn-outline-primary float-right ml-1"
								eventKey={2}
								to="/socialpage"
								onClick={handleClose}>
								Ingresar
							</Link>
							{/*<Button variant="primary">Ingresar</Button>*/}
						</Modal.Footer>
					</Modal>
					{/* class ml-auto will turn elements to the right */}
					{!store.token ? (
						<Nav className="ml-auto">
							<Link to="/login">
								<Button variant="btn btn-outline-primary float-right ml-1">Iniciar sesión</Button>
							</Link>
							<Link to="/registro">
								<Button variant="btn btn-outline-primary float-right ml-1">Registrarse</Button>
							</Link>
						</Nav>
					) : (
						<Nav className="ml-auto">
							<Link to="/socialpage">
								<Button variant="btn btn-outline-primary float-right ml-1">Perfil</Button>
							</Link>
							<Link to="/">
								<Button
									variant="btn btn-outline-primary float-right ml-1"
									onClick={() => actions.logout()}>
									Cerrar sesión
								</Button>
							</Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
