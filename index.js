import express from 'express'
import path from 'path'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require("fs");
const { parse } = require("csv-parse");

app.get('/', function(req, res) {
    const projectPath = path.dirname(import.meta.url)
    let pagePath = path.join(projectPath, '/index.html')
    pagePath = pagePath.replace('file:/', '/')
    res.sendFile(pagePath)
})

app.post('/usuarios.csv', function(req, res) {
    console.log('tentando registrar usuário')
    console.log(req.body)
   // salve conteudo do body em arquivo.
    setTimeout(() => {
        res.redirect('/thanks')
    }, 3000)
})

app.get('/thanks', (req, res) => {
    const projectPath = path.dirname(import.meta.url)
    let pagePath = path.join(projectPath, '/thanks.html')
    pagePath = pagePath.replace('file:/', '/')
    res.sendFile(pagePath)
})

app.listen(3000, '0.0.0.0',function() {
    console.log('Escutando na porta 3000')
})


//CSV
fs.createReadStream(".usuarios.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        console.log(row);
    })
    .on("end", function() {
        console.log("finished");
    })
    .on("error", function (error){
        console.log(error.message);
    });

fs.readFile('/home/yasmin/code/pikachu-raivoso/usuarios.csv', 'utf-8', (err,data) => {
    if (err){
        console.error('Erro ao ler o ficheiro:', err);
        return;
    }
    console.log('Conteudo do ficheiro CSV:', data);
});

parse(data, {
    columns: true,
    delimiter: ',',
}, (err, records) => {
    if (err) {
        console.error('Erro ao analisar o ficheiro CSV:', err);
        return;
    }
    console.log('Dados do usuario analisados:', records);
});