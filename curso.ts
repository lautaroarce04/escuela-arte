// Curso con un profesor responsable y lista de participantes
import { Estudiante } from "./estudiante";
    import { Profesor } from "./profesor";
 export class Curso {
    private participantes: Estudiante[] = [];
  
    constructor(
      public nombre: string,
      public responsable: Profesor
    ) {}
  
    agregarParticipante(estudiante: Estudiante): void {
      this.participantes.push(estudiante);
    }
  
    obtenerInfoCurso(): string {
      const participantesNombres = this.participantes.map(p => p.nombre).join(", ");
      return `Curso: ${this.nombre}\nResponsable: ${this.responsable.nombre}\nParticipantes: ${participantesNombres}`;
    }
  }