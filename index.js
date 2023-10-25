const express = require('express')
const bodyParser = require('body-parser')

const consultarProductos = require('./modulos/producto/consultarProductos')
const buscarProducto = require('./modulos/producto/buscarProducto')
const filtrarProductos = require('./modulos/producto/filtrarProductos')
const crearProducto = require('./modulos/producto/crearProducto')
const actualizarProducto = require('./modulos/producto/actualizarProducto')
const eliminarProducto = require('./modulos/producto/eliminarProducto')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/productos', consultarProductos)
app.get('/producto/codigo/:codigo', buscarProducto)
app.get('/productos/categoria/:categoria', filtrarProductos)
app.post('/producto', crearProducto)
app.put('/producto', actualizarProducto)
app.delete('/producto', eliminarProducto)

app.listen(3000, () => {
  console.log('El servidor se ha iniciado en el puerto 3000')
})