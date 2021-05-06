import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbars } from "./component/navbar";
import { Footer } from "./component/footer";
import { SocialPage } from "./component/socialpage";
import { RecuperarKey } from "./component/recuperarKey";
import { ValidarCuenta } from "./component/validarCuenta";
import { Registro } from "./component/registro";
import { Slider } from "./component/slider";
import { ListaEmpleos } from "./component/listaEmpleos";
import TestDataTable from "./component/testDatatable";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbars />
					<Switch>
						<Route exact path="/">
							<Home />
							<SocialPage />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/verificar">
							<ValidarCuenta />
						</Route>
						<Route exact path="/recuperar">
							<RecuperarKey />
						</Route>
						<Route exact path="/listaempleos">
							<ListaEmpleos />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
