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
            <option value="DWA">Desarrollo Web Full Stack Avanzado</option>
            <option value="IAA">Inteligencia Artificial Avanzado</option>
          </select>{" "}
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
          <div class="mb-3">
            <label for="nombre" class="form-label">
              Nmbre Sesion
            </label>
            <input
              type="number"
              class="form-control"
              name="nombre"
              id="nombre"
              placeholder="Ingrese nombre sesion"
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
            <label for="fecha" class="form-label">
              Fecha
            </label>
            <input
              type="checkbox"
              class="form-control"
              name="fecha"
              id="fecha"
              
            />
          </div>
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
