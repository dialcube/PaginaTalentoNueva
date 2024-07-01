import React, { useEffect, useState,useCallback } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const Calificaciones = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editNotes, setEditNotes] = useState({});

  const url = process.env.REACT_APP_API_BACK + "/notascurso/";

  // useEffect para llamar a getSesiones cuando el componente se monta
  const fetchNotasCurso = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setStudents(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
} catch (error) {
      console.error("Error fetching usuarios:", error);
    }
  }, [url]);

  useEffect(() => {
    fetchNotasCurso();
  }, [fetchNotasCurso]);


  // useEffect(() => {
  //   fetchNotasCurso();
  // }, []);

  // const fetchNotasCurso = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/notascurso/");
  //     setStudents(response.data.results); // Asumo que el formato de respuesta tiene un campo 'results'
  //   } catch (error) {
  //     console.error("Error fetching notas curso:", error);
  //   }
  // };

  const handleEdit = (idx) => {
    setEditIndex(idx);
    setEditNotes({
      nota1: students[idx].nota1,
      nota2: students[idx].nota2,
      nota3: students[idx].nota3,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    //setEditNotes({ ...editNotes, [name]: value });
    const newValue = Math.min(Math.max(parseFloat(value), 0), 5);
    setEditNotes({ ...editNotes, [name]: newValue });
  };

  const handleSave = async (idx) => {
    const studentToUpdate = students[idx];
    studentToUpdate.nota1 = parseFloat(editNotes.nota1);
    studentToUpdate.nota2 = parseFloat(editNotes.nota2);
    studentToUpdate.nota3 = parseFloat(editNotes.nota3);

    try {
      await axios.put(
        `${process.env.REACT_APP_API_BACK}/notascurso/editar/${studentToUpdate.IdCurso}/${studentToUpdate.IdComponente}/${studentToUpdate.IdUsuario}`,
        {
          nota1: studentToUpdate.nota1,
          nota2: studentToUpdate.nota2,
          nota3: studentToUpdate.nota3,
        }
      );
      setEditIndex(null);
      fetchNotasCurso(); // Recargar las notas del curso después de guardar
    } catch (error) {
      console.error("Error updating notas curso:", error);
    }
  };

  return (
    <div>
      <h3>Calificaciones Curso</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Curso</th>
            <th>Nombre Componente</th>
            <th>Identificación</th>
            <th>Nombre Usuario</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota Final</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={student.IdUsuario}>
              <td>{student.NombreCurso}</td>
              <td>{student.NombreComponente}</td>
              <td>{student.identificacion}</td>
              <td>{student.NombreUsuario}</td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="number"
                    name="nota1"
                    value={editNotes.nota1}
                    onChange={handleChange}
                    autoFocus // Mantener el foco en el input cuando se edita
                    style={{ width: "50px" }}
                    min="0"
                    max="5"
                  />
                ) : (
                  student.nota1
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="number"
                    name="nota2"
                    value={editNotes.nota2}
                    onChange={handleChange}
                    style={{ width: "50px" }}
                    min="0"
                    max="5"
                  />
                ) : (
                  student.nota2
                )}
              </td>
              <td>
                {editIndex === idx ? (
                  <input
                    type="number"
                    name="nota3"
                    value={editNotes.nota3}
                    onChange={handleChange}
                    style={{ width: "50px" }}
                    min="0"
                    max="5"
                  />
                ) : (
                  student.nota3
                )}
              </td>
              <td>{student.notafinal}</td>
              <td>
                {editIndex === idx ? (
                  <Button
                    variant="success"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSave(idx);
                    }}
                  >
                    Guardar
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEdit(idx);
                    }}
                  >
                    Editar
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Calificaciones;
