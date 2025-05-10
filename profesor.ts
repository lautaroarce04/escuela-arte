// Profesor hereda de Persona
import { Persona } from "./persona";
  export class Profesor extends Persona {
    presentarse(): string {
      return `Hola, soy ${this.nombre} y soy profesor.`;
    }
  }