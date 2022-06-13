function Calc(vlr) {

    let number = parseInt(vlr.value / 100);

    console.log(number);

    if (1<=number && number<=9)
    { 
        number = number % 2;
        console.log(number);

        if(number != 0)
        {
            document.getElementById("result").innerHTML = "O primeiro digito é Ímpar";
            console.log("ímpar");
        }
        else 
        {
            document.getElementById("result").innerHTML = "O primeiro digito é Par";
            console.log("par");
        }
    
    }
    else
    {
        document.getElementById("result").innerHTML = "O número precisa ter 3 digitos!";
    }

}