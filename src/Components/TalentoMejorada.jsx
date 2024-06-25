import React from "react";
//import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";
import "./TalentoMejorada.css";
import ImgTalento from "../Img/ImgTalento.jpg";
import Inicios from "../Img/Inicio.svg";
import Boot from "../Img/Boot.svg";
import Hacka from "../Img/Hacka.svg";
import Job from "../Img/Job.svg";
import Market from "../Img/Market.svg";

import Preguntas from "../Img/Preguntas.svg";
import Manual from "../Img/Manual.svg";
//import User from "../Img/User.svg";

import FW from "../Img/FotoWH.jpg";
import Inicio from "../Components/Inicio";

import GUsuarios from "../Img/GUsuarios.svg";
import GBootcamp from "../Img/GBootcamp.svg";
import { useNavigate } from "react-router-dom";
import Usuarios from "./Usuarios";
import {  Route, Routes } from "react-router-dom";
import CrearUsuario from "./CrearUsuario";
import EditarUsuario from "./EditarUsuario";
import AsistenciasSesiones from "./AsistenciasSesiones";

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
                <div className="text-sm text-gray-400 italic">
                  Administrador
                </div>
              </div>
            </div>
            <Row>
              <Col>
                <Navbar
                  expand="sm"
                  s
                  bg="outline-light"
                  data-bs-theme="ligtht"
                  className="rounded-md shadow-2xl"
                >
                  <Container className="custom-navbar">
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse>
                      <Nav class="flex-column" justify-content-start>
                        <NavItem name="Inicio" path="/inicio" icon={Inicios} />
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
                        <NavItem
                          name="Gestion Usuarios"
                          path="/usuarios"
                          icon={GUsuarios}
                        />
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
              <div
                className="copciones"
                style={{ maxHeight: "700px", overflowY: "auto" }}
              >
                <Routes>
                  <Route exact path="/" element={<Inicio />} />
                  <Route path="/inicio" element={<Inicio />} />

                  <Route path="/usuarios" element={<Usuarios />} />
                  <Route path="/crearusuarios" element={<CrearUsuario />} />
                  <Route path="/editarusuario" element={<EditarUsuario />} />
                  <Route path="/asistenciassesiones" element={<AsistenciasSesiones />} />
                </Routes>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
