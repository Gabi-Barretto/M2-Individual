function Calc(vlr) {
    
    let number = vlr.value;
    let array = number.split("");
    console.log(number);
    console.log(array);
    let soma = 0;
    if (number > 0){
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) >= 0 && Number(array[i]) <= 9) {
            soma += Number(array[i]);
        }
    }
    document.getElementById("result").innerHTML ="A soma dos dígitos é: " + soma;
    }
    else
    {
        document.getElementById("result").innerHTML ="Digite um número positivo";
    }
}