const productos_db = require('../../db')

function buscarProducto(req, res) {
  const codigo = req.params.codigo
  const producto = productos_db.find(x => x.codigo === codigo)

  if (producto === undefined) {
    res.json({
      mensaje: 'El producto no existe.'
    })

    return
  }

  res.json({
    producto: producto
  })
}

module.exports = buscarProducto