import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adicionar from "../Img/Adicionar.svg";

export default function Usuarios() {
  const navigate = useNavigate();
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
              <td>16456789</td>
              <td>usuario1 </td>
              <td>Apellido 1</td>
              <td>Email 1</td>
              <td>Admin</td>
              <td>
                <a
                  // href="/editarusuario/<%= user.id %>"
                  href="/editarusuario"
                  class="btn btn-outline-success"
                >
                  Editar
                </a>
                <a
                  href="/eliminarusuario/<%= user.id %>"
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
