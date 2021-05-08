import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button, Carousel, Modal, Nav, Form, NavDropdown } from "react-bootstrap";
import logopeq from "../../img/logopeq.png";
import { Context } from "../store/appContext";

export const Navbars = () => {
	const { store, actions } = useContext(Context);
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
				<Navbar.Brand href="/">
					<img src={logopeq} alt="logo" width="100" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Inicio</Nav.Link>
						<Nav.Link href="/listaempleos">Empleos Disponibles</Nav.Link>
						<NavDropdown title="Tips" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Hoja de vida</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Entrevista</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Otro</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					{!store.token ? (
						<Link to="/login">
							<Button variant="btn btn-outline-primary float-right ml-1">Iniciar sesión</Button>
						</Link>
					) : (
						<Nav className="ml-auto">
							<Link to="/socialpage">
								<Button variant="btn btn-outline-primary float-right ml-1">Perfil</Button>
							</Link>
							<Button variant="btn btn-outline-primary float-right ml-1" onClick={() => actions.logout()}>
								Cerrar sesión
							</Button>
						</Nav>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

{
	/* 
    

    		{!store.token ? (
						<Link to="/login">
							<Button variant="btn btn-outline-primary float-right ml-1">Iniciar sesión</Button>
						</Link>
					) : (
                        
                        (
							<Button variant="btn btn-outline-primary float-right ml-1" onClick={() => actions.logout()}>
								Cerrar sesión
							</Button>
						) && (
							<Link to="/socialpage">
								<Button variant="btn btn-outline-primary float-right ml-1">Perfil</Button>
							</Link>
						)
					)}

    -------

					<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
						<Modal.Header closeButton>
							<Modal.Title>Ingresar</Modal.Title>
						</Modal.Header>
						<Modal.Body>
						
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
						
						</Modal.Footer>
					</Modal>
					{!store.token ? (
						<Nav className="ml-auto">
							<button href="#deets" className="btn btn-outline-primary float-right" onClick={handleShow}>
								Login
							</button>
							<Link className="btn btn-outline-primary float-right ml-1" eventKey={2} to="/registro">
								Registrarse
							</Link>
						</Nav>
					) : (
						<Button variant="btn btn-outline-primary float-right ml-1" onClick={() => actions.logout()}>
							Cerrar sesión
						</Button>
					)}


*/
}
