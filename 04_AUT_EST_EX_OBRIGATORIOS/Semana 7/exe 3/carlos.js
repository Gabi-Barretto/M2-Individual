function checknumber(){
  var number = document.getElementById("val").value;
  var estrutura = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/;

    if (number.match(estrutura)) {
            alert("Estrutura certa! (XX)XXXXX-XXXX");
    } else {
            alert("Escreva na estrutura certa! (XX)XXXXX-XXXX");          
    }
}