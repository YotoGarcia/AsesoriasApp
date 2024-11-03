const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Conexion a base de datos
connectDB();


//Middlware
app.use(express.json({ extented: flase}));


//Rutas
app.use()



