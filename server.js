import express from 'express'
import RouterNotas from './router/notas.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

// -----------------------------------------------
//         API RESTful : Productos
// -----------------------------------------------
app.use('/api/notas', new RouterNotas().start())

// -----------------------------------------------
//        LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
