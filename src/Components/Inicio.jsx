import React from 'react'
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
                      <Accordion flush className="p-3">
                        <Accordion.Item eventKey="0" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 1</strong> Introduccion a React
                                </span>
                                <br />
                                <span>Jueves 30 de Mayo, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="oval-button"
                                >
                                  Finalizado
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario: jueves, 30 de Mayo de 2024 a las 5:55 AM
                            <br />
                            Asistencia: Asistencia Marcada
                            <br />
                            Descripcion: Descripcion de la Sesion 1
                            <br />
                            <Button variant="primary" size="sm" rounded  className="me-2">
                              Ingresar a la grabación
                            </Button>
                            <Button variant="primary" size="sm" rounded onClick={validar} >
                              Ver asistentes
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 2</strong> Componentes en React
                                </span>
                                <br />
                                <span>Viernes 31 de Mayo, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="oval-button"
                                >
                                  Finalizado
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario:
                            <br />
                            Asistencia:
                            <br />
                            Descripcion::
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 3</strong> Responsive
                                </span>
                                <br />
                                <span>Sabado 1 de Junio, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="oval-button"
                                >
                                  Finalizado
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario:
                            <br />
                            Asistencia:
                            <br />
                            Descripcion:
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 4</strong> Bootstrap
                                </span>
                                <br />
                                <span>Lunes 3 de Junio, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  className="oval-button"
                                >
                                  Finalizado
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario:
                            <br />
                            Asistencia:
                            <br />
                            Descripcion:
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 5</strong> TailWind
                                </span>
                                <br />
                                <span>Martes 4 de Junio, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="success"
                                  size="sm"
                                  className="oval-button"
                                >
                                  EnCurso
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario: martes, 4 de Junio de 2024 a las 5:55 AM
                            <br />
                            Asistencia: Asistencia no marcada
                            <br />
                            Descripcion: Descripcion de la sesion 5
                            <br />
                            <Button variant="primary" size="sm" rounded>
                              Ingresar a la sesión
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className="item-acordeon">
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div>
                                <span>
                                  <strong>Sesion 6</strong> MongoDB
                                </span>
                                <br />
                                <span>Miercoles 5 de Junio, 2024</span>
                              </div>
                              <div>
                                <Button
                                  variant="warning"
                                  size="sm"
                                  className="oval-button"
                                >
                                  Proximamente
                                </Button>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            Horario:
                            <br />
                            Asistencia:
                            <br />
                            Descripcion:
                          </Accordion.Body>
                        </Accordion.Item>
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
                              <span className="hover-recursos">
                                Kit del Programador
                              </span>
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
                              <span className="hover-recursos">
                                Material de Clase
                              </span>
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
                              <span className="hover-recursos">
                                Contenido Tematico
                              </span>
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
  )
}
