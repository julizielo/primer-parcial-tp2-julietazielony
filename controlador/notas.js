import Servicio from '../servicio/notas.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }
 
    registrarNota = async (req, res) => {
        try {
            let nota = req.body
            let notaGuardada = await this.servicio.registrarNota(nota)
            
            if(!notaGuardada.error) {
                res.status(201).json(notaGuardada)
            } else {
                res.status(400).json({errorMsg: "Los datos ingresados no son válidos"})
            }
        }
        catch(error) {
            res.status(500).json({errorMsg: error.message})
        }
    }
 
    listarNotas = async (req, res) => {
        try {
            let notas = await this.servicio.listarNotas()
            res.json(notas)
        }
        catch(error) {
            res.status(500).json({errorMsg: error.message})
        }
    }
 
    listarNotasAgrupadas = async (req, res) => {
        try {
            let notasAgrupadas = await this.servicio.listarNotasAgrupadas()
            res.json(notasAgrupadas)
        }
        catch(error) {
            res.status(500).json({errorMsg: error.message})
        }
    }
 
    obtenerEstadisticasAlumnos = async (req, res) => {
        try {
            const estadisticas = await this.servicio.obtenerEstadisticasAlumnos()
            res.json(estadisticas)
        }
        catch(error) {
            res.status(500).json({errorMsg: error.message})
        }
    }
 
    obtenerPromedioCurso = async (req, res) => {
        try {
            const promedio = await this.servicio.obtenerPromedioCurso()
            res.json({promedio})
        }
        catch(error) {
            res.status(500).json({errorMsg: error.message})
        }
    }
 }
 
 export default Controlador
