
// function changeValue(){
//     var x = document.getElementById("first").value;
//     var y = document.getElementById("second").value;
//     document.getElementById("second").value = x;
//     document.getElementById("first").value = y;
// }

function swapValue(){
    var aux = document.getElementById("first").value;
    document.getElementById("first").value = document.getElementById("second").value;
    document.getElementById("second").value = aux;
    
}