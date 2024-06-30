import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";


export default function AsistenciasSesiones() {

  return (
    <div>
       
      <h2>Asistencias</h2>
      <br/>
      <h3 className="text-blue-600/100 ">Asistentes</h3>
      <table class="table table-stripped table-hover">
        <thead>
          <tr>
         
            <th scope="col">Cedula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Email</th>
            
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
          
            <td>16456789</td>
            <td>usuario1 </td>
            <td>Apellido 1</td>
            <td>Email 1</td>
                     
          </tr>
        </tbody>
      </table>

      <h3 className="text-blue-600/100 ">Ausentes</h3>
      <table class="table table-stripped table-hover">
        <thead>
          <tr>
         
            <th scope="col">Cedula</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Email</th>
            
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
          
            <td>1674848</td>
            <td>usuario2 </td>
            <td>Apellido 2</td>
            <td>Email 2</td>
                    
          </tr>
        </tbody>
      </table>

      <a href="../talentomejorada/Inicio" class="btn btn-outline-primary">
          Volver
        </a>
 
    </div>
  );
}
