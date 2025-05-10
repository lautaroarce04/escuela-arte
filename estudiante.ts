// Estudiante hereda de Persona
import { Persona } from "./persona";
  export class Estudiante extends Persona {
    presentarse(): string {
      return `Hola, soy ${this.nombre} y soy estudiante.`;
    }
  }