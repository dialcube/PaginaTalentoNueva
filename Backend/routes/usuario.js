require('dotenv');
const express = require('express');
const connection = require('../connection');
const { response } = require('..');
const router = express.Router();

//Agregar usuario
router.post('/crear/usuario', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol } = req.body;    
    // Query para insertar un nuevo usuario
    const query = "INSERT INTO usuarios (Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";    
    // Valores a insertar
    const values = [Tipo_Id, Identificacion, Nombres, Apellidos, Email, Password, FechaNacimiento, Rol];    
    // Ejecutar la consulta
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error("Error al insertar usuario:", err);
            return res.status(500).json({ error: "Error al insertar usuario" });
        }        
        // Devolver la respuesta con el ID del usuario insertado
        const idUsuario = results.insertId;
        return res.status(200).json({ idUsuario, message: "Usuario insertado correctamente" });
    });
});

//Consultar Usuarios
router.get('/', (req, res)=>{
    var query = "SELECT * FROM usuarios";
    connection.query(query,(err, results)=>{
        if(!err){
            return res.status(200).json({results});
        }else{
            return res.status(500).json(err);
        }
    })
})


module.exports = router;