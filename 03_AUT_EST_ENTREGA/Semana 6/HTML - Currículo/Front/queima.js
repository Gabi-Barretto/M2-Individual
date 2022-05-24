function criarLinha(){
	
	$.get("http://127.0.0.1:3011/linguica", function(mensagem){
		var msg = JSON.parse(mensagem)
		$("#frase").append(msg.nome);
	});

}