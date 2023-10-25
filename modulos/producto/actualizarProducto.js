const productos_db = require('../../db')

function actualizarProducto(req, res) {
  const producto = {
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    precio: req.body.precio,
    categoria: req.body.categoria,
  }

  const index = productos_db.findIndex(x => x.codigo === producto.codigo)
  if (index === -1) {
    res.json({
      mensaje: `No hay un producto registrado con el código: ${producto.codigo}`
    })
    return
  }

  productos_db[index] = {
    codigo: producto.codigo,
    nombre: producto.nombre,
    precio: producto.precio,
    categoria: producto.categoria
  }

  res.json({
    mensaje: 'Se ha editado el producto.'
  })
}

module.exports = actualizarProducto