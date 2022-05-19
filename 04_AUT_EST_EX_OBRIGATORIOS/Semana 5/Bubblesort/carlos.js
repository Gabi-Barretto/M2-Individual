function ordenar(vlrs, vlr){
	
	var array = vlrs.value.split(", ");
	
	var valorFoco = vlr.value;
	
	console.log(array);
	
	console.log(valorFoco);
	
	bubbleSort(array);
	
	result(array, valorFoco);
}

function bubbleSort(arr) {
	
    var length = arr.length;  
	
    for (var i = 0; i < length; i++) { 
	
          for (var j = 0; j < (length - 1 - i); j++) { 
		  
                   if(Number(arr[j]) > Number(arr[j+1])) {
					   
                            var aux = arr[j]; 
						    arr[j] = arr[j+1]; 
							arr[j+1] = aux; 
					}
			} 	        
    }
	console.log(arr);
}

function result(arr, vlr){
	
	var length = arr.length;  
	
	for (var i = 0; i < length; i++) {
		
		if (Number(arr[i]) == Number(vlr)) {
			
			document.getElementById("resultadoFinal").innerHTML += "Valor foco: ";
			
		}
		
		document.getElementById("resultadoFinal").innerHTML += arr[i] + ", <br>";
		 
	}
	
}