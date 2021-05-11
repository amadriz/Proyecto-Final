import React from "react";
import empleos from "../../img/empleos.png";
import face from "../../img/face.png";
import inst from "../../img/inst.png";
import cinde from "../../img/cinde.png";

export const Footer = () => {
	return (
		<div className="main-footer" style={{ backgroundColor: "#277fa5", width: "100%", position: "relative" }}>
			<div className="container">
				<div className="row">
					{/* COLO1 */}
					<img src={empleos} alt="logo" height="70" marginTop="15%" style={{ marginTop: "25px" }} />
					<div className="col"></div>
					{/* COLO2 */}
					<div className="col">
						<img src={face} alt="logo" height="30" style={{ marginTop: "45px", marginLeft: "70px" }} />
						{/* <h4>FACEBOOK</h4> */}
						<ul className="list-unstyled">
							<li style={{ color: "#ffffff", fontStyle: "italic", marginLeft: "50px" }}>Empleo45</li>
						</ul>
					</div>
					{/* COLO3 */}
					<div className="col">
						<img src={inst} alt="logo" height="30" style={{ marginTop: "45px", marginLeft: "85px" }} />
						<ul className="list-unstyled">
							<li style={{ color: "#ffffff", fontStyle: "italic", marginLeft: "60px" }}>Empleo45CR</li>
						</ul>
					</div>
					{/* COLO */}
					<div className="col">
						<img src={cinde} alt="logo" width="150" style={{ marginTop: "45px", marginLeft: "85px" }} />
						{/* <ul className="list-unstyled">
							<li style={{ color: "#ffffff", fontStyle: "italic", marginLeft: "60px" }}>Empleo45CR</li>
						</ul> */}
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm" style={{ color: "#ffffff", fontStyle: "italic", marginLeft: "500px" }}>
						&copy;{new Date().getFullYear()} EMPLEO45+
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
