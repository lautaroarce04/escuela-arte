// Clase base Persona
export abstract class Persona {
    constructor(public nombre: string, public email: string) {}
  
    abstract presentarse(): string;
  }