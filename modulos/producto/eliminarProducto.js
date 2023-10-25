const productos_db = require('../../db')

function eliminarProducto(req, res) {
  const codigo = req.body.codigo

  const index = productos_db.findIndex(x => x.codigo === codigo)
  if (index === -1) {
    res.json({
      mensaje: `No hay un producto registrado con el código: ${codigo}`
    })
    return
  }

  productos_db.splice(index, index)
  res.json({
    mensaje: 'Se ha eliminado el producto'
  })
}

module.exports = eliminarProducto