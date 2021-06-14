import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//import btnRegreso from '/public/img/button.png';
//import btnTitulo from '/public/img/button_yellow.png';
import { ButtonGroup, ListGroup } from 'react-bootstrap';



function MyVerticallyCenteredModal(props) {

  const archivos = [
    {
      id: 1,
      titulo: "Archivo 001",
      url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
    },
    {
      id: 2,
      titulo: "Archivo 002",
      url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
    },
    {
      id: 3,
      titulo: "Archivo 003",
      url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
    },
    {
      id: 4,
      titulo: "Archivo 004",
      url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
    },
    {
      id: 5,
      titulo: "Archivo 005",
      url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
    },

  ]

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter modal-transparent"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          <img src='img/button_yellow.png' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ButtonGroup vertical size="lg">
          {
            archivos.map(a => {
              return (<Button size="lg" className="itemPizarra" block> {a.titulo} </Button>)

            })
          }
        </ButtonGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success" onClick={props.onHide}>Cerrar</Button>
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
          <Button onClick={() => setModalShow(true)} className="btn-image animatediv">
            <img src='/img/button.png' />
          </Button>
        </div>
      </div>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  )
}


