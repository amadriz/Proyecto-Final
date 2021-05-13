import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Form, Group, Button, Jumbotron, Dropdown, DropdownButton } from "react-bootstrap";
import Datatable from "react-data-table-component";
import misEstilos from "../../styles/misEstilos.css";
import PropTypes from "prop-types";
import listaEmpleoMain from "../../img/listaEmpleoMain.jpg";

const tablaJobs = [
	{
		title: "IT - Database Administrator",
		location: "South Charleston, WV",
		snippet: " Company Description Infotree's approach to eve…essful matches for our employees and customers...",
		salary: "",
		source: "clicktrader.io"
	}
];

//Funcion para que funcione el link en el data table
const renderUrl = (val, row) => {
	return <a href={`${val.link}`}>Ver Puesto</a>;
};

// Esta función agrega un custom cel al datable con el icono para favorito y funcion para guardar favoritos
const renderFavorito = val => {
	console.log(val);

	const { store, actions } = useContext(Context);
	return store.listaEmpleos.map((item, index) => {
		//return tablaJobs.map((item, index) => {
		if (val.title == item.title) {
			return (
				<Button
					key={index}
					className="btn btn-outline-success"
					// onClick={() => alert(`Favorito guardado ` + item.title)}>
					onClick={() => actions.setFavorites(item.title)}>
					<i className="fas fa-heart" />
				</Button>
			);
		}
	});
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
	},
	{
		name: "Favorito",
		cell: renderFavorito
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
							{/* <span>{JSON.stringify(store.favorites)}</span> */}
						</h1>
					</div>
				</div>
			</div>
			<Container className="mt-5">
				<DropdownButton id="dropdown-basic-button" title={`Mis Favoritos ${store.favorites.length}`}>
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item href="#/action-1" key={index}>
								{item}
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
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
