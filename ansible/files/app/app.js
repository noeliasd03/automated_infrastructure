const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuración de la base de datos
const connection = mysql.createConnection({
    host: '192.168.56.14',
    user: 'root',
    password: 'password',
    database: 'contactos',
});

connection.connect();

// Ruta para guardar datos
app.post('/guardar', (req, res) => {
    const { nombre, telefono } = req.body;
    const query = 'INSERT INTO usuarios (nombre, telefono) VALUES (?, ?)';

    connection.query(query, [nombre, telefono], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al guardar los datos' });
        }
        res.json({ message: 'Datos guardados correctamente' });
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor backend escuchando en http://192.168.56.13:3000');
});