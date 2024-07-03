import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditarUsuario() {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del usuario de los parámetros de la URL
  const url = `${process.env.REACT_APP_API_BACK}/usuario/editar/${id}`;

  const [tipoDocumento, setTipoDocumento] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BACK}/usuario/${id}`);
        const userData = response.data;
        setTipoDocumento(userData.Tipo_Id);
        setIdentificacion(userData.Identificacion);
        setNombres(userData.Nombres);
        setApellidos(userData.Apellidos);
        setEmail(userData.Email);
        setRol(userData.Rol);
        setPassword(userData.Password);
        setConfirmPassword(userData.Password);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
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
      setEmail(value);
    } else if (name === "Rol") {
      setRol(value);
    } else if (name === "Password") {
      setPassword(value);
    } else if (name === "ConfirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!tipoDocumento) newErrors.tipoDocumento = "El tipo de documento es obligatorio";
    if (!identificacion) newErrors.identificacion = "El número de identificación es obligatorio";
    if (!nombres) newErrors.nombres = "Los nombres son obligatorios";
    if (!apellidos) newErrors.apellidos = "Los apellidos son obligatorios";
    if (!email) newErrors.email = "El correo electrónico es obligatorio";
    if (!rol) newErrors.rol = "El rol es obligatorio";
    if (!password) newErrors.password = "La contraseña es obligatoria";
    if (password !== confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const identificacionDecimal = parseFloat(identificacion);

      if (isNaN(identificacionDecimal)) {
        alert("El número de identificación no es válido");
        return;
      }

      const response = await axios.put(url, {
        Tipo_Id: tipoDocumento,
        Identificacion: identificacionDecimal,
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Rol: rol,
        Password: password,
      });

      console.log("Respuesta del servidor:", response.data);

      alert("Usuario actualizado exitosamente!");
      navigate("../talentomejorada/usuarios");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      alert("Error al actualizar usuario. Por favor, intenta nuevamente.");
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
            className={`form-control ${errors.tipoDocumento ? "is-invalid" : ""}`}
            id="Tipo_Id"
            name="Tipo_Id"
            value={tipoDocumento}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Seleccione un tipo de documento
            </option>
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
          </select>
          {errors.tipoDocumento && <div className="invalid-feedback">{errors.tipoDocumento}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Identificacion" className="form-label">
            Documento
          </label>
          <input
            type="text"
            className={`form-control ${errors.identificacion ? "is-invalid" : ""}`}
            name="Identificacion"
            id="Identificacion"
            value={identificacion}
            onChange={handleChange}
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
            className={`form-control ${errors.nombres ? "is-invalid" : ""}`}
            name="Nombres"
            id="Nombres"
            value={nombres}
            onChange={handleChange}
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
            className={`form-control ${errors.apellidos ? "is-invalid" : ""}`}
            name="Apellidos"
            id="Apellidos"
            value={apellidos}
            onChange={handleChange}
            required
            placeholder="Ingrese Apellidos"
          />
          {errors.apellidos && <div className="invalid-feedback">{errors.apellidos}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="Email"
            id="Email"
            value={email}
            onChange={handleChange}
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
            className={`form-control ${errors.rol ? "is-invalid" : ""}`}
            id="rol"
            name="Rol"
            value={rol}
            onChange={handleChange}
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
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="Password"
            id="Password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Ingrese Password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="ConfirmPassword" className="form-label">
            Confirmar Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            name="ConfirmPassword"
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirme Password"
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <a href="../usuarios" className="btn btn-outline-danger">
          Cancelar
        </a>
      </form>
    </div>
  );
}
