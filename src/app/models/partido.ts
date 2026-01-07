import { Equipo } from "./equipo";

export class Partido {

    constructor(
        private _id: number,
        private _equipo_local: Equipo,
        private _equipo_visitante: Equipo,
        private _goles_local: number,
        private _goles_visitante: number,
        private _fecha: Date = new Date()
    ) {}

    // Getters y setters
    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }

    get equipo_local(): Equipo { return this._equipo_local; }
    set equipo_local(value: Equipo) { this._equipo_local = value; }

    get equipo_visitante(): Equipo { return this._equipo_visitante; }
    set equipo_visitante(value: Equipo) { this._equipo_visitante = value; }

    get goles_local(): number { return this._goles_local; }
    set goles_local(value: number) { this._goles_local = value; }

    get goles_visitante(): number { return this._goles_visitante; }
    set goles_visitante(value: number) { this._goles_visitante = value; }

    get fecha(): Date { return this._fecha; }
    set fecha(value: Date) { this._fecha = value; }

    // Método principal
    jugarPartido(): void {
        if (this._equipo_local === this._equipo_visitante) {
            throw new Error("Un equipo no puede jugar contra sí mismo");
        }

        this._equipo_local.registrarPartido(
            this._goles_local,
            this._goles_visitante
        );

        this._equipo_visitante.registrarPartido(
            this._goles_visitante,
            this._goles_local
        );
    }

}