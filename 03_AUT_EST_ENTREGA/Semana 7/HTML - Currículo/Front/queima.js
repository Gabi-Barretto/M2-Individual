function criarLinha(){
	
	$.get("http://127.0.0.1:3020/user", function(mensagem){
		
		var msg = JSON.parse(mensagem);

		console.log(msg[0].curso);

		$("#frase").append(
            `<table>
            <tr>
                <th>Nome</th>
                <th>Curso</th>
                <th>Semestre</th>
            </tr>
            <tr>
                <td>` + msg[0].nome + `</td>
                <td>` + msg[0].curso + `</td>
                <td>` + msg[0].semestre + `</td>
            </tr>`
        );
	});

}