import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  Accordion,
  Button,
  ListGroup,
  ProgressBar,
  Carousel,
} from "react-bootstrap";

import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Recurso from "../Img/Recursos.svg";
import NBoletin from "../Img/NBoletin.png";
import NLogros from "../Img/NLogros.png";
import NRecuerda from "../Img/NRecuerda.png";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const url = "http://localhost:8080/sesiones/";
  const [sesiones, setSesiones] = useState([]);

  useEffect(() => {
    getSesiones();
  }, []);

  const getSesiones = async () => {
    try {
      const response = await axios.get(url);
      setSesiones(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
    } catch (error) {
      console.error("Error fetching sesiones:", error);
    }
  };

  const navigate = useNavigate();
  const validar = (ev) => {
    ev.preventDefault(); //evito que el formlario se recargue al dar presionar el button
    navigate("/asistenciassesiones");
  };
  return (
    <div>
      <Col>
        <br />
        <h2 className="text-blue-600/100 text-center">
          Desarrollo Web Full Stack{" "}
        </h2>

        <InputGroup
          className="mb-3"
          style={{ maxWidth: "400px", maxHeight: "20px" }}
        >
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <br />
          <Button variant="outline-secondary" id="button-addon2">
            <FaSearch />
          </Button>
        </InputGroup>

        <strong>Desarrollo del bootcamp:</strong>
        <br />
        <Row>
          <Col
            sm={12}
            md="10"
            lg="8"
            // xl={500}
            style={{ maxHeight: "500px", overflowY: "auto" }}
            className="bg-gradient-to-r from-fuchsia-50"
          >
            <ProgressBar
              striped
              variant="primary"
              now={70}
              label={`${70}%`}
              rounded
            />
            {/* col1 contenido */}
            {/* <Accordion flush className="p-3">
                      {sesiones.map((sesion) => (
                        const fecha = new Date(sesion.FechaSesion);
                        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
                        const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(fecha);                         
                        <Accordion.Item eventKey="0" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>{sesion.NombreSesion}</strong> {sesion.DescripcionSesion}
                                </span>
                                <br />
                                <span>{sesion.FechaSesion}</span>
                              </div>
                              <div>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="oval-button"
                                >
                                  {sesion.Estado}
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario: {sesion.Horario}
                            <br />
                            Asistencia: Asistencia Marcada
                            <br />
                            Descripcion: {sesion.DescripcionSesion}
                            <br />
                            <Button variant="primary" size="sm" rounded  className="me-2">
                              Ingresar a la grabación
                            </Button>
                            <Button variant="primary" size="sm" rounded onClick={validar} >
                              Ver asistentes
                            </Button>
                            <a href={sesion.LinkSesion} className="btn btn-primary btn-sm rounded">
                              Iniciar Sesión 
                            </a>
                          </Accordion.Body>
                        </Accordion.Item>
                        ))}                        
                      </Accordion> */}
            <Accordion flush className="p-3">
              {sesiones.map((sesion) => {
                const fecha = new Date(sesion.FechaSesion);
                const opciones = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                const fechaFormateada = new Intl.DateTimeFormat(
                  "es-ES",
                  opciones
                ).format(fecha);

                let estadoButtonVariant = "";
                switch (sesion.Estado) {
                  case "Finalizado":
                    estadoButtonVariant = "danger";
                    break;
                  case "EnCurso":
                    estadoButtonVariant = "success";
                    break;
                  default:
                    estadoButtonVariant = "warning";
                    break;
                }

                return (
                  <Accordion.Item
                    key={sesion.IdSesion}
                    eventKey={sesion.IdSesion}
                    className="item-acordeon"
                  >
                    <Accordion.Header>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div>
                          <span>
                            <strong>{sesion.NombreSesion}</strong>{" "}
                            {sesion.DescripcionSesion}
                          </span>
                          <br />
                          <span>{fechaFormateada}</span>
                        </div>
                        <div>
                          <Button
                            variant={estadoButtonVariant}
                            size="sm"
                            className="oval-button"
                          >
                            {sesion.Estado}
                          </Button>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      Horario: {sesion.Horario}
                      <br />
                      Asistencia: Asistencia Marcada
                      <br />
                      Descripcion: {sesion.DescripcionSesion}
                      <br />
                      <Button
                        variant="primary"
                        size="sm"
                        rounded
                        className="me-2"
                      >
                        Ingresar a la grabación
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        rounded
                        onClick={validar}
                      >
                        Ver asistentes
                      </Button>
                      <a
                        href={sesion.LinkSesion}
                        className="btn btn-primary btn-sm rounded"
                      >
                        Iniciar Sesión
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
          <Col className="bg-gradient-to-r from-fuchsia-50 border">
            <strong>Recursos:</strong>
            <ListGroup>
              <ListGroup.Item>
                <a href="#kit" className="list-group-link  ">
                  <div className="nav-item">
                    <img
                      className="nav-icon"
                      src={Recurso}
                      alt=""
                      width="16"
                      height="16"
                    />
                    {"  "}
                    <span className="hover-recursos">Kit del Programador</span>
                  </div>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#ct" className="list-group-link">
                  <div className="nav-item">
                    <img
                      className="nav-icon"
                      src={Recurso}
                      alt=""
                      width="16"
                      height="16"
                    />
                    {"  "}
                    <span className="hover-recursos">
                      Actividades Estudiantes
                    </span>
                  </div>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#mat" className="list-group-link">
                  <div className="nav-item">
                    <img
                      className="nav-icon"
                      src={Recurso}
                      alt=""
                      width="16"
                      height="16"
                    />
                    {"  "}
                    <span className="hover-recursos">Material de Clase</span>
                  </div>
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="#con" className="list-group-link">
                  <div className="nav-item">
                    <img
                      className="nav-icon"
                      src={Recurso}
                      alt=""
                      width="16"
                      height="16"
                    />
                    {"  "}
                    <span className="hover-recursos">Contenido Tematico</span>
                  </div>
                </a>
              </ListGroup.Item>
            </ListGroup>
            <br />
            <strong>Boletin Informativo:</strong>
            <div className="cCarrusel">
              <Carousel interval={2000}>
                <Carousel.Item>
                  <Image
                    src={NBoletin}
                    text=""
                    alt=""
                    className="carousel-image"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={NLogros}
                    text=""
                    alt=""
                    className="carousel-image"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    src={NRecuerda}
                    text=""
                    alt=""
                    className="carousel-image"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
