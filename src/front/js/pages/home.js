import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Slider } from "../component/slider";
import "../../styles/home.scss";
import { Registro } from "../component/registro";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Slider />
			<Container fluid>
				<Row className="mt-5">
					<Col sm={12}>
						<h1 className="text-center">Sección 1</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={6}>1</Col>
					<Col sm={6}>2</Col>
				</Row>
			</Container>
		</>
	);
};
