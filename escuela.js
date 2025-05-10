"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var estudiante_1 = require("./estudiante");
var profesor_1 = require("./profesor");
// Función para recorrer personas y presentarlas
function presentarPersonas(personas) {
    personas.forEach(function (p) {
        console.log(p.presentarse());
    });
}
//ejemplo
var profe1 = new profesor_1.Profesor("Lautaro Arce", "lautaro@escuela.com");
var estudiante1 = new estudiante_1.Estudiante("Limodio Lorena", "lorena@mail.com");
var estudiante2 = new estudiante_1.Estudiante("Cristian Cardozo", "cristian@mail.com");
var cursoArte = new curso_1.Curso("Geofrafia", profe1);
cursoArte.agregarParticipante(estudiante1);
cursoArte.agregarParticipante(estudiante2);
console.log(cursoArte.obtenerInfoCurso());
var personas = [profe1, estudiante1, estudiante2];
presentarPersonas(personas);
//trabajo entregable
