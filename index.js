const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');

dotenv.config();


const app = express();
const port = process.env.PORT || 4000; 


connectDB();


app.use(cors()); 
app.use(express.json()); 


app.use('/cliente', require('./src/routes/clienteRoute')); 
app.use('/etapa', require('./src/routes/etapaRoute.js'));
app.use('/proyecto', require('./src/routes/proyectoRoute.js'));
app.use('/tipoProyecto', require('./src/routes/tipoProyectoRoute.js'));


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
