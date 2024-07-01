import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function CrearUsuario() {
  const navigate = useNavigate();
  const url = 'http://localhost:8080/usuario/crear';

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [identificacion, setIdentificacion] = useState(''); // Estado inicial como string
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Convertir identificacion a número (si es necesario)
      const identificacionDecimal = parseFloat(identificacion);

      // Validar que identificacionDecimal sea un número válido antes de enviar
      if (isNaN(identificacionDecimal)) {
        alert('El número de identificación no es válido');
        return;
      }

      // Realizar la solicitud POST al backend con los datos del formulario
      const response = await axios.post(url, {
        Tipo_Id: tipoDocumento,
        Identificacion: identificacionDecimal, // Enviar como número decimal
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Rol: rol,
        Password:identificacion
      });

      console.log('Respuesta del servidor:', response.data);

      // Limpiar los campos del formulario después de enviarlos
      setTipoDocumento('');
      setIdentificacion('');
      setNombres('');
      setApellidos('');
      setEmail('');
      setRol('');

      // Mostrar mensaje de éxito o redirigir a otra página
      alert('Usuario creado exitosamente!');
	    navigate("../talentomejorada/usuarios");
    } catch (error) {
      console.error('Error al crear usuario:', error);
      // Mostrar mensaje de error al usuario
      alert('Error al crear usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Creación de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Tipo_Id" className="form-label">
            Tipo Documento
          </label>
          <select
            className="form-control"
            id="Tipo_Id"
            name="Tipo_Id"
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
          >
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>
            <option value="CC">Cedula de Ciudadania</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cedula de Extrangeria</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Identificacion" className="form-label">
            Documento
          </label>
          <input
            type="text" // Mantener tipo text para manejar como string
            className="form-control"
            name="Identificacion"
            id="Identificacion"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            placeholder="Ingrese Documento"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Nombres" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className="form-control"
            name="Nombres"
            id="Nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            placeholder="Ingrese Nombres"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Apellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            name="Apellidos"
            id="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Ingrese Apellidos"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rol" className="form-label">
            Rol
          </label>
          <select
            className="form-control"
            id="rol"
            name="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="" disabled>
              Seleccione un rol
            </option>
            <option value="E">Estudiante</option>
            <option value="A">Administrador</option>
            <option value="D">Docente</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <a href="talentomejorada/usuarios" className="btn btn-outline-danger">
          Cancelar
        </a>
        {/* Opcional: Cancelar la creación */}
        {/* <a href="/usuarios" className="btn btn-outline-danger">
          Cancelar
        </a> */}
      </form>
    </div>
  );
}
