import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import Datatable from "react-data-table-component";
import { Container } from "react-bootstrap";

// const tablaJobs = [
// 	{
// 		title: "IT - Database Administrator",
// 		location: "South Charleston, WV",
// 		snippet: " Company Description Infotree's approach to eve…essful matches for our employees and customers...",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Business Analyst",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...governments around the globe. We believe ovation & Customer Engagement Group. The...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Risk Manager",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...Risk Framework. Primary responsibilities l IT risk issues are being appropriately...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "Snowshoe - IT Manager",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...ongoing operational activities as well asacts in a professional manner with peers...&nbsp;",
// 		salary: "",
// 		source: "appcast.io"
// 	},
// 	{
// 		title: "IT Field Technician",
// 		location: "Charleston, WV",
// 		snippet: "Job Overview: We are looking recruiting several <b networks. Travel will typically be with...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Operations Analyst",
// 		location: "Charleston, WV",
// 		snippet: "**Company Overview:**↵Wolters Kluwer Global Busineerican-Accounting Center. These global centers...",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "Recruiter - IT/SW",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...encompasses all facets of the talent acquorkforce Solutions.↵As a <b>IT/</b>SW Recruiter y",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Business Consultant",
// 		location: "Charleston, WV",
// 		snippet: "**What does a great <b>IT </b>Business Consultant,ltant II, you will function as a Project...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "Associate Director, IT Workplace Services for Animal Health",
// 		location: "Charleston, WV",
// 		snippet: "Job DescriptionOur <b>IT </b>team operates as a bube more productive and enable innovation...&nbsp;",
// 		salary: "",
// 		source: "appcast.io"
// 	},
// 	{
// 		title: "Corporate Director IT Applications",
// 		location: "Charleston, WV",
// 		snippet: "Job SummaryThe <b>IT </b>Applications Director is at this role partners with the IT Senior...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Program Management Office Manager",
// 		location: "Charleston, WV",
// 		snippet: "**<b>IT </b>Program Management Office Manager**We and the ability to find better solutions...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Help Desk Technician",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...<b>IT </b>Help Desk Technician Summaryacility needs as well as the support and...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Security Incident Manager",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...escalated as security incidents and handlt and as directed, Senior WK Leadership....&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Recruiter - Fully Remote",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...<b>IT </b>Recruiter Fully Remote Remotenges and gain the competitive advantage...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "WV-IT Security Specialist I",
// 		location: "Charleston, WV",
// 		snippet: "JOB PURPOSE: Strong <b>IT </b>skills and knowledgeurity Standards• Participate in incident...&nbsp;",
// 		salary: "",
// 		source: "appcast.io"
// 	},
// 	{
// 		title: "IT Vendor Management Lead",
// 		location: "Charleston, WV",
// 		snippet: "&nbsp;...Description**↵Are you someone who is expeg a lead individual who is excited about...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "Engineering Office Manager (IT)",
// 		location: "Blount, WV",
// 		snippet: "&nbsp;...office in Charleston, West Virginia. This of the office as well as lead a growing...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Business Analyst - ServiceNow",
// 		location: "Charleston, WV",
// 		snippet: "<b>IT </b>Business Analyst - ServiceNowUnited Stato join our team supporting ourServiceNow...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "IT Asset Management Senior",
// 		location: "Charleston, WV",
// 		snippet: "Job DescriptionThe role of the <b>IT </b>Asset Mansoftware and hardware licenses to ensure...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	},
// 	{
// 		title: "Lab IT Infrastructure Engineer",
// 		location: "Charleston, WV",
// 		snippet: "**Job Description**↵Our <b>IT </b>team operates as…veryone to be more productive and enable...&nbsp;",
// 		salary: "",
// 		source: "clicktrader.io"
// 	}
// ];

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
	}
];

const paginacionOpciones = {
	rowsPerPageText: "Filas por página",
	rangeSeparatorText: "de",
	selectAllRowsItem: true,
	selectAllRowsItemText: "Todos"
};

const TestDataTable = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchEmpleos();
	}, []);

	return (
		<div>
			<p>Datos:</p>
			{/* <span>{JSON.stringify(store.listaEmpleos)}</span> */}

			<Container className="mt-5">
				<Datatable
					columns={columnas}
					data={store.listaEmpleos}
					title="Lista de empleos"
					pagination
					paginationComponentOptions={paginacionOpciones}
				/>
			</Container>
		</div>
	);
};

export default TestDataTable;
