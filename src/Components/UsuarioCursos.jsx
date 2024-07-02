import React, { useEffect, useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";

export default function UsuarioCursos() {
  const navigate = useNavigate();
  // const url = "http://localhost:8080/usuariocursos/";
  const [usuarios, setUsuarioCursos] = useState([]);

  const url = process.env.REACT_APP_API_BACK + "/usuariocursos/";

  // useEffect para llamar a getSesiones cuando el componente se monta
  const getUsuarioCursos = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setUsuarioCursos(response.data.results);
    } catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }, [url]);

  useEffect(() => {
    getUsuarioCursos();
  }, [getUsuarioCursos]);

  const validar = (ev) => {
    ev.preventDefault(); // Evito que el formulario se recargue al presionar el botón
    navigate("../crearusuariocursos");
  };

  return (
    <div>
      <h2> Curso Estudiante</h2>
      <button className="btn btn-outline-primary mt-4" onClick={validar}>
        <img src={Adicionar} alt="Gear Icon" className="icono bg-blue-300" />
      </button>
      <div className="table-responsive">
        <table className="table table-stripped table-hover">
          <thead>
            <tr>
              <th scope="col">IdUsuario</th>
              <th scope="col">Documento</th>
              <th scope="col">Nombres</th>
              <th scope="col">IdCurso</th>
              <th scope="col">Nombre Curso</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.IdUsuario}>
                <td>{usuario.IdUsuario}</td>
                <td>{usuario.Identificacion}</td>
                <td>{usuario.NombreUsuario}</td>
                <td>{usuario.IdCurso}</td>
                <td>{usuario.Nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
