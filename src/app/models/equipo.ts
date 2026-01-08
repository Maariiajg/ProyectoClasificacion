import { Jugador } from "./jugador";

export class Equipo {

    constructor(
        private _id: number,
        private _nombre: string,
        private _puntos: number = 0,
        private _partidos_jugados: number = 0,
        private _partidos_ganados: number = 0,
        private _partidos_empatados: number = 0,
        private _partidos_perdidos: number = 0,
        private _goles_favor: number = 0,
        private _goles_contra: number = 0,
        private _jugadores: Jugador[] = [],

        private _anio_fundacion: number = 0,
        private _ciudad: string = '',
        private _entrenador_actual: string = '',
        private _numero_aficionados: number = 0,
        private _colores: string[] = []
    ) {}

    // Getters y setters
    get id(): number { return this._id; }
    set id(value: number) { this._id = value; }

    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }

    get puntos(): number { return this._puntos; }
    set puntos(value: number) { this._puntos = value; }

    get partidos_jugados(): number { return this._partidos_jugados; }
    get partidos_ganados(): number { return this._partidos_ganados; }
    get partidos_empatados(): number { return this._partidos_empatados; }
    get partidos_perdidos(): number { return this._partidos_perdidos; }

    get goles_favor(): number { return this._goles_favor; }
    get goles_contra(): number { return this._goles_contra; }

    get jugadores(): Jugador[] { return this._jugadores; }
    set jugadores(value: Jugador[]) { this._jugadores = value; }




    get anio_fundacion(): number { return this._anio_fundacion; }
    set anio_fundacion(value: number) { this._anio_fundacion = value; }

    get ciudad(): string { return this._ciudad; }
    set ciudad(value: string) { this._ciudad = value; }

    get entrenador_actual(): string { return this._entrenador_actual; }
    set entrenador_actual(value: string) { this._entrenador_actual = value; }

    get numero_aficionados(): number { return this._numero_aficionados; }
    set numero_aficionados(value: number) { this._numero_aficionados = value; }

    get colores(): string[] { return this._colores; }
    set colores(value: string[]) { this._colores = value; }
    
    
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