import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";

import parallaxBg from "../../img/slider1.jpg";

export const Parallaxsec = () => {
	return (
		<>
			<Parallax bgImage={parallaxBg}>
				<div className="mt-5" style={{ heigth: 500 }}>
					<p className="mt-5">Working ok</p>
				</div>
			</Parallax>
		</>
	);
};
