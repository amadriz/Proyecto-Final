import React from "react";
import { Container, Row, Col, Button, Carousel, Navbar, Modal, Nav, Form, NavDropdown } from "react-bootstrap";
import slider1 from "../../img/slider1.jpg";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.jpg";

export const Slider = () => {
	return (
		<>
			<Carousel fade>
				<Carousel.Item interval={1000}>
					<img className="d-block w-100" src={slider1} alt="First slide" fluid />
					<Carousel.Caption>
						<h3>Nuevas Oportunidades</h3>
						<p>¡Investiga carreras y vuelve a capacitarte!</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slider2} alt="Second slide" />
					<Carousel.Caption>
						<h3>Carreras en Tecnología </h3>
						<p>Desarrolla nuevas habilidades digitales.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={slider3} alt="Third slide" />
					<Carousel.Caption>
						<h3>Trabajadores Mayores de 45 Años</h3>
						<p>Aproximadamente el 27 % de los trabajadores de 45 años o más trabajaban tiempo parcial.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};
