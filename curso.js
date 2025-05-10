"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(nombre, responsable) {
        this.nombre = nombre;
        this.responsable = responsable;
        this.participantes = [];
    }
    Curso.prototype.agregarParticipante = function (estudiante) {
        this.participantes.push(estudiante);
    };
    Curso.prototype.obtenerInfoCurso = function () {
        var participantesNombres = this.participantes.map(function (p) { return p.nombre; }).join(", ");
        return "Curso: ".concat(this.nombre, "\nResponsable: ").concat(this.responsable.nombre, "\nParticipantes: ").concat(participantesNombres);
    };
    return Curso;
}());
exports.Curso = Curso;
