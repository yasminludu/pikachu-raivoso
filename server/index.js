import express from 'express'
import path from 'path'

const app = express()

app.get('/', function(req, res) {
    const projectPath = path.dirname(import.meta.url)
    console.log(projectPath)

    let pagePath = path.join(projectPath, '/index.html')
    pagePath = pagePath.replace('file:/', '/')
    res.sendFile(pagePath)
})

app.listen(3000, '0.0.0.0',function() {
    console.log('Escutando na porta 3000')
})