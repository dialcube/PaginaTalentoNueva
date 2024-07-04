import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AsistenciaSesiones() {
  const [asistentes, setAsistentes] = useState([]);
  const [noAsistentes, setNoAsistentes] = useState([]);

  const url = `${process.env.REACT_APP_API_BACK}/sesionesusuario/`;

  const getSesionesUsuario = useCallback(async () => {
    try {
      const response = await axios.post(url, {
        IdCurso: sessionStorage.getItem("IdCurso"),
        IdSesion: sessionStorage.getItem("IdSesion")
      });

      // Separar usuarios en asistentes y no asistentes
      const asistieron = response.data.results.filter(usuario => usuario.Asistencia === "Si");
      const noAsistieron = response.data.results.filter(usuario => usuario.Asistencia === "No");

      setAsistentes(asistieron);
      setNoAsistentes(noAsistieron);
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }, [url]);

  useEffect(() => {
    getSesionesUsuario();
  }, [getSesionesUsuario]);

  // Función para formatear fecha y hora
  const formatearFechaHora = (fechaHora) => {
    return new Date(fechaHora).toLocaleString();
  };

  return (
    <div>
      <h2>Usuarios Sesion:{sessionStorage.getItem("IdSesion")}</h2>

      <h3>Asistieron</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Curso</th>
              <th scope="col">Componente</th>
              <th scope="col">Sesion</th>
              <th scope="col">Documento</th>
              <th scope="col">Usuario</th>
              <th scope="col">Fecha/Hora Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {asistentes.map((usuario) => (
              <tr key={usuario.IdUsuario}>
                <td>{usuario.NombreCurso}</td>
                <td>{usuario.NombreComponente}</td>
                <td>{usuario.IdSesion}</td>
                <td>{usuario.Identificacion}</td>
                <td>{usuario.NombreUsuario}</td>
                <td>{formatearFechaHora(usuario.HoraIngreso)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>No Asistieron</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Curso</th>
              <th scope="col">Componente</th>
              <th scope="col">Sesion</th>
              <th scope="col">Documento</th>
              <th scope="col">Usuario</th>
              <th scope="col">Fecha/Hora Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {noAsistentes.map((usuario) => (
              <tr key={usuario.IdUsuario}>
                <td>{usuario.NombreCurso}</td>
                <td>{usuario.NombreComponente}</td>
                <td>{usuario.IdSesion}</td>
                <td>{usuario.Identificacion}</td>
                <td>{usuario.NombreUsuario}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
