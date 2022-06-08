import {openDb} from '../configDB.js';


//criar tabela
export async function creatingTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Curr (id INTEGER PRIMARY KEY, nome TEXT, cruso TEXT, semestre TEXT)');
    })

}
//inserir dados
export async function insertUser(user) {
    openDb().then(db =>{
        db.run('INSERT INTO Curr (nome, curso, semestre) VALUES (?,?,?)', [user.nome, user.curso, user.semestre]);
    })

}
//update de dados
export async function updateUser(user) {
    openDb().then(db =>{
        db.run('UPDATE Curr SET nome = ?, curso = ?, semestre = ? WHERE id = ?', [user.nome, user.curso, user.semestre]);
    })
}

