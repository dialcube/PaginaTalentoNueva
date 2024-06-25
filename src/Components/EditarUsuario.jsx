import React from 'react'

export default function EditarUsuario() {
  return (
    <div>
      <h2>Edición de Usuarios</h2>
        <form action="/update" method="POST">
        <div class="mb-3">
          <label for="id" class="form-label">
            Id
          </label>
          <input
            type="number"
            class="form-control"
            name="id"
            id="id"
           disabled
          />
        </div>
        <div class="mb-3">
          <label for="cedula" class="form-label">
            Cedula
          </label>
          <input
            type="number"
            class="form-control"
            name="cedula"
            id="cedula"
          
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
            <option value="P">Docente</option>
          </select>{" "}
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
           
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
        <a href="/usuarios" class="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    
    </div>
  )
}
