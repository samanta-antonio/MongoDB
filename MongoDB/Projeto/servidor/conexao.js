const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const ejs = require('ejs');
const cors = require('cors');
const { inserirComentario, pegarComentarios} = require('./comentarios')

const app = express();

let conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'andro'
})
conexao.connect((erro) => {
    if(erro){
        console.log('Falha!' + erro);
    }
    else{
        console.log('Sucesso!');
    }
})


let sql = 'SELECT * FROM  produtos';
conexao.query(sql, (erro, resultado) => {
    console.log(resultado);

} )
const porta = 8081;

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/produtos', (req, res) => {
    conexao.query(sql, (erro, resultado) => {
        res.send(resultado);
    })
})

app.get('/pegarMensagens', async (req, res) => {
    const result = await pegarComentarios()
    res.send(result)
})

 app.post('/faleConosco',  async (req, res) => {
 let post = req.body;
 
 var comentario = {
    nome_cliente : post.nome,
    email : post.email,
    msg : post.msg
 }

 const result = await inserirComentario(comentario)
 res.send(result)

})

 //let comando =`INSERT INTO clientes (nome, email) values ('${nome}','${email}');`
 //let comando2 = `SELECT id_cliente from clientes where email = '${email}';`;
    
//conexao.query(`INSERT INTO clientes (nome, email) values (?,?);`, [nome, email]);
//    conexao.query(comando2, (erro, id_final) => {
//     let comando3 = `INSERT into comentarios (id_cliente, msg) values ('${id_final[0].id_cliente}','${msg}');`;
//     conexao.query(comando3);
//    }) 
    
//})

//app.get('/pegarMensagens', (requisitar, resposta) =>{
//    let comando2 = `SELECT nome, msg FROM comentarios join clientes on clientes.id_cliente = comentarios.id_cliente ORDER BY clientes.id_cliente DESC LIMIT 4;`;
//    conexao.query(comando2,(erro,resultado) => {
//        resposta.send(resultado);
//    })
 
//});
app.listen(porta);

