import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import arteTipsCurri from "../../img/arteTipsCurri.png";
import { Slider } from "../component/slider";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Slider />
			<Container fluid>
				<Row className="mt-5">
					<Col sm={12}>
						<h1 className="text-center text-uppercase" data-aos="zoom-in">
							¿Como hacer un curriculum?
						</h1>
					</Col>
				</Row>
				<Row>
					<Col sm={6} data-aos="slide-right" data-aos-duration="1000">
						<img src={arteTipsCurri} className="img-fluid" />
					</Col>
					<Col sm={6} className="p-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
						<h5>Resalta tus habilidades y experiencias en tu Curriculum</h5>
						<p>
							Es importante hacer énfasis en tus principales competencias y experiencias laborales.
							Detalla las actividades realizadas ordenándolas cronológicamente. Escribe los programas
							manejados y tu nivel de conocimiento. Coloca títulos claves que describan la posición que
							ocupabas y utiliza otro color para destacarlos.
						</p>
						<p>
							Recuerda que los reclutadores reciben miles de Curriculum y solo toman algunos minutos para
							leer el tuyo.
						</p>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col sm={12}>
						<h1
							className="text-center text-uppercase"
							data-aos="zoom-in"
							data-aos-duration="1000"
							data-aos-delay="50">
							Empleadores Participantes
						</h1>
					</Col>
				</Row>
				<Row className="text-center mt-5 mb-5">
					<Col sm={4} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo1} />
					</Col>
					<Col sm={4} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo5} />
					</Col>
					<Col sm={4} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo4} />
					</Col>
				</Row>
				<Row className="text-center mt-3 mb-5">
					<Col sm={4} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo3} />
					</Col>
					<Col sm={4} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo6} />
					</Col>
					<Col sm={4} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo2} />
					</Col>
				</Row>
			</Container>
		</>
	);
};
