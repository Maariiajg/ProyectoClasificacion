import { Jugador } from "./jugador";

export class Equipo {

    constructor(
        private _id: number,
        private _nombre: string,
        private _anioFundacion: number,
        private _ciudad: string,
        private _entrenador: string,
        private _numAficionados: number, 
        private _colores: string[],
        private _escudoUrl: string,
        private _puntos: number = 0,
        private _partidos_jugados: number = 0,
        private _partidos_ganados: number = 0,
        private _partidos_empatados: number = 0,
        private _partidos_perdidos: number = 0,
        private _goles_favor: number = 0,
        private _goles_contra: number = 0,
        private _jugadores: Jugador[] = []
    ) {}

    //getters y setters
    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }

    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }

    get anioFundacion(): number { return this._anioFundacion; }
    set anioFundacion(value: number) { this._anioFundacion = value; }

    get ciudad(): string { return this._ciudad; }
    set ciudad(value: string) { this._ciudad = value; }

    get entrenador(): string { return this._entrenador; }
    set entrenador(value: string) { this._entrenador = value; }

    get numAficionados(): number { return this._numAficionados; }
    set numAficionados(value: number) { this._numAficionados = value; }

    get colores(): string[] { return this._colores; }
    set colores(value: string[]) { this._colores = value; }

    get escudoUrl(): string { return this._escudoUrl; }
    set escudoUrl(value: string) { this._escudoUrl = value; }

    get puntos(): number { return this._puntos; }
    set puntos(value: number) { this._puntos = value; }

    get partidos_jugados(): number { return this._partidos_jugados; }
    set partidos_jugados(value: number) { this._partidos_jugados = value; }

    get partidos_ganados(): number { return this._partidos_ganados; }
    set partidos_ganados(value: number) { this._partidos_ganados = value; }

    get partidos_empatados(): number { return this._partidos_empatados; }
    set partidos_empatados(value: number) { this._partidos_empatados = value; }

    get partidos_perdidos(): number { return this._partidos_perdidos; }
    set partidos_perdidos(value: number) { this._partidos_perdidos = value; }

    get goles_favor(): number { return this._goles_favor; }
    set goles_favor(value: number) { this._goles_favor = value; }

    get goles_contra(): number { return this._goles_contra; }
    set goles_contra(value: number) { this._goles_contra = value; }

    get jugadores(): Jugador[] { return this._jugadores; }
    set jugadores(value: Jugador[]) { this._jugadores = value; }    
    
    // Getters calculados
    get diferencia_goles(): number {
        return this._goles_favor - this._goles_contra;
    }

    // Métodos de negocio
    añadirJugador(jugador: Jugador): void {
        this._jugadores.push(jugador);
    }

    registrarPartido(goles_favor: number, goles_contra: number): void {
        this._partidos_jugados++;
        this._goles_favor += goles_favor;
        this._goles_contra += goles_contra;

        if (goles_favor > goles_contra) {
            this._partidos_ganados++;
            this._puntos += 3;
        } else if (goles_favor === goles_contra) {
            this._partidos_empatados++;
            this._puntos += 1;
        } else {
            this._partidos_perdidos++;
        }
    }

}