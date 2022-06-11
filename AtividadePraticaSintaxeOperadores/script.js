function calculo(n1, n2) {
   if(!n1 || !n2) return 'Defina números maior que 0!';

    const frase1 = geraPrimeiraFrase(n1, n2);
    const frase2 = geraSegundaFrase(n1, n2);

    return `${frase1} ${frase2}`
}


function geraPrimeiraFrase(n1, n2) {
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não';
    }
    
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function geraSegundaFrase(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10}, que é 10 ${resultado20} que é 20.`
}


console.log(calculo(8, 10));
