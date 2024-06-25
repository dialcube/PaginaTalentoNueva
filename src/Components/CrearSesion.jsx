import React from "react";

export default function CrearSesion() {
  return (
    <div>
      <h2>Creacion de Sesion</h2>
      <form action="/save" method="POST">
        <div class="mb-3">
          <label for="rol" class="form-label">
            Curso
          </label>
          <select className="form-control" id="curso" name="curso" value="">
            <option value="" disabled>
              Seleccione Curso
            </option>
            <option value="DWA">Desarrollo Web Full Stack Intermedio</option>
            <option value="IAA">Inteligencia Artificial Intermedio</option>
          </select>{" "}
        </div>

        <div>
          <label for="rol" class="form-label">
            Componente
          </label>
          <select
            className="form-control"
            id="componente"
            name="componente"
            value=""
          >
            <option value="" disabled>
              Seleccione Componente
            </option>
            <option value="DWA">Componente Tecnico</option>
            <option value="IAA">Componente Ingles</option>
          </select>{" "}
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">
            Nombre Sesion
          </label>
          <input
            type="text"
            class="form-control"
            name="nombre"
            id="nombre"
            placeholder="Ingrese nombre sesion"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Descripcion Sesion
          </label>
          <input
            type="text"
            class="form-control"
            name="descripcion"
            id="descripcion"
            placeholder="Ingrese descripcion sesion"
          />
        </div>
        <div class="mb-3">
          <label for="fecha" class="form-label">
            Fecha
          </label>
          <input
            type="date"
            class="form-control"
            name="fecha"
            id="fecha"
            placeholder="Ingrese fecha sesion"
          />
        </div>
        <div class="mb-3">
          <label>
            <input type="checkbox" id="activa" value="activa" /> Activa
          </label>
          <br />
        </div>

        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
        <a href="/sesiones" class="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    </div>
  );
}
