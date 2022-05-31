function calcular(){
    var people = document.getElementById("number").value;
    var time = document.getElementById("day").value;
    if (time == "diurno"){
        var price = 200;
        if (people >= 50){           
            price = (200*0.6);
            var total = price * people;
            document.getElementById("resultado").innerHTML = "O valor da passagem será de " + price + " reais por pessoa. Total: " + total;
        }
        else {
            var total = price * people;
            document.getElementById("resultado").innerHTML = "O valor da passagem será de " + price + " reais por pessoa. Total: " + total;
        }
    }
    else {
        var price = 100;
        if (people >= 50){
            price = (100*0.8)
            var total = price * people;
            document.getElementById("resultado").innerHTML = "O valor da passagem será de " + price+ " reais por pessoa. Total: " + total;
        }
        else {
            var total = price * people;
            document.getElementById("resultado").innerHTML = "O valor da passagem será de " + price + " reais por pessoa. Total: " + total;
        }
    };
};