var v1, v2;


function lerNumeros() {

    v1 = parseFloat(document.getElementById("valori").value);
    v2 = parseFloat(document.getElementById("valorf").value);

}

function exibirResultado(result) {
    var f = document.forms["formu"]["valori", "valorf"].value;
    
    if (f == "") {
        alert("[ERRO] Nenhum campo deve estar vazio, verifique e tente novamente! ")
    }else{
    document.getElementById("res").value = result;
}
}


function somar() {
    lerNumeros();
    exibirResultado(v1 + v2);
    
}

function subtrair() {
    lerNumeros();
    exibirResultado(v1 - v2);

}

function multiplicar() {
    lerNumeros();
    exibirResultado(v1 * v2);

}

function dividir() {
    lerNumeros();
    exibirResultado(v1 / v2);

}



