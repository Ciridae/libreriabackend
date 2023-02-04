const mongoose = require('mongoose')

const Autor = mongoose.model('Autor', new mongoose.Schema(
    {
        nombre: String,
        apellidos: String
    }
))

const Libro = mongoose.model('Libro', new mongoose.Schema(
    {
        titulo: String,
        precio: Number
    }
))

module.exports = {
    Autor: Autor,
    Libro: Libro
}