import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";

export default function Sesiones() {
  const navigate = useNavigate();
  const validar = (ev) => {
    ev.preventDefault(); //evito que el formlario se recargue al dar presionar el button
    navigate("/crearsesiones");
  };
  return (
    <div>

      <h3> Gestion Sesiones</h3>
    
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
              <th scope="col">Curso</th>
              <th scope="col">Componente</th>
              <th scope="col">Nombre Sesion</th>
              <th scope="col">Fecha</th>              
              <th scope="col">Acciones Usuario</th>
            </tr>
          </thead>
          <tbody>
            {/* <% results.forEach((user)=> { %>
          <tr>
            <th scope="row"><%= user.idUsuario %></th>
            <td><%= user.Identificacion %></td>
            <td><%= user.nombres %></td>
            <td><%= user.apellidos %></td>
            <td><%= user.email %></td>           
            <td><%= user.roll %></td>
            <td>
                <a href="/editarusuario/<%= user.id %>" class="btn btn-outline-success">Editar</a>
                <a href="/eliminarusuario/<%= user.id %>" class="btn btn-outline-danger" onclick="return confirm('¿Estás seguro de que deseas eliminar este usuario?');">Eliminar</a>
            </td>
          </tr>
          <%})%> */}

            <tr>
              <td>1</td>
              <td>Desarrollo Web Full Stack Intermedio</td>
              <td>Componente Tecnico </td>
              <td>Sesion 1</td>
              <td>30/06/2024</td>
            
            
              <td>
                <a
                  // href="/editarusuario/<%= user.id %>"
                  href="/editarsesion"
                  class="btn btn-outline-success"
                >
                  Editar
                </a>
                <a
                  href="/eliminarsesion/<%= user.id %>"
                  class="btn btn-outline-danger"
                  onclick="return confirm('¿Estás seguro de que deseas eliminar este usuario?');"
                >
                  Eliminar
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Desarrollo Web Full Stack Intermedio</td>
              <td>Componente Ingles </td>
              <td>Sesion 10</td>
              <td>15/07/2024</td>
              
              <td>
                <a
                  // href="/editarusuario/<%= user.id %>"
                  href="/editarsesion"
                  class="btn btn-outline-success"
                >
                  Editar
                </a>
                <a
                  href="/eliminarsesion/<%= user.id %>"
                  class="btn btn-outline-danger"
                  onclick="return confirm('¿Estás seguro de que deseas eliminar este usuario?');"
                >
                  Eliminar
                </a>
              </td>
            </tr>
 
          </tbody>
        </table>
      </div>
    </div>
  );
}
