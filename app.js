const express = require('express')
const app = express()
const port = 3001

//Rotas para o cadastro de livros
const livros = require('./livros')

app.use('/livros', livros)

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/cap12', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução Express</h2>')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})

