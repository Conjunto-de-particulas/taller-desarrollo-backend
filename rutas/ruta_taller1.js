const express = require('express')
const router = express.Router()
const {convertidorTemp, mejorParidad, peorParidad, resolvedor} = require('../taller')

router.post('/convertidorTemp', (req, res) => {
  const {temperatura_F} = req.body
  if (temperatura_F === undefined) {
    return res.status(400).json({error: 'Ingrese un valor en fahrenheit'})
  }
  const resultado = convertidorTemp(temperatura_F)
  res.json({resultado})
})

router.post('/mejorParidad', (req, res) => {
  const {numero} = req.body
  if (numero === undefined) {
    return res.status(400).json({error: 'Se requiere un numero'})
  }
  const resultado = mejorParidad(numero)
  res.json({resultado})
})

router.post('/peorParidad', (req, res) => {
  const {numero} = req.body
  if (numero === undefined) {
    return res.status(400).json({error: 'Se requiere un numero'})
  }
  const resultado = peorParidad(numero)
  res.json({resultado})
})

router.post('/resolvedor', (req, res) => {
  const {a, b, c, signo} = req.body
  if (a === undefined || b === undefined || c === undefined) {
    return res.status(400).json({error: 'Se requiere parametros a, b,c'})
  }
  const resultado = resolvedor(a, b, c)
  res.json({resultado})
})

module.exports = router