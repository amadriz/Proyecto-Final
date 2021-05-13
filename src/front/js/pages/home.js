import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import arteTipsCurri from "../../img/arteTipsCurri.png";
import { Slider } from "../component/slider";
import { Parallax } from "react-parallax";

import parallaxBg from "../../img/parallaxBg.jpg";

import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";
import logo6 from "../../img/logo6.png";
import logo7 from "../../img/logo7.png";

const inlineStyle = {
	background: "#fff",
	left: "50%",
	top: "50%",
	position: "absolute",
	padding: "20px",
	transform: "tranlate(-50%, -50%)"
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Slider />
			<Container fluid className="mb-5">
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
			</Container>
			{/* PARALLAX START */}
			<Row className="mt-3 text-light">
				<Col sm={12}>
					<Parallax bgImage={parallaxBg} strength={500}>
						<div style={{ height: 600 }}>
							<Row className="mb-3">
								<Col className="p-3 text-uppercase text-light" sm={12}>
									<h2 className="text-center mt-5">Beneficios trabajadores:</h2>
								</Col>
								<Col sm={6} className="p-4">
									<Col sm={12}>
										<h4 className="text-center">Red de contactos:</h4>
										<h6>
											Debido a su larga trayectoria profesional, suelen poseer una agenda muy
											completa en diferentes sectores y cargos, lo que puede resultar muy
											provechoso para abrir puertas de modo más rápido para cualquier empresa.
										</h6>
									</Col>
									<Col sm={12} className="p-2">
										<h4 className="text-center">Mayor lealtad:</h4>
										<h6>
											Dado que suelen tener cumplidas gran parte de sus expectativas personales y
											profesionales no toman sus decisiones ni en base a la remuneración que
											reciben ni al puesto que ostentan, sino, sobre todo, a la satisfacción y el
											clima laboral.
										</h6>
									</Col>
									<Col sm={12} className="p-2">
										<h4 className="text-center">Experiencia y conocimiento:</h4>
										<h6>
											Pueden convertirse en grandes aliados en cualquier proceso de negociación
											así como en la resolución de una situación de conflicto, siendo
											habitualmente más calmados a la hora de expresar sus opiniones e
											inquietudes.
										</h6>
									</Col>
								</Col>
								{/* SEGUNDA COLUMNA DE BENEFICIOS */}
								<Col sm={6} className="p-4">
									<Col sm={12} className="p-2">
										<h4 className="text-center">Gran motivación:</h4>
										<h6>
											Una parte relevante de estos trabajadores han pasado un periodo de tiempo
											prolongado en el desempleo por lo que valoran sobremanera cualquier nueva
											oportunidad profesional que se les presente, dando lo mejor de sí mismos.
										</h6>
									</Col>
									<Col sm={12} className="p-2">
										<h4 className="text-center">Valor y compromiso:</h4>
										<h6>
											La gran mayoría de estas personas pertenece a la generación de los
											babyboomers, y combinan una gran preparación profesional con unos valores
											muy tradicionales (fidelidad, compromiso). Elementos clave para cualquier
											pyme.
										</h6>
									</Col>
								</Col>
							</Row>
						</div>
					</Parallax>
				</Col>
			</Row>
			{/* PARALLAX ENDS */}

			<Container fluid className="mb-5">
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
						<img className="img-fluid w-10" src={logo7} />
					</Col>
					<Col sm={4} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
						<img className="img-fluid w-10" src={logo2} />
					</Col>
				</Row>
			</Container>
		</>
	);
};
