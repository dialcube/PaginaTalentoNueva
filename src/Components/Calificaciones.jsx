import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const Calificaciones = () => {
  const [students, setStudents] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez", nota1: 4, nota2: 5, nota3: 6 },
    {
      id: 2,
      nombre: "Ana",
      apellido: "García",
      nota1: 3,
      nota2: 3,
      nota3: 2.5,
    },
    // Agrega más estudiantes aquí
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editNotes, setEditNotes] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditNotes({
      nota1: students[index].nota1,
      nota2: students[index].nota2,
      nota3: students[index].nota3,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditNotes({ ...editNotes, [name]: value });
  };

  const handleSave = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = {
      ...updatedStudents[index],
      ...editNotes,
      nota1: parseFloat(editNotes.nota1),
      nota2: parseFloat(editNotes.nota2),
      nota3: parseFloat(editNotes.nota3),
    };
    setStudents(updatedStudents);
    setEditIndex(null);
  };

  const calculateAverage = (nota1, nota2, nota3) => {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2);
  };

  return (
    <div>
      <h3>Calificaciones Curso</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Definitiva</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{student.nombre}</td>
              <td>{student.apellido}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    name="nota1"
                    value={editNotes.nota1}
                    onChange={handleChange}
                  />
                ) : (
                  student.nota1
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    name="nota2"
                    value={editNotes.nota2}
                    onChange={handleChange}
                  />
                ) : (
                  student.nota2
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    name="nota3"
                    value={editNotes.nota3}
                    onChange={handleChange}
                  />
                ) : (
                  student.nota3
                )}
              </td>
              <td>
                {calculateAverage(student.nota1, student.nota2, student.nota3)}
              </td>
              <td>
                {editIndex === index ? (
                  <Button variant="success" onClick={() => handleSave(index)}>
                    Guardar
                  </Button>
                ) : (
                  <Button variant="primary" onClick={() => handleEdit(index)}>
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
