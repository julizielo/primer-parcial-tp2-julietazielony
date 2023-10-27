import ModelMem from '../model/DAO/numerosMem.js'



class Servicio {
    constructor() {
        this.model = new ModelMem()
    }
   

    async guardarNumero(numero) { 
        return await this.model.guardarNumero(numero) 
    }

    obtenerNumerosEntrada = async () => {
        const numeros = await this.model.obtenerNumerosEntrada()
        
        return numeros
    }

    obtenerPromedio = async () => {
        const numeros = await this.model.obtenerNumeros()
        // const suma = Number(numeros.map(n => n.numero).reduce((acc, numero) => acc + numero, 0))
        let suma = 0
        numeros.forEach((numero) => {
            suma += Number(numero.numero)
        })
        return suma / numeros.length
    }

    obtenerMinMax = async () => {
        let obj_min_max = {"min": 0, "max": 0}
        const numeros = await this.model.obtenerNumeros()
        numeros.sort((a, b) => a.numero - b.numero)
        const min = numeros[0].numero
        const max = numeros[numeros.length - 1].numero
        obj_min_max["min"] = min
        obj_min_max["max"] = max
        return obj_min_max
    }

    obtenerCantidad = async () => {
        const numeros = await this.model.obtenerNumeros()
        let cant = numeros.length
        return cant
    }

}

export default Servicio