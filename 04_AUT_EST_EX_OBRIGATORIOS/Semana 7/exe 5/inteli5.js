function generateInputs () {

    let vlr = parseInt(document.getElementById("qntStudents").value); 
    var texto = "";

    for ( i = 0 ; i<vlr ; i++ ){
        texto += '<input type="number" placeholder= "trabalho" class="trabalho"></input>' + '<input type="number" placeholder= "prova" class="prova"></input><br>';
    }

    $("#inputs").append(texto);
   
}

function calc() {

    let vlr = parseInt(document.getElementById("qntStudents").value); 
    var sumTrabalhos = 0; 
    var sumProvas = 0;
    var valoresProvas = [];
    var valoresTrabalhos = [];
    var i = 0;
    var j = 0;
    var medias = [];
    var mediaGeral = 0;
    
    $('.trabalho').each(function(){
        
        valoresTrabalhos[i] = parseFloat(this.value);
        sumTrabalhos += parseFloat(this.value);
        i++;

    });
    
    $('.prova').each(function(){

        valoresProvas[j] = parseFloat(this.value);
        sumProvas += parseFloat(this.value);
        j++;

    });  
    
    var mediaProvas = sumProvas/vlr;
    var mediaTrabalhos = sumTrabalhos/vlr;

    var menorTr = valoresTrabalhos[0];
    var menorPr = valoresProvas[0];

    for (let k = 0; k < vlr ; k++) {

        medias[k] = ((valoresTrabalhos[k] * 3) + ( valoresProvas[k] * 2)) / 5;
        mediaGeral += medias[k]; 
        
        if (menorTr > valoresTrabalhos[k]){menorTr = valoresTrabalhos[k];} 
        
        if (menorPr > valoresProvas[k]){menorPr = valoresProvas[k];}
    }

        mediaGeral = parseFloat(mediaGeral/vlr);

    for (let h = 0; h < vlr ; h++) {$("#total").append("Médias individuais: ",medias[h], "<br>");}

    $("#total").append("Média geral: ",mediaGeral, "<br> Média dos trabalhos: ",mediaTrabalhos, "<br>Média dos provas: ",mediaProvas, "<br>Menor trabalho: ",menorTr,"<br>Menor prova: ",menorPr);

        console.log("soma dos trabalhos: ", sumTrabalhos);
        console.log("soma dos provas: ",sumProvas);
        console.log("array dos trabalhos: ",valoresTrabalhos);
        console.log("array dos provas: ",valoresProvas);
        console.log("medias individuais",medias);
        console.log("media geral: ",mediaGeral);    
        console.log("media dos trabalhos: ",mediaTrabalhos);
        console.log("media dos provas: ",mediaProvas);
        console.log("Menor trabalho: ",menorTr);
        console.log("Menor prova: ",menorPr);
}

