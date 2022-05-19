

function mostrarPainel(){
		
	  document.getElementById("resultadoFinal").innerHTML = ``;
      var valor = prompt("Digite o valor a sacar desejado", "0");
	  if (valor >= 0){
		  calcularNota100(valor);
	  }
	  else {
		  alert("Digite um valor positivo!");
		  mostrarPainel()
	  }
}

function calcularNota100(vlr){
	var notaCem = Math.floor(vlr/100);
	var resto = vlr % 100;
	document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 100 necessárias = ` + notaCem;
	calcularNota50(resto);
	
} 

function calcularNota50(vlr){
	var notaCinq = Math.floor(vlr/50);
	var resto = vlr % 50;
	document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 50 necessárias = ` + notaCinq;
	calcularNota20(resto);
	
}

function calcularNota20(vlr){
	var notaVinte = Math.floor(vlr/20);
	var resto = vlr % 20;
	document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 20 necessárias = ` + notaVinte;
	calcularNota10(resto);
	
}
 
function calcularNota10(vlr){
      var notaDez = Math.floor(vlr/10);
	  var resto = vlr % 10;
	  document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 10 necessárias = ` + notaDez;
	  calcularNota5(resto);
	  
} 

function calcularNota5 (vlr){
      var notaCinco = Math.floor(vlr/5);
	  var resto = vlr % 5;
	  document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 5 necessárias = ` + notaCinco;
	  calcularNota2(resto);
}

function calcularNota2 (vlr){
      var notaDois = Math.floor(vlr/2);
	  var resto = vlr % 2;
	  document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 2 necessárias = ` + notaDois;
	  calcularNota1(resto);
}

function calcularNota1 (vlr){
      var notaUm = vlr / 1;
	  document.getElementById("resultadoFinal").innerHTML += `<br /> Nota(s) de 1 necessárias = ` + notaUm;
	
}

