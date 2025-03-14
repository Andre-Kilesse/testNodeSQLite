const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/cap12', (req, res) => {
    res.send('<h2>Capítulo 12: Introdução Express</h2>')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})

