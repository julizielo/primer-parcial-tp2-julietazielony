class ModelMem {
    constructor() {
        this.numeros = [
        ]
    }

    obtener_id(numeros) {
        const length = numeros.length
        return length? parseInt(numeros[length-1]?.id || 0) + 1 : 1
    }

    obtenerNumeros = async numero => {
        try {
            return this.numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros:',error)
        }
    }

    guardarNumero = async numero => {
        try {
            const id = this.obtener_id(this.numeros)
            const nuevoNumero = {id, ...numero}
            this.numeros.push(nuevoNumero)

            return nuevoNumero
        }
        catch(error) {
            console.log('error en guardarNumero:',error)
            let numero = {}

            return numero
        }
    }

    obtenerNumerosEntrada = async () => {
        try {
            let arr_numeros = []
            this.numeros.forEach((numero) => {
                arr_numeros.push(numero.numero)
            })

            return ("numeros: " + arr_numeros)
        }
        catch(error) {
            console.log('error en obtenerNumeros', error)
            return []
        }
    }


}

export default ModelMem