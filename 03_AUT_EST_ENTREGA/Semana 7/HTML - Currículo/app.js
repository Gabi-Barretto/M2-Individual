//import {creatingTable, insertUser, selectUser} from './Users.js';
import express from 'express';
import sqlite3 from 'sqlite3';
// const express = require('express'); 
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'database.db';


//creatingTable();

app.get('/user', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT * FROM Curr`;
     
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.send(JSON.stringify(rows));
	});
	db.close(); // Fecha o banco
});
// app.post('/user', function(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     insertUser(req.body);
//     res.json({

//         "input": "ok"
    
//     });

// });

// app.put('/user', function(req, res) {
//     if(req.body && !req.body.id){  
//         res.json({

//             "update": "not ok, id needed"
        
//         });
//     } else {
//         updateUser(req.body);
//         res.json({

//             "update": "ok"
        
//         });
//     }
// });

app.listen(3020, () => console.log("rodei3000"));