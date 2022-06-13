function Ord(nomes){
    let ns = nomes.value;
    let arrNs = ns.split(", ");
    let sort = arrNs.sort();
    console.log(sort);
    document.getElementById("resultado").innerHTML = sort;
}