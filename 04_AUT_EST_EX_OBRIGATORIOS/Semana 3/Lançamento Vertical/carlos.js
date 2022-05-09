

function mostrarPainel(){
      var velocidade = prompt("Digite a velocidade inicial desejada", "0");
	  if (velocidade >= 0){
		  calcularTempo(velocidade);
		  calcularAlturaMax(velocidade);
	  }
	  else {
		  alert("Digite um valor positivo!");
		  mostrarPainel()
	  }
}
 
function calcularAlturaMax (vel){
      var hmax = Math.pow(vel,2) / 20;
	  mostrarContexto(0, hmax);
} 

function calcularTempo (vel){
      var tempoSubida = vel / 10;
	  mostrarContexto(1, tempoSubida);   
}

function mostrarContexto(x, y){
	if ( x == 1 ){
		document.getElementById("resultadoFinal").innerHTML += `<br /> Tempo total de subida (segundos) = `;
		mostrarResultado(y);
	}
    else{
		document.getElementById("resultadoFinal").innerHTML += `<br /> Altura máxima alcançada (metros) = `;
		mostrarResultado(y);
	}
}

function mostrarResultado (res){
    document.getElementById("resultadoFinal").innerHTML += res;
}
