import { Curso } from "./curso";
import { Estudiante } from "./estudiante";
import { Persona } from "./persona";
import { Profesor } from "./profesor";

  // Función para recorrer personas y presentarlas
  function presentarPersonas(personas: Persona[]): void {
    personas.forEach(p => {
      console.log(p.presentarse());
    });
  }

  //ejemplo
  
  const profe1 = new Profesor("Lautaro Arce", "lautaro@escuela.com");
const estudiante1 = new Estudiante("Limodio Lorena", "lorena@mail.com");
const estudiante2 = new Estudiante("Cristian Cardozo", "cristian@mail.com");

const cursoArte = new Curso("Geofrafia", profe1);
cursoArte.agregarParticipante(estudiante1);
cursoArte.agregarParticipante(estudiante2);

console.log(cursoArte.obtenerInfoCurso());

const personas: Persona[] = [profe1, estudiante1, estudiante2];
presentarPersonas(personas);

//trabajo entregable