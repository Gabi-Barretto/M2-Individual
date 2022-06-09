// function criarLinha(){
	
// 	$.get("http://127.0.0.1:3020/user", function(mensagem){
		
// 		var msg = JSON.parse(mensagem);

// 		console.log(msg[0].curso);

// 		$("#frase").append(
//             `<table>
//             <tr>
//                 <th>Nome</th>
//                 <th>Curso</th>
//                 <th>Semestre</th>
//             </tr>
//             <tr>
//                 <td>` + msg[0].nome + `</td>
//                 <td>` + msg[0].curso + `</td>
//                 <td>` + msg[0].semestre + `</td>
//             </tr>`
//         );
// 	});

// }

api = 'http://127.0.0.1:3000'

function criarLinha(){
    console.log("dsjdjk");
    Curr.list();
}

var Curr = {

    list() {
        console.log("list");
        $.ajax({
            url: api + '/user',
            type: 'GET',
            success: data => {
                var msg = JSON.parse(data);
                console.log(msg);
                var tx ='';
                tx += `<table>
                            <tr>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Semestre</th>
                            </tr>`;

                msg.forEach(element => {

                    tx+=`<tr>
                            <td>` + element.nome + `</td>
                            <td>` + element.curso + `</td>
                            <td>` + element.semestre + `</td>
                        </tr>`;

                });        

                $('#frase').append(tx);
            }
        })
    }
}
