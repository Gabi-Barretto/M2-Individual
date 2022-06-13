function fibonacci(nmr){

    let termo = nmr.value;

    if (termo > 0) { //aqui preenchemos um array com os valores da sequencia de fibonacci!
        var serie = [];
        serie[0] = 1;
        serie[1] = 1;
        for (var i = 2; i < termo; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
    }
    document.getElementById("resultado").innerHTML = 'A série de Fibonacci até o enésimo termo é: ' + serie;
}