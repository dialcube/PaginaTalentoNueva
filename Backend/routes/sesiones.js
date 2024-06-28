require('dotenv');
const express = require('express');
const connection = require('../connection');
const { response } = require('..');
const router = express.Router();

router.post('/crear/sesion', (req, res)=>{
    let sesion = req.body;
    query = "insert into curso_sesiones (idcurso,idsesion,idcomponente,fechasesion,horario,activa,nombresesion,descripcionsesion,linksesion,estado) value (?,?,?,?,?,?,?,?,?,?)";
})

router.get('/', (req, res)=>{
    var query = "SELECT * FROM curso_sesiones";
    connection.query(query,(err, results)=>{
        if(!err){
            return res.status(200).json({results});
        }else{
            return res.status(500).json(err);
        }
    })
})



module.exports = router;