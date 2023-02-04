const cors = require('cors')
const express = require('express')
const controller = require('./controllers.js')

const router = express.Router()

// API REST CRUD

router.get("/autores", cors(), controller.readAutors)
router.get("/autores/:id", cors(), controller.readAutor)
router.delete("/autores/:id", cors(), controller.deleteAutor)
router.put("/autores/:id", cors(), controller.updateAutor)
router.post("/autores", cors(), controller.createAutor)

router.get("/libros", cors(), controller.readLibros)
router.get("/libros/:id", cors(), controller.readLibro)
router.delete("/libros/:id", cors(), controller.deleteLibro)
router.put("/libros/:id", cors(), controller.updateLibro)
router.post("/libros", cors(), controller.createLibro)

module.exports = router;