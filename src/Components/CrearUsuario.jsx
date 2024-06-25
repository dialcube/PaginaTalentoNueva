import React from "react";

export default function CrearUsuario() {
  return (
    <div>
      <h2>Creacion de Usuarios</h2>
      <form action="/save" method="POST">
        <div class="mb-3">
          <label for="cedula" class="form-label">
            Cedula
          </label>
          <input
            type="number"
            class="form-control"
            name="cedula"
            id="cedula"
            placeholder="Ingrese Cedula"
          />
        </div>
        <div class="mb-3">
          <label for="nombres" class="form-label">
            Nombres
          </label>
          <input
            type="text"
            class="form-control"
            name="nombres"
            id="nombres"
            placeholder="Ingrese Nombres"
          />
        </div>
        <div class="mb-3">
          <label for="apellidos" class="form-label">
            Apellidos
          </label>
          <input
            type="text"
            class="form-control"
            name="apellidos"
            id="apellidos"
            placeholder="Ingrese Apellidos"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="Ingrese Email"
          />
        </div>
        <div class="mb-3">
          <label for="rol" class="form-label">
            Rol
          </label>
          <select className="form-control" id="rol" name="rol"  value="">
            <option value="" disabled>
              Seleccione un rol
            </option>
            <option value="E">Estudiante</option>
            <option value="A">Administrador</option>
            <option value="P">Profesor</option>
          </select>{" "}
        </div>

        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
        <a href="/usuarios" class="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    </div>
  );
}
