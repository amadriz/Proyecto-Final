import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, Carousel, Modal, Nav, Form, NavDropdown } from "react-bootstrap";
import logopeq from "../../img/logopeq.png";

export const Navbars = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		//  <Link to="/">
		//      <span className="navbar-brand mb-0 h1">React Boilerplate</span>
		//  </Link>
		//  <div className="ml-auto">
		//      <Link to="/demo">
		//          <button className="btn btn-primary">Check the Context in action</button>
		//      </Link>
		//  </div>
		// </nav>
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
				<Navbar.Brand href="#home">
					<img src={logopeq} alt="logo" width="100" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Inicio</Nav.Link>
						<Nav.Link href="#pricing">Empleos Disponibles</Nav.Link>
						<NavDropdown title="Tips" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Hoja de vida</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Entrevista</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Otro</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
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
										Nunca compartiremos su información personal
									</Form.Text>
								</Form.Group>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Ingrese su contraseña" />
								</Form.Group>
								<Form.Group controlId="formBasicCheckbox">
									{/* <Form.Check type="checkbox" label="Check me out" /> */}
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cerrar
							</Button>
							<Button variant="primary">Ingresar</Button>
						</Modal.Footer>
					</Modal>
					{/* class ml-auto will turn elements to the right */}
					<Nav className="ml-auto">
						<button href="#deets" className="btn btn-outline-primary float-right" onClick={handleShow}>
							Login
						</button>
						<button className="btn btn-outline-warning float-right ml-1" eventKey={2} href="#memes">
							Register
						</button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};
