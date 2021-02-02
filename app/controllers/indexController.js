const productos = {
    id:
}



const indexController = {
    index: function(req,res) {
        return res.render("index")
    },
    findById: function(req,res) {
        const id = req.params.id;
        const productoEncontrado = productos.find((prod) => prod.id == id);

        const datosParaLaVista = {
            producto = productoEncontrado;
        }
        return res.render ("detalleMenu", datosParaLaVista);

    }
}

module.exports = indexController;