function getSeniales(input) {
    const signals = [];
    let signal = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '_') {
            const num = Number(signal);
            if (!isNaN(num) && num >= 0 && num < 360) {
                signals.push(num);
            }
            signal = '';
        } else {
            signal += input[i];
        }
    }
    const num = Number(signal);
    if (!isNaN(num) && num >= 0 && num < 360) {
        signals.push(num);
    }
    return signals;
}

function determinarCuadrante(grado) {
    let cuadrante = '';
    if (grado >= 0 && grado < 90) {
        cuadrante = 'N';
    } else if (grado >= 90 && grado < 180) {
        cuadrante = 'E';
    } else if (grado >= 180 && grado < 270) {
        cuadrante = 'S';
    } else {
        cuadrante = 'O';
    }
    return cuadrante;
}

function calcularSecuenciaCuadrantes(seniales) {
    let secuencia = '';
    for (let i = 0; i < seniales.length; i++) {
        secuencia += determinarCuadrante(seniales[i]) + ' ';
    }
    return secuencia.trim();
}

function contarCiclosCompletos(secuencia) {
    let joinedSequence = '';
    for (let i = 0; i < secuencia.length; i++) {
        joinedSequence += secuencia[i];
    }
    const clockwiseCycles = (joinedSequence.match(/NESO|ESON|SONE|ONES/g) || []).length;
    const anticlockwiseCycles = (joinedSequence.match(/SENO|ENOS|NOSE|OSEN/g) || []).length;
    return clockwiseCycles + anticlockwiseCycles;
}

function calcularPorcentajeCuadrante(secuencia, cuadrante) {
    let totalCuadrantes = 0;
    let ocurrenciasCuadrante = 0;
    for (let i = 0; i < secuencia.length; i++) {
        if (secuencia[i] === cuadrante) {
            ocurrenciasCuadrante++;
        }
        totalCuadrantes++;
    }
    return (ocurrenciasCuadrante / totalCuadrantes) * 100;
}
