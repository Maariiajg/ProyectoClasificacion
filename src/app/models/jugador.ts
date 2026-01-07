export class Jugador {

    constructor(
        private _id: number,
        private _nombre: string,
        private _posicion: string,
        private _dorsal: number
    ) {}

    // Getters y setters
    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }

    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }

    get posicion(): string { return this._posicion; }
    set posicion(value: string) { this._posicion = value; }

    get dorsal(): number { return this._dorsal; }
    set dorsal(value: number) { this._dorsal = value; }

}
