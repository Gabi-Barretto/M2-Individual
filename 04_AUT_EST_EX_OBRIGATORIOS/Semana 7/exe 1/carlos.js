
function somar(){
    var n = Number(document.getElementById("number").value);
    n += 1;
    document.getElementById("number").value = n;
};

function subtrair(){
    var n = Number(document.getElementById("number").value);
    n -= 1;
    document.getElementById("number").value = n;
};