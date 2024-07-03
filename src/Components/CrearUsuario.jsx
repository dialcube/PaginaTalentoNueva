import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function CrearUsuario() {
  const navigate = useNavigate();
  // const url = 'http://localhost:8080/usuario/crear';
  const url = process.env.REACT_APP_API_BACK + "/usuario/crear";

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [identificacion, setIdentificacion] = useState(''); 
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que todos los campos estén llenos
    const newErrors = {};
    if (!tipoDocumento) newErrors.tipoDocumento = 'El tipo de documento es obligatorio';
    if (!identificacion) newErrors.identificacion = 'El número de identificación es obligatorio';
    if (!nombres) newErrors.nombres = 'Los nombres son obligatorios';
    if (!apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!email) newErrors.email = 'El correo electrónico es obligatorio';
    if (!rol) newErrors.rol = 'El rol es obligatorio';

    // Actualizar los errores en el estado
    setErrors(newErrors);

    // Si hay errores, no enviar el formulario
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Convertir identificacion a número (si es necesario)
    const identificacionDecimal = parseFloat(identificacion);

    // Validar que identificacionDecimal sea un número válido antes de enviar
    if (isNaN(identificacionDecimal)) {
      alert('El número de identificación no es válido');
      return;
    }

    try {
      // Realizar la solicitud POST al backend con los datos del formulario
      const response = await axios.post(url, {
        Tipo_Id: tipoDocumento,
        Identificacion: identificacionDecimal, // Enviar como número decimal
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Rol: rol,
        Password: identificacion
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
            className={`form-control ${errors.tipoDocumento ? 'is-invalid' : ''}`}
            id="Tipo_Id"
            name="Tipo_Id"
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            required
          >
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>
            <option value="CC">Cedula de Ciudadania</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cedula de Extrangeria</option>
          </select>
          {errors.tipoDocumento && <div className="invalid-feedback">{errors.tipoDocumento}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Identificacion" className="form-label">
            Documento
          </label>
          <input
            type="text"
            className={`form-control ${errors.identificacion ? 'is-invalid' : ''}`}
            name="Identificacion"
            id="Identificacion"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            required
            placeholder="Ingrese Documento"
          />
          {errors.identificacion && <div className="invalid-feedback">{errors.identificacion}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Nombres" className="form-label">
            Nombres
          </label>
          <input
            type="text"
            className={`form-control ${errors.nombres ? 'is-invalid' : ''}`}
            name="Nombres"
            id="Nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
            placeholder="Ingrese Nombres"
          />
          {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Apellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className={`form-control ${errors.apellidos ? 'is-invalid' : ''}`}
            name="Apellidos"
            id="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
            placeholder="Ingrese Apellidos"
          />
          {errors.apellidos && <div className="invalid-feedback">{errors.apellidos}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingrese Email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="rol" className="form-label">
            Rol
          </label>
          <select
            className={`form-control ${errors.rol ? 'is-invalid' : ''}`}
            id="rol"
            name="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
          >
            <option value="" disabled>
              Seleccione un rol
            </option>
            <option value="E">Estudiante</option>
            <option value="A">Administrador</option>
            <option value="D">Docente</option>
          </select>
          {errors.rol && <div className="invalid-feedback">{errors.rol}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <a href="talentomejorada/usuarios" className="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    </div>
  );
}
