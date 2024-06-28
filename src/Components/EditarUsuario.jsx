import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function EditarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la URL
  const url = `http://localhost:8080/usuario/editar/${id}`;

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');

  // Cargar los datos del usuario al montar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/usuario/${id}`);
        const userData = response.data;
        setTipoDocumento(userData.Tipo_Id);
        setIdentificacion(userData.Identificacion);
        setNombres(userData.Nombres);
        setApellidos(userData.Apellidos);
        setEmail(userData.Email);
        setRol(userData.Rol); // Configurar el estado 'rol' con el valor correcto del usuario
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Identificacion") {
      setIdentificacion(value);
    } else if (name === "Tipo_Id") {
      setTipoDocumento(value);
    } else if (name === "Nombres") {
      setNombres(value);
    } else if (name === "Apellidos") {
      setApellidos(value);
    } else if (name === "Email") {
      setEmail(value); // Actualizar el estado del email
    } else if (name === "Rol") {
      setRol(value);
    }
  };

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

      // Realizar la solicitud PUT al backend con los datos del formulario
      const response = await axios.put(url, {
        Tipo_Id: tipoDocumento,
        Identificacion: identificacionDecimal, // Enviar como número decimal
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Rol: rol
      });

      console.log('Respuesta del servidor:', response.data);

      // Mostrar mensaje de éxito o redirigir a otra página
      alert('Usuario actualizado exitosamente!');
      navigate("/usuarios");
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      // Mostrar mensaje de error al usuario
      alert('Error al actualizar usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Edición de Usuario</h2>
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
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Identificacion" className="form-label">
            Documento
          </label>
          <input
            type="text"
            className="form-control"
            name="Identificacion"
            id="Identificacion"
            value={identificacion}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Ingrese Apellidos"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="Email"
            id="Email"
            value={email}
            onChange={handleChange}
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
            name="Rol"
            value={rol} // Usar el estado 'rol' para seleccionar el valor actual del usuario
            onChange={handleChange}
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
        {/* Opcional: Cancelar la edición */}
        <a href="/usuarios" className="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    </div>
  );
}
