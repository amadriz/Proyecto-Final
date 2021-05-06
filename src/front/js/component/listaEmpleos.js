import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Form, Group, Button, Jumbotron } from "react-bootstrap";
import Datatable from "react-data-table-component";
import misEstilos from "../../styles/misEstilos.css";
import PropTypes from "prop-types";
import listaEmpleoMain from "../../img/listaEmpleoMain.jpg";

//Funcion para que funcione el link en el data table
const renderUrl = (val, row) => {
	return <a href={`${val.link}`}>Ver Puesto</a>;
};

const columnas = [
	{
		name: "Nombre",
		selector: "title",
		sortable: true
	},
	{
		name: "Lugar",
		selector: "location",
		sortable: true
	},
	{
		name: "Descripcion",
		selector: "snippet",
		sortable: true
	},
	{
		name: "Compañía",
		selector: "source",
		sortable: true
	},
	{
		name: "Ver Detalle",
		selector: "link",
		sortable: true,
		cell: renderUrl
	}
];

const paginacionOpciones = {
	rowsPerPageText: "Filas por página",
	rangeSeparatorText: "de",
	selectAllRowsItem: true,
	selectAllRowsItemText: "Todos"
};

export const ListaEmpleos = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchEmpleos();
	}, []);

	return (
		<>
			<div id="carousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active ">
						<img src={listaEmpleoMain} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-caption d-md-block captionSliderEquipo">
						<h1 className="text-uppercase captionSliderUsadas text-uppercase captionSliderUsadas">
							Lista de Empleos
						</h1>
					</div>
				</div>
			</div>
			<Container className="mt-5">
				<Datatable
					columns={columnas}
					data={store.listaEmpleos}
					striped
					responsive
					compact
					pagination
					paginationComponentOptions={paginacionOpciones}
				/>
			</Container>
			);
		</>
	);
};
