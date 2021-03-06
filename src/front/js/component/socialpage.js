import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import {
	Container,
	Row,
	Card,
	Image,
	Col,
	Table,
	Dropdown,
	Button,
	ButtonGroup,
	DropdownButton
} from "react-bootstrap";
import useravatar from "../../img/rigo-baby.jpg";

export const SocialPage = () => {
	const { store, actions } = useContext(Context);

	const handleClick = e => {
		e.preventDefault();

		let url = "https://empleo45-proyecto-final.herokuapp.com/api/registro";
		fetch(url)
			.then(response => response.json())
			.then(data => mostrarData(data))
			.catch(error => console.log(error));

		const mostrarData = data => {
			console.log(data);
		};
	};

	{
		/*const getRegistro = idRegistro => {
		// console.log(emailRegistro);

		let url = `https://3001-cyan-limpet-9tz3kb8y.ws-us04.gitpod.io/api/registro/${idRegistro}/`;
		fetch(url)
			.then(response => response.json())
			.then(data => mostrarData(data))
			.catch(error => console.log(error));

		const mostrarData = data => {
			console.log(data);
		};
	};

getRegistro("test@gmail.com"); */
	}
	return (
		<>
			<Container fluid className="mt-3 mb-5">
				<Row>
					<Col md={12}>
						<div className="profile-card mt-5">
							<Card
								style={{
									height: "35rem",
									marginRight: "30px",
									marginLeft: "30px",
									marginBottom: "20px",
									marginTop: "30px",
									backgroundColor: "white",
									borderRadius: "8px",
									border: "transparent",
									boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)"
								}}>
								<Card.Header
									style={{
										borderTopRightRadius: "8px",
										borderTopLeftRadius: "8px",
										backgroundColor: "#277fa5",
										height: "13rem"
									}}
								/>
								<Col>
									<Image
										src={useravatar}
										roundedCircle
										style={{
											height: "200px",
											width: "200px",
											position: "relative",
											bottom: "80px",
											border: "10px solid white",
											backgroundColor: "transparent"
										}}
									/>
								</Col>
								<Card.Body style={{ position: "relative", bottom: "90px" }}>
									<Card.Title style={{ margin: "0", color: "#00000" }}>
										Persona Participante Participante
									</Card.Title>
									<Table>
										<thead>
											<tr>
												<td colSpan="2">
													<Card.Subtitle style={{ marginTop: "2%", color: "#277fa5" }}>
														Correo Electronico
													</Card.Subtitle>
													<Card.Text
														style={{
															marginLeft: "5%",
															color: "00000",
															fontStyle: "italic"
														}}>
														test@gmail.com
													</Card.Text>
												</td>
												<td colSpan="2">
													<Card.Subtitle
														style={{
															marginRight: "25%",
															color: "#277fa5",
															textAlign: "right"
														}}>
														Direccion:
													</Card.Subtitle>
													<Card.Text
														style={{
															marginRight: "25%",
															textAlign: "right",
															color: "00000"
														}}>
														San Jos??, San Jos??, Zapote
													</Card.Text>
												</td>
											</tr>

											<tr>
												<td>
													<ButtonGroup className="mr-2">
														<Button variant="info" style={{ position: "relative" }}>
															Editar
														</Button>
													</ButtonGroup>
												</td>

												<td colSpan="2">
													<Card.Subtitle
														style={{
															marginRight: "25%",
															color: "#277fa5",
															textAlign: "right"
														}}>
														Telefono:
													</Card.Subtitle>
													<Card.Text
														style={{
															marginRight: "25%",
															textAlign: "right",
															color: "00000"
														}}>
														8888-8888
													</Card.Text>
													{/*<Button
														variant="info"
														style={{ position: "relative" }}
														onClick={handleClick}>
														probar fetch
                                                    </Button>*/}
												</td>
											</tr>
										</thead>
									</Table>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};
