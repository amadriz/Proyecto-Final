import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Row, Col, Button, Form, Label, Text, Alert } from "react-bootstrap";

export const ValidarCuenta = () => {
	//let [email, cambiarEmail] = useState({ campo: "", valido: null });
	const [auth, setAuth] = useState(false);
	const [email, setCorreo] = useState("");
	const [password, setContraseña] = useState("");

	{
		/*Validar con BD: PSQL*/
	}
	const handleClick = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://www.youtube.com/watch?v=ekEr342iAu8/api/register", {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log("Soy data:" + data);
				setAuth(true);
			})
			.catch(error => console.log("Cargando un error desde el Backend", error));
	};
	return (
		<>
			<Container className="mt-auto vs-container mb-5">
				<Row className="mt-5">
					<Col sm={12}>
						<h1>¡Nueva contraseña!</h1>
						<hr />
						<div>
							<Form className="mt-5" onSubmit={handleClick}>
								<div>
									{/*<label className="col-sm-12 vs-label">Dirección de correo electrónico</label>*/}
									<input
										className="btnInput"
										type="email"
										id="inputEmail"
										value={email}
										placeholder="Ingrese su correo electrónico"
										onChange={e => setCorreo(e.target.value)}
										required="required"></input>
								</div>
								<div>
									{/*<label className="col-sm-12 vs-label">Ingrese la nueva contraseña</label>*/}
									<input
										className="btnInput"
										type="password"
										id="inputPassword"
										value={password}
										placeholder="Por favor, ingrese su NUEVA contraseña"
										onChange={e => setContraseña(e.target.value)}
										required="required"></input>
								</div>
								<button type="submit" className="btn btnEnviar btn-primary">
									Actualizar usuario
								</button>
							</Form>
							{auth ? <Redirect to="/login" /> : null}
						</div>
					</Col>
					<div className="min-footer">
						<Link to="/login">
							<Button variant="btn btn-link" type="submit">
								Regresar al Inicio de Sesión
							</Button>
						</Link>
						<Link to="/registro">
							<Button variant="btn  btn-link" type="submit">
								¿No tienes cuenta? Regístrese aquí
							</Button>
						</Link>
					</div>
				</Row>
			</Container>
		</>
	);
};

/* 
#--------------------------- Se agregaba fuera del RETURN ------------------------#
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
#--------------------------- Se agregaba dentro del Form ------------------------#

                            <Form.Group className="" controlId="formBasicEmail">
								<Form.Label>
									Ingrese su dirección de correo electrónico para buscar su cuenta.
                                </Form.Label>
                                
								<Form.Control
									className="btnInput"
									type="email"
									placeholder="Correo Electrónico"
									id="email"
									value={email.campo}
									onChange={onChange}
									onKeyUp={validarEmail} //se activa cuando pulsa una tecla
									onBlur={validarEmail} // se activa cuando pulsa afuera del input
									valido={email.valido}
								/>
								<Alert className={email.valido === false ? "mostrar alert-danger" : "ocultar"}>
									<button className="close">
										<span>&times;</span>
									</button>
									<strong>¡Error! </strong> Ingrese un correo electrónico válido.
								</Alert>
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

*/
