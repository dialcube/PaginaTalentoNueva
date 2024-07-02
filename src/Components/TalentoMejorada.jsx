import React, { useState } from "react";
import { Container, Row, Col, Image, Nav, Navbar } from "react-bootstrap";
import "./TalentoMejorada.css";
import ImgTalento from "../Img/ImgTalento.jpg";
import Inicios from "../Img/Inicio.svg";
import Boot from "../Img/Boot.svg";
import Hacka from "../Img/Hacka.svg";
import Job from "../Img/Job.svg";
import Usuario from "../Img/User.svg";
import UsuarioCurso from "../Img/UsuarioCurso.svg";

import Market from "../Img/Market.svg";
import Preguntas from "../Img/Preguntas.svg";
import Manual from "../Img/Manual.svg";
//import FW from "../Img/FotoWH.jpg";
import GUsuarios from "../Img/GUsuarios.svg";
import GBootcamp from "../Img/GBootcamp.svg";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Inicio";
import Usuarios from "./Usuarios";
import CrearUsuario from "./CrearUsuario";
import EditarUsuario from "./EditarUsuario";
import AsistenciasSesiones from "./AsistenciasSesiones";
import Sesiones from "./Sesiones";
import CrearSesion from "./CrearSesion";
import EditarSesion from "./EditarSesion";
import Calificaciones from "./Calificaciones";
import Califica from "../Img/Califica.svg";
import UsuarioCursos from "./UsuarioCursos";
import CrearUsuarioCursos from "./CrearUsuarioCursos";

const NavItem = ({ name, path, icon }) => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Nav.Link onClick={handleClick}>
      <div className="nav-item">
        {icon && <img src={icon} alt="Icon" className="icono bg-lime-300" />}
        <span className="hover-menu">{name}</span>
      </div>
    </Nav.Link>
  );
};

export default function TalentoMejorada() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Modificar según la lógica de autenticación
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear(); // Limpia el sessionStorage

    navigate("/login"); // Redirige al usuario a la página de login después de cerrar sesión
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />; // Redirige al usuario al login si no está autenticado
  }

  //const cidUsuario = sessionStorage.getItem("idUsuario");
  const cemail = sessionStorage.getItem("Email");
  const cnombres = sessionStorage.getItem("Nombres");
  const crol = sessionStorage.getItem("Rol");
  let drol;
  if (crol === "A") {
    drol = "Administrador";
  } else if (crol === "E") {
    drol = "Estudiante";
  } else {
    drol = "Docente";
  }
  return (
    <div>
      <Container style={{ maxWidth: "1500px" }}>
        <Row>
          {/* Tu menú lateral y detalles del usuario */}
          <Col sm={3} className="bg-gradient-to-r from-fuchsia-50 border">
            <div className="flex items-center space-x-4 p-4 bg-white mt-1 rounded-lg brightness-120 hover:skew-y-12 shadow-sm opacity-90">
              <img
                src={Usuario}
                alt=""
                className="w-16 h-16 rounded-full border border-gray-300 shadow-sm object-cover "
              />
              <div>
                <div className="text-lg font-bold text-blue-600">
                  {cnombres}
                </div>
                <div className="text-sm text-gray-400 italic">{cemail}</div>
                <div className="text-sm text-gray-400 italic">{drol}</div>
              </div>
            </div>
            <Row>
              <Col>
                <Navbar
                  expand="sm"
                  bg="outline-light"
                  data-bs-theme="ligtht"
                  className="rounded-md shadow-2xl"
                >
                  <Container className="custom-navbar">
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse>
                      <Nav class="flex-column" justify-content-start>
                        <NavItem
                          name="Inicio"
                          path="talentomejorada/inicio"
                          icon={Inicios}
                        />
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
                          path="talentomejorada/usuarios"
                          icon={GUsuarios}
                        />
                         <NavItem
                          name="Curso Estudiante"
                          path="talentomejorada/usuariocursos"
                          icon={UsuarioCurso}
                        />

                        <NavItem
                          name="Sesiones Bootcamps"
                          path="talentomejorada/sesiones"
                          icon={GBootcamp}
                        />
                        <NavItem
                          name="Calificaciones"
                          path="talentomejorada/calificaciones"
                          icon={Califica}
                        />
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                <div style={{ height: "100px" }}></div>
                <div className="container mx-auto p-4">
                  <button className="button-close" onClick={handleLogout}>
                    <div className="nav-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                        />
                        <path
                          fillRule="evenodd"
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

          {/* Contenido principal */}
          <Col
            sm={6}
            md={8}
            className="bg-gradient-to-r from-fuchsia-50 border"
          >
            <div>
              <Image
                src={ImgTalento}
                alt=""
                rounded
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <Row>
              <div
                className="copciones"
                style={{ maxHeight: "700px", overflowY: "auto" }}
              >
                <Routes>
                  <Route path="/" element={<Inicio />} />
                  <Route path="/talentomejorada/inicio" element={<Inicio />} />
                  <Route
                    path="/talentomejorada/usuarios"
                    element={<Usuarios />}
                  />
                  <Route path="/crearusuarios" element={<CrearUsuario />} />
                  <Route
                    path="/talentomejorada/editarusuario/:id"
                    element={<EditarUsuario />}
                  />
                  <Route
                    path="/talentomejorada/asistenciassesiones"
                    element={<AsistenciasSesiones />}
                  />
                  <Route
                    path="/talentomejorada/sesiones"
                    element={<Sesiones />}
                  />
                  <Route
                    path="/talentomejorada/crearsesiones"
                    element={<CrearSesion />}
                  />
                  <Route
                    path="/talentomejorada/editarsesion"
                    element={<EditarSesion />}
                  />
                  <Route
                    path="/talentomejorada/calificaciones"
                    element={<Calificaciones />}
                  />

                  <Route
                    path="/talentomejorada/usuariocursos"
                    element={<UsuarioCursos />}
                  />
                  <Route path="/crearusuariocursos" element={<CrearUsuarioCursos />} />
                </Routes>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
