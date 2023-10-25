const productos_db = require('../../db')

function crearProducto(req, res) {
  const producto = req.body

  const existente = productos_db.find(x => x.codigo === producto.codigo)
  if (existente !== undefined) {
    res.json({
      mensaje: 'Ya hay un producto registrado con este código.'
    })
    return
  }
  
  productos_db.push(producto)
  res.json({
    mensaje: 'Se ha creado el producto.'
  })
}

module.exports = crearProducto