import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Button, Form, Label, Text, Alert, Input } from "react-bootstrap";

export const Login = () => {
	//let [email, cambiarEmail] = useState({ campo: "", valido: null });
	//let [password, cambiarPassword] = useState({ campo: "", valido: null });
	const { store, actions } = useContext(Context);
	let [email, cambiarEmail] = useState("");
	let [password, cambiarPassword] = useState("");
	const history = useHistory();

	const token = sessionStorage.getItem("token");
	console.log("This is you token", store.token);

	const handleClick = () => {
		actions.login(email, password);

		/*
		const opts = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		};

		fetch("https:3001-purple-bear-vtpt4t9n.ws-us03.gitpod.io/api/token", opts)
			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("There has been some error");
			})
			.then(data => {
				console.log("This came from the backend", data);
				sessionStorage.setItem("token", data.access_token);
			})
			.catch(error => {
				console.error("There was an ERROR!!!!", error);
            });*/
	};

	if (store.token && store.token != "" && store.token != undefined) {
		history.push("/listaEmpleos");
	} else if (store.token && store.token == "" && store.token == undefined) {
		history.push("/login");
	}

	return (
		<Container className="mt-auto vs-container">
			<Row className="mt-5">
				<Col sm={12}>
					<h1>Ingrese a su perfil</h1>
					<hr />
					{store.token && store.token != undefined ? (
						"You are logged in with" + store.token
					) : (
						<div>
							<input
								type="text"
								placeholder="email"
								value={email}
								onChange={e => cambiarEmail(e.target.value)}></input>
							<input
								type="text"
								placeholder="clave"
								value={password}
								onChange={e => cambiarPassword(e.target.value)}></input>
							<button className="btn btn-primary" onClick={() => handleClick()}>
								Iniciar sesión
							</button>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};
