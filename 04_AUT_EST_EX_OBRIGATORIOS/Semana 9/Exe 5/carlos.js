
function Calc(v1,v2){
    const start = parseInt(v1.value);
    const end = parseInt(v2.value);

    console.log(start);
    console.log(end);

    document.getElementById("result").innerHTML =`Os primos entre ${start} e ${end} são: <br>`;

    // looping do primeiro número ate o final.
    for (let i = start; i <= end; i++) {
        let flag = 0;

        // looping de 2 até o input 
        for (let j = 2; j < i; j++) {
            //console.log("analisando: ", i);
            //console.log(j);
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // se o número é maior que um e nao é divisivel por nenhum outro número então é primo.
        if (i > 1 && flag == 0) {
            //console.log(i);
            document.getElementById("result").innerHTML +=`${i}<br>`;
        }
    }
}