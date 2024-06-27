import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";
import  { useEffect, useState } from "react";
import axios from 'axios';

export default function Usuarios() {
  const navigate = useNavigate();
  const url = 'http://localhost:8080/Usuario/';
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getSesiones();
  }, []);

  const getSesiones = async () => {
    try {
      const response = await axios.get(url);
      setUsuarios(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
    } catch (error) {
      console.error('Error fetching Usuarios:', error);
    }
  }

  const validar = (ev) => {
    ev.preventDefault(); //evito que el formlario se recargue al dar presionar el button
    navigate("/crearusuarios");
  };
  return (
    <div>
      {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      /> */}
      <button class="btn btn-outline-primary mt-4 " onClick={validar}>
      <img
                              src={Adicionar}
                              alt="Gear Icon"
                              className="icono bg-blue-300 "
                            />
      </button>
      <div className="table-responsive">
        <table class="table table-stripped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Cedula</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col">Acciones Usuario</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.IdUsuario}>
                <td>{usuario.IdUsuario}</td>
                <td>{usuario.Identificacion}</td>
                <td>{usuario.Nombres}</td>
                <td>{usuario.Apellidos}</td>
                <td>{usuario.Email}</td>
                <td>{usuario.Rol}</td>
                <td>
                  <a
                    href={`/editarsesion/${usuario.IdUsuario}`}
                    className="btn btn-outline-success"
                  >
                    Editar
                  </a>
                  <a
                    href={`/eliminarsesion/${usuario.IdUsuario}`}
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
