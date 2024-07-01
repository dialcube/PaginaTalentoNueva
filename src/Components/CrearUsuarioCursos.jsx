import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function CrearUsuarioCursos() {
  const navigate = useNavigate();
  const urlCrearUsuarioCurso = 'http://localhost:8080/usuariocursos/crear';
  const urlCursos = 'http://localhost:8080/curso'; // Endpoint para obtener cursos
  const urlUsuarios = 'http://localhost:8080/usuario'; // Endpoint para obtener usuarios

  const [cursos, setCursos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [idcurso, setIdCurso] = useState('');
  const [idusuario, setIdUsuario] = useState('');
  const [activo, setActivo] = useState('');

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const response = await axios.get(urlUsuarios);
      // Filtrar usuarios por rol 'E' en el frontend
      const usuariosFiltrados = response.data.results.filter(Usuarios => Usuarios.Rol === 'E');
      setUsuarios(usuariosFiltrados);
    } catch (error) {
      console.error('Error fetching Usuarios:', error);
    }
  };

  useEffect(() => {
    getCursos();
  }, []);

  const getCursos = async () => {
    try {
      const response = await axios.get(urlCursos);
      setCursos(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
    } catch (error) {
      console.error('Error fetching Usuarios:', error);
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const now = new Date().toISOString().split('T')[0];
      const response = await axios.post(urlCrearUsuarioCurso, {
        IdCurso: idcurso,
        IdUsuario: idusuario,
        FechaInscripcion: now,
        Activo: activo,
      });

      console.log('Respuesta del servidor:', response.data);

      setIdCurso('');
      setIdUsuario('');
      setActivo('');

      alert('Usuario curso creado exitosamente!');
      navigate("../talentomejorada/usuariocursos");
    } catch (error) {
      console.error('Error al crear usuario curso:', error);
      alert('Error al crear usuario curso. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div>
      <h2>Creación de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="IdCurso" className="form-label">
            Curso
          </label>
          <select
            className="form-select"
            id="IdCurso"
            value={idcurso}
            onChange={(e) => setIdCurso(e.target.value)}
          >
            <option value="">Seleccione un curso</option>
            {cursos.map(curso => (
              <option key={curso.IdCurso} value={curso.IdCurso}>
                {curso.Nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="IdUsuario" className="form-label">
            Usuario
          </label>
          <select
            className="form-select"
            id="IdUsuario"
            value={idusuario}
            onChange={(e) => setIdUsuario(e.target.value)}
          >
            <option value="">Seleccione un usuario</option>
            {usuarios.map(usuario => (
              <option key={usuario.IdUsuario} value={usuario.IdUsuario}>
                {usuario.Nombres}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <button type="button" className="btn btn-outline-danger" onClick={() => navigate("../talentomejorada/usuariocursos")}>
          Cancelar
        </button>
      </form>
    </div>
  );
}
