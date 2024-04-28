function determinarMedioTransporte() {
    var distancia = parseInt(document.getElementById("distancia").value);
    var resultado = document.getElementById("resultado");

    if (distancia <= 1000) {
        resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: pie";
    } else if (distancia <= 10000) {
        resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: bicicleta";
    } else if (distancia <= 30000) {
        resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: colectivo";
    } else if (distancia <= 100000) {
        resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: auto";
    } else {
        resultado.textContent = "Para una distancia de " + distancia + " metros, el medio de transporte apropiado es: avión";
    }
}

function encontrarNumeroMasGrande() {
    var numeros = [10, 5, 25, 8, 15];
    var numeroMasGrande = numeros[0];

    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeroMasGrande) {
            numeroMasGrande = numeros[i];
        }
    }

    document.getElementById("numeroMasGrande").textContent = "El número más grande en el array es: " + numeroMasGrande;
}
