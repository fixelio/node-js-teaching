const productos_db = require('../../db')

function filtrarProductos(req, res) {
  const categoria = req.params.categoria
  const productos = productos_db.filter(x => x.categoria === categoria)

  if (productos.length === 0) {
    res.json({
      mensaje: `No hay productos registrados en la categoría: ${categoria}`
    })
    return
  }

  res.json({
    productos: productos
  })
}

module.exports = filtrarProductos