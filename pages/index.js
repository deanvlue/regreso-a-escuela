import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import regreso from "/public/regreso.json";

//import btnRegreso from '/public/img/button.png';
//import btnTitulo from '/public/img/button_yellow.png';
import { ButtonGroup, ListGroup } from "react-bootstrap";

const basePath = "/beta/regreso-a-escuela/out";
const dataURL = "https://laescuelaencasa.mx/data/regreso-a-escuela";

function MyVerticallyCenteredModal(props) {
	const archivos = regreso;

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter modal-transparent"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter text-center">
					<img src={`${basePath}/img/button_yellow.png`} />
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h3 className="pizarra">Orientación socioemocional</h3>
				<hr></hr>
				<ButtonGroup vertical size="lg">
					{archivos.socioemocional.map((a) => {
						return (
							<Button
								size="lg"
								className="itemPizarra"
								block
								href={`${dataURL}/socioemocional/${a.url}`}
								target="_blank"
							>
								{a.title}
							</Button>
						);
					})}
				</ButtonGroup>
				<h3 className="pizarra">Guias Pedagógicas</h3>
				<hr></hr>
				<ButtonGroup vertical size="lg">
					{archivos.gpedagogicas.map((a) => {
						return (
							<Button
								size="lg"
								className="itemPizarra"
								block
								href={`${dataURL}/gpedagogicas/${a.url}`}
								target="_blank"
							>
								{a.title}
							</Button>
						);
					})}
				</ButtonGroup>
				<h3 className="pizarra">Kit</h3>
				<hr></hr>
				<ButtonGroup vertical size="lg">
					{archivos.kit.map((a) => {
						return (
							<Button
								size="lg"
								className="itemPizarra"
								block
								href={`${dataURL}/kit/${a.url}`}
								target="_blank"
							>
								{a.title}
							</Button>
						);
					})}
				</ButtonGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button className="btn-success" onClick={props.onHide}>
					Cerrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default function App() {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div className="App">
			<div className="row h-100">
				<div className="col-sm-12 my-auto">
					<Button
						onClick={() => setModalShow(true)}
						className="btn-image animatediv"
					>
						<img src={`${basePath}/img/button.png`} />
					</Button>
				</div>
			</div>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}
