import React from "react";
//import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Image,
  Accordion,
  Button,
  ListGroup,
  Nav,
  Navbar,
  ProgressBar,
  Carousel,
} from "react-bootstrap";
import "./TalentoMejorada.css";
import ImgTalento from "../Img/ImgTalento.jpg";
import Inicio from "../Img/Inicio.svg";
import Boot from "../Img/Boot.svg";
import Hacka from "../Img/Hacka.svg";
import Job from "../Img/Job.svg";
import Market from "../Img/Market.svg";
import Recurso from "../Img/Recursos.svg";
import Preguntas from "../Img/Preguntas.svg";
import Manual from "../Img/Manual.svg";
//import User from "../Img/User.svg";
import NBoletin from "../Img/NBoletin.png";
import NLogros from "../Img/NLogros.png";
import NRecuerda from "../Img/NRecuerda.png";
import FW from "../Img/FotoWH.jpg";

import GUsuarios from "../Img/GUsuarios.svg";
import GBootcamp from "../Img/GBootcamp.svg";
import { useNavigate } from "react-router-dom";

const NavItem = ({ name, path, icon }) => {
  let navigate = useNavigate();

  return (
  
      <Nav.Link onClick={() => navigate(path)}>
        
          <div className="nav-item">
              {icon && <img src={icon} alt="Icon" className="icono bg-lime-300" />}
              <span className="hover-menu">{name}</span>
          </div>
      </Nav.Link>
  );
};

export default function TalentoMejorada() {
  
  return (
    
    <div>
      <Container>
        <Row>
          <Col sm={3} className="bg-gradient-to-r from-fuchsia-50 border">
            <div className="flex items-center space-x-4 p-4 bg-white mt-1 rounded-lg brightness-120 hover:skew-y-12 shadow-sm opacity-90">
              <img
                src={FW}
                alt="User Icon"
                // width="40"
                // height="40"
                className="w-16 h-16 rounded-full border border-gray-300 shadow-sm object-cover "
              />
              <div>
                <div className="text-lg font-bold text-blue-600">
                  Walford Hooker
                </div>
                <div className="text-sm text-gray-400 italic">
                  whooker@hotmail.com
                </div>
              </div>
            </div>
            <Row>
              <Col>
                <Navbar
                  expand="sm"s
                  bg="outline-light"
                  data-bs-theme="ligtht"
                  className="rounded-md shadow-2xl"
                >
                  <Container className="custom-navbar">
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse>
                      <Nav class="flex-column" justify-content-start>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Inicio}
                              alt="Gear Icon"
                              // className="nav-icon"
                              className="icono bg-blue-300"
                            />
                            <span className="hover-menu">Inicio</span>
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Boot}
                              alt="Gear Icon"
                              className="icono bg-blue-300 "
                            />{" "}
                            <span className="hover-menu">Bootcamps</span>
                          </div>
                        </Nav.Link>
                        <Nav.Item>
                          <hr className="border-t-2 border-black my-2" />
                        </Nav.Item>

                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Hacka}
                              alt="Gear Icon"
                              className="icono bg-orange-300 fill-none"
                            />{" "}
                            <span className="hover-menu">Hackathons</span>
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Job}
                              alt="Gear Icon"
                              className="icono bg-orange-300"
                            />{" "}
                            <span className="hover-menu">Job Connections</span>
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Market}
                              alt="Gear Icon"
                              className="icono bg-orange-300"
                            />{" "}
                            <span className="hover-menu">Market Place </span>
                          </div>
                        </Nav.Link>
                        <Nav.Item>
                          <hr className="border-t-2 border-black my-2" />
                        </Nav.Item>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Manual}
                              alt="Gear Icon"
                              className="icono bg-lime-300"
                            />{" "}
                            <span className="hover-menu">
                              Manual de Usuario
                            </span>
                          </div>
                        </Nav.Link>
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={Preguntas}
                              alt="Gear Icon"
                              className="icono bg-lime-300"
                            />{" "}
                            <span className="hover-menu">
                              Preguntas Frecuentes
                            </span>
                          </div>
                        </Nav.Link>
                        <Nav.Item>
                          <hr className="border-t-2 border-black my-2" />
                        </Nav.Item>
                        <NavItem name="Gestion Usuarios" path="/usuarios" icon={GUsuarios} />
                        {/* <Nav.Link path="/usuarios">
                          <div className="nav-item">
                            <img
                              src={GUsuarios}
                              alt="Gear Icon"
                              className="icono bg-lime-300"
                            />{" "}
                            <span className="hover-menu">
                              Gestion Usuarios
                            </span>
                          </div>
                        </Nav.Link> */}
                        <Nav.Link href="#">
                          <div className="nav-item">
                            <img
                              src={GBootcamp}
                              alt="Gear Icon"
                              className="icono bg-lime-300"
                            />{" "}
                            <span className="hover-menu">
                              Gestion Bootcamps
                            </span>
                          </div>
                        </Nav.Link>


                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                <div style={{ height: "160px" }}></div>
                <div className="container mx-auto p-4">
                  <button className="button-close">
                    <div className="nav-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                        />
                      </svg>{" "}
                      <span style={{ marginLeft: "8px" }}>Cerrar Sesión</span>
                    </div>
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="bg-gradient-to-r from-fuchsia-50 border">
            <Image src={ImgTalento} alt="" rounded width="100%" />
            <Row>
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
                      <Accordion.Item
                        eventKey="0"
                        className="item-acordeon"
                      >
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
                          <Button variant="primary" size="sm" rounded>
                            Ingresar a la grabación
                          </Button>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item
                        eventKey="1"
                        className="item-acordeon"
                      >
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

                      <Accordion.Item
                        eventKey="2"
                        className="item-acordeon"
                      >
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
                      <Accordion.Item
                        eventKey="3"
                        className="item-acordeon"
                      >
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
                      <Accordion.Item
                        eventKey="4"
                        className="item-acordeon"
                      >
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
                      <Accordion.Item
                        eventKey="5"
                        className="item-acordeon"
                      >
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
                            <span className="hover-recursos">Actividades Estudiantes</span>
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
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
