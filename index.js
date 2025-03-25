import express from 'express'
import path from 'path'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
