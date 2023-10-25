const productos_db = require('../../db')

function consultarProductos(req, res) {
  res.json({
    productos: productos_db
  })
}

module.exports = consultarProductos