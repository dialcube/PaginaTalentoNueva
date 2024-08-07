import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";

export default function Sesiones() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_BACK + "/sesiones/";
  const [sesiones, setSesiones] = useState([]);

  // useEffect para llamar a getSesiones cuando el componente se monta
  useEffect(() => {
    const getSesiones = async () => {
      try {
        const response = await axios.get(url);
        setSesiones(response.data.results);
      } catch (error) {
        console.error("Error fetching sesiones:", error);
      }
    };

    getSesiones();
  }, [url]); // Incluye `url` como dependencia


  const validar = (ev) => {
    ev.preventDefault();
    navigate("../talentomejorada/crearsesiones");
  };
  const validarE = (ev) => {
    ev.preventDefault();
    navigate("../talentomejorada/editarsesion");
  };

  // Función para formatear la fecha
  const formatDate = (fecha) => {
    const date = new Date(fecha);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  };

  return (
    <div>
      <h3>Gestión Sesiones</h3>
      <button className="btn btn-outline-primary mt-4" onClick={validar}>
        <img
          src={Adicionar}
          alt="Agregar Sesión"
          className="icono bg-blue-300"
        />
      </button>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Curso</th>
              <th scope="col">Componente</th>
              <th scope="col">Nombre Sesión</th>
              <th scope="col">Fecha</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sesiones.map((sesion) => (
              <tr key={sesion.IdSesion}>
                <td>{sesion.IdSesion}</td>
                <td>{sesion.IdCurso} - {sesion.NombreCurso}</td>
                <td>{sesion.NombreComponente}</td>
                <td>{sesion.NombreSesion}</td>
                <td>{formatDate(sesion.FechaSesion)}</td>
                <td>
                  <a
                    href={`./editarsesion/${sesion.IdSesion}`}
                    className="btn btn-outline-success"
                    onClick={validarE}
                  >
                    Editar
                  </a>
                  <a
                    href={`/eliminarsesion/${sesion.IdSesion}`}
                    className="btn btn-outline-danger"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar esta sesión?')) {
                        // Aquí puedes realizar la lógica para eliminar la sesión si es necesario
                      }
                    }}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
