class ModelMem {
    constructor() {
        this.notas = []
    }
 
    obtener_id(notas) {
        const length = notas.length
        return length ? parseInt(notas[length-1]?.id || 0) + 1 : 1
    }
 
    listarNotas = async () => {
        try {
            return this.notas.map(({nombre, apellido, nota}) => ({
                nombre,
                apellido, 
                nota
            }))
        }
        catch(error) {
            console.log('error en listarNotas:', error)
            return []
        }
    }
 
    registrarNota = async nota => {
        try {
            const id = this.obtener_id(this.notas)
            const nuevaNota = {id, ...nota}
            this.notas.push(nuevaNota)
 
            return nuevaNota
        }
        catch(error) {
            console.log('error en registrarNota:', error)
            return {}
        }
    }
 }
 
 export default ModelMem