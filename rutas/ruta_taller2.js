const express = require('express')
const router = express.Router()
const {findMax, includes, sum, missingNumbers} = require('../taller-02')

router.post('/findMax', (req, res) => {
  const {lista_numeros} = req.body
  if (!Array.isArray(lista_numeros)) {
    return res.status(400).json({error: 'El elemento no es una lista'})
  }
  const resultado = findMax(lista_numeros)
  res.json({resultado})
})

router.post('/includes', (req, res) => {
  const {numero, lista_numeros} = req.body
  if (!Array.isArray(lista_numeros) || numero === undefined) {
    return res.status(400).json({error: 'Se requiere un numero y una lista'})
  }
  const resultado = includes(lista_numeros, numero)
  res.json({resultado})
})

router.post('/sum', (req, res) => {
  const {lista_numeros} = req.body
  if (!Array.isArray(lista_numeros)) {
    return res.status(400).json({error: 'El elemento no es una lista'})
  }
  const resultado = sum(lista_numeros)
  res.json({resultado})
})

router.post('/missingNumbers', (req, res) => {
  const {lista_numeros} = req.body
  if (!Array.isArray(lista_numeros)) {
    return res.status(400).json({error: 'El elemento no es una lista'})
  }
  const resultado = missingNumbers(lista_numeros)
  res.json({resultado})
})

module.exports = router