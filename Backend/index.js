const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const usuarios = require('./routes/usuario');
const sesiones = require('./routes/sesiones');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/usuario', usuarios);
app.use('/sesiones', sesiones);

module.exports = app;



