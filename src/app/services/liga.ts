import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { Jugador } from '../models/jugador';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private _equipos: Equipo[] = [];
  private _partidos: Partido[] = [];

  private _nextPartidoId: number = 1;

  constructor() {
    this.inicializarEquipos();
  }

  /*GETTERS GENERALES*/

  get equipos(): Equipo[] {
    return this._equipos;
  }

  get partidos(): Partido[] {
    return this._partidos;
  }

  /*BÚSQUEDAS*/

  getEquipoById(id: number): Equipo | undefined {
    return this._equipos.find(e => e.id === id);
  }

  /*LÓGICA DE CLASIFICACIÓN*/

  getClasificacionOrdenada(): Equipo[] {
    return [...this._equipos].sort((a, b) =>
      b.puntos - a.puntos ||
      b.partidos_ganados - a.partidos_ganados ||
      b.diferencia_goles - a.diferencia_goles ||
      b.goles_favor - a.goles_favor ||
      a.goles_contra - b.goles_contra
    );
  }

  /*PARTIDOS*/

  añadirPartido(
    equipoLocalId: number,
    equipoVisitanteId: number,
    golesLocal: number,
    golesVisitante: number
  ): void {

    if (equipoLocalId === equipoVisitanteId) {
      throw new Error('Los equipos no pueden ser iguales');
    }

    const local = this.getEquipoById(equipoLocalId);
    const visitante = this.getEquipoById(equipoVisitanteId);

    if (!local || !visitante) {
      throw new Error('Equipo no encontrado');
    }

    const partido = new Partido(
      this._nextPartidoId++,
      local,
      visitante,
      golesLocal,
      golesVisitante
    );

    partido.jugarPartido();
    this._partidos.push(partido);
  }

  /*DATOS INICIALES*/

  private inicializarEquipos(): void {

    const equiposBase: Equipo[] = [
      new Equipo(1, 'Real Madrid CF'),
      new Equipo(2, 'FC Barcelona'),
      new Equipo(3, 'Atlético Madrid'),
      new Equipo(4, 'Villarreal CF'),
      new Equipo(5, 'Real Betis Balompié'),
      new Equipo(6, 'Sevilla FC'),
      new Equipo(7, 'Athletic Bilbao'),
      new Equipo(8, 'RCD Espanyol')
    ];

    // Jugadores de ejemplo
    equiposBase[0].añadirJugador(new Jugador(1, 'Jugador 1', 'Portero', 1));
    equiposBase[0].añadirJugador(new Jugador(2, 'Jugador 2', 'Defensa', 4));

    equiposBase[1].añadirJugador(new Jugador(3, 'Jugador 3', 'Delantero', 9));
    equiposBase[1].añadirJugador(new Jugador(4, 'Jugador 4', 'Centrocampista', 8));

    this._equipos = equiposBase;
  }

}
