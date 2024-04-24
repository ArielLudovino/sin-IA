const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./functions'); 

const app = express();
const port = 8888;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public')); 

app.post('/procesar-seniales', (req, res) => {
    const seniales = req.body.seniales;
    const senialesArray = functions.getSeniales(seniales);
    const secuenciaCuadrantes = functions.calcularSecuenciaCuadrantes(senialesArray);
    const ciclosCompletos = functions.contarCiclosCompletos(secuenciaCuadrantes);
    const porcentajeN = functions.calcularPorcentajeCuadrante(secuenciaCuadrantes, 'N');
    const porcentajeE = functions.calcularPorcentajeCuadrante(secuenciaCuadrantes, 'E');
    const porcentajeS = functions.calcularPorcentajeCuadrante(secuenciaCuadrantes, 'S');
    const porcentajeO = functions.calcularPorcentajeCuadrante(secuenciaCuadrantes, 'O');

    res.json({
        secuenciaCuadrantes,
        ciclosCompletos,
        porcentajeN,
        porcentajeE,
        porcentajeS,
        porcentajeO
    });
}); 