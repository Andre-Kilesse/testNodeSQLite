const express = require('express')
const app = express()
const port = 3001

// Para o CORS
const cors = require('cors')
app.use(cors())

// Para usar o body-parser
app.use(express.json())

// Rotas para o cadastro de livros
const livros = require('./livros')

app.use('/livros', livros)

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/backend', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução Express</h2>')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})
