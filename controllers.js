const { Autor, Libro } = require("./models.js")


// Autors

exports.readAutors = (req, res) =>
    Autor.find({}, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.readAutor = (req, res) =>
    Autor.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.deleteAutor = (req, res) =>
    Autor.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.updateAutor = (req, res) =>
    Autor.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } },
        (err, data) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json(data)
            }
        })

exports.createAutor = (req, res) =>
    new Autor({ nombre: req.body.nombre, apellidos: req.body.apellidos })
        .save((err, data) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json(data)
            }
        })


// Libros

exports.readLibros = (req, res) =>
    Libro.find({}, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.readLibro = (req, res) =>
    Libro.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.deleteLibro = (req, res) =>
    Libro.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(data)
        }
    })

exports.updateLibro = (req, res) =>
    Libro.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { titulo: req.body.titulo, precio: req.body.precio } },
        (err, data) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json(data)
            }
        })

exports.createLibro = (req, res) =>
    new Libro({ titulo: req.body.titulo, precio: req.body.precio })
        .save((err, data) => {
            if (err) {
                res.json({ error: err })
            } else {
                res.json(data)
            }
        })