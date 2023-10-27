import Servicio from '../servicio/numeros.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }


    guardarNumero = async (req,res) => {
        try {
            let numero = req.body
            let numeroGuardado = await this.servicio.guardarNumero(numero)

            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error obtenerNumero:', error)
        }
    }

    obtenerNumerosEntrada = async (req,res) => {
        try {
            let numeros = await this.servicio.obtenerNumerosEntrada()
            res.json(numeros)
        }
        catch(error) {
            console.log('error obtenerNumerosEntrada:', error)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const promedio = await this.servicio.obtenerPromedio()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedio', error)
        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const minmax = await this.servicio.obtenerMinMax()
            res.json(minmax)
        }
        catch(error) {
            console.log('error obtenerMinMax', error)
        }
    }

    obtenerCantidad = async (req, res) => {
        try {
            const cantidad = await this.servicio.obtenerCantidad()
            res.json({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidad', error)
        }
    }

}

export default Controlador
