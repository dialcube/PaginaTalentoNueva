import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";

export default function Usuarios() {
  const navigate = useNavigate();
  const url = 'http://localhost:8080/usuario/';
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const response = await axios.get(url);
      setUsuarios(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
    } catch (error) {
      console.error('Error fetching Usuarios:', error);
    }
  }

  const validar = (ev) => {
    ev.preventDefault(); // Evito que el formulario se recargue al presionar el botón
    navigate("/crearusuarios");
  };

  const eliminarUsuario = async (idUsuario) => {
    try {
      const response = await axios.delete(`http://localhost:8080/usuario/${idUsuario}`);
      console.log('Usuario eliminado:', response.data);
      // Actualizar la lista de usuarios después de la eliminación
      getUsuarios();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div>
      <button className="btn btn-outline-primary mt-4" onClick={validar}>
        <img
          src={Adicionar}
          alt="Gear Icon"
          className="icono bg-blue-300"
        />
      </button>
      <div className="table-responsive">
        <table className="table table-stripped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Documento</th>
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
                    href={`/editarusuario/${usuario.IdUsuario}`}
                    className="btn btn-outline-success"
                  >
                    Editar
                  </a>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                        eliminarUsuario(usuario.IdUsuario);
                        window.location.reload(); // Recargar la página después de eliminar
                      }
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
