import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card, Image, Col, Table, Dropdown, Button, ButtonGroup, DropdownButton } from "react-bootstrap";

import useravatar from "../../img/rigo-baby.jpg";

export const SocialPage = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);

	return (
		<>
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
						<Card.Title style={{ margin: "0", color: "#00000" }}>Jose Luis Rodriguez Vargas</Card.Title>
						<Table>
							<thead>
								<tr>
									<td colSpan="2">
										<Card.Subtitle style={{ marginTop: "2%", color: "#277fa5" }}>
											Correo Electronico
										</Card.Subtitle>
										<Card.Text style={{ marginLeft: "5%", color: "00000", fontStyle: "italic" }}>
											elpuma@gmail.com
										</Card.Text>
									</td>
									<td colSpan="2">
										<Card.Subtitle
											style={{ marginRight: "25%", color: "#277fa5", textAlign: "right" }}>
											Direccion:
										</Card.Subtitle>
										<Card.Text style={{ marginRight: "25%", textAlign: "right", color: "00000" }}>
											Alajuela, Alajuela, Guacima
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
										{/* <ButtonGroup className="mr-2">
											<Button variant="info" style={{ position: "relative" }}>
												Update
											</Button>
										</ButtonGroup> */}
									</td>

									<td colSpan="2">
										<Card.Subtitle
											style={{ marginRight: "25%", color: "#277fa5", textAlign: "right" }}>
											Telefono:
										</Card.Subtitle>
										<Card.Text style={{ marginRight: "25%", textAlign: "right", color: "00000" }}>
											8888-8888
										</Card.Text>
									</td>
								</tr>
							</thead>
						</Table>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};
