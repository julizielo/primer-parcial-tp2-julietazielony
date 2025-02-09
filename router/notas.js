import express from 'express'
import Controlador from '../controlador/notas.js'


class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.post('/', this.controlador.registrarNota)
        this.router.get('/', this.controlador.listarNotas)
        this.router.get('/agrupadas', this.controlador.listarNotasAgrupadas)
        this.router.get('/alumnosestadisticas', this.controlador.obtenerEstadisticasAlumnos)
        this.router.get('/cursopromedio', this.controlador.obtenerPromedioCurso)
    
        return this.router
    }
}

export default Router

