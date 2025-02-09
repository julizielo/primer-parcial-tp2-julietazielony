import ModelMem from '../model/DAO/notasMem.js'



class Servicio {
    constructor() {
        this.model = new ModelMem()
    }
   
    async registrarNota(nota) {
        if (!this.validarNota(nota)) {
            return { error: true }
        }
        return await this.model.registrarNota(nota)
    }
 
    async listarNotas() {
        return await this.model.listarNotas()
    }
 
    async listarNotasAgrupadas() {
        const notas = await this.model.listarNotas()
        const notasAgrupadas = []
        
        notas.forEach(nota => {
            const alumnoExistente = notasAgrupadas.find(
                a => a.nombre === nota.nombre && a.apellido === nota.apellido
            )
            
            if (alumnoExistente) {
                alumnoExistente.notas.push(nota.nota)
            } else {
                notasAgrupadas.push({
                    nombre: nota.nombre,
                    apellido: nota.apellido,
                    notas: [nota.nota]
                })
            }
        })
        
        return notasAgrupadas
    }
 
    async obtenerEstadisticasAlumnos() {
        const notasAgrupadas = await this.listarNotasAgrupadas()
        
        return notasAgrupadas.map(alumno => {
            const notas = alumno.notas
            return {
                nombre: alumno.nombre,
                apellido: alumno.apellido,
                promedio: notas.reduce((a, b) => a + b, 0) / notas.length,
                cantidad: notas.length,
                minima: Math.min(...notas),
                maxima: Math.max(...notas)
            }
        })
    }
 
    async obtenerPromedioCurso() {
        const notas = await this.model.listarNotas()
        const sumaTotal = notas.reduce((sum, nota) => sum + nota.nota, 0)
        return Number((sumaTotal / notas.length).toFixed(2))
    }
 
    validarNota(nota) {
        if (!nota.nombre || !nota.apellido || nota.nota === undefined) {
            return false
        }
        if (nota.nota < 0 || nota.nota > 10) {
            return false
        }
        return true
    }
 }
 
 export default Servicio