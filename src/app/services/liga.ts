import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { Jugador } from '../models/jugador';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class Liga {

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
    return this._equipos.find(e => Number(e.id) === Number(id));
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

  //encontrar jugador por id para la ampliación personal
  getJugadorById(id: number): Jugador | undefined {
    for (const equipo of this._equipos) {
      const jugador = equipo.jugadores.find(j => j.id === id);
      if (jugador) {
        return jugador;
      }
    }
    return undefined;
  }


  /*DATOS INICIALES*/

  private inicializarEquipos(): void {

  const realMadrid = new Equipo(
    1,
    'Real Madrid CF',
    1902,
    'Madrid',
    'Carlo Ancelotti',
    90000000,
    ['Blanco'],
    '/assets/real-madrid.png'
  );

  realMadrid.añadirJugador(new Jugador(1, 'Thibaut Courtois', 'Portero', 1, 1992));
  realMadrid.añadirJugador(new Jugador(2, 'Andriy Lunin', 'Portero', 13, 1999));
  realMadrid.añadirJugador(new Jugador(3, 'Dani Carvajal', 'Defensa', 2, 1992));
  realMadrid.añadirJugador(new Jugador(4, 'Éder Militão', 'Defensa', 3, 1998));
  realMadrid.añadirJugador(new Jugador(5, 'David Alaba', 'Defensa', 4, 1992));
  realMadrid.añadirJugador(new Jugador(6, 'Nacho Fernández', 'Defensa', 6, 1990));
  realMadrid.añadirJugador(new Jugador(7, 'Luka Modrić', 'Centrocampista', 10, 1985));
  realMadrid.añadirJugador(new Jugador(8, 'Toni Kroos', 'Centrocampista', 8, 1990));
  realMadrid.añadirJugador(new Jugador(9, 'Federico Valverde', 'Centrocampista', 15, 1998));
  realMadrid.añadirJugador(new Jugador(10, 'Vinícius Jr.', 'Delantero', 7, 2000));
  realMadrid.añadirJugador(new Jugador(11, 'Rodrygo Goes', 'Delantero', 11, 2001));

  const barcelona = new Equipo(
    2,
    'FC Barcelona',
    1899,
    'Barcelona',
    'Xavi Hernández',
    85000000,
    ['Azul', 'Grana'],
    '/assets/barcelona.png'
  );

  barcelona.añadirJugador(new Jugador(12, 'Marc-André ter Stegen', 'Portero', 1, 1992));
  barcelona.añadirJugador(new Jugador(13, 'Iñaki Peña', 'Portero', 13, 1999));
  barcelona.añadirJugador(new Jugador(14, 'Ronald Araújo', 'Defensa', 4, 1999));
  barcelona.añadirJugador(new Jugador(15, 'Jules Koundé', 'Defensa', 23, 1998));
  barcelona.añadirJugador(new Jugador(16, 'Alejandro Balde', 'Defensa', 3, 2003));
  barcelona.añadirJugador(new Jugador(17, 'Frenkie de Jong', 'Centrocampista', 21, 1997));
  barcelona.añadirJugador(new Jugador(18, 'Pedri', 'Centrocampista', 8, 2002));
  barcelona.añadirJugador(new Jugador(19, 'Gavi', 'Centrocampista', 6, 2004));
  barcelona.añadirJugador(new Jugador(20, 'Ilkay Gündogan', 'Centrocampista', 22, 1990));
  barcelona.añadirJugador(new Jugador(21, 'Robert Lewandowski', 'Delantero', 9, 1988));
  barcelona.añadirJugador(new Jugador(22, 'Raphinha', 'Delantero', 11, 1996));

  const atletico = new Equipo(
    3,
    'Atlético Madrid',
    1903,
    'Madrid',
    'Diego Simeone',
    70000000,
    ['Rojo', 'Blanco'],
    '/assets/atletico.png'
  );

  atletico.añadirJugador(new Jugador(23, 'Jan Oblak', 'Portero', 13, 1993));
  atletico.añadirJugador(new Jugador(24, 'Ivo Grbić', 'Portero', 1, 1996));
  atletico.añadirJugador(new Jugador(25, 'José Giménez', 'Defensa', 2, 1995));
  atletico.añadirJugador(new Jugador(26, 'Stefan Savić', 'Defensa', 15, 1991));
  atletico.añadirJugador(new Jugador(27, 'Nahuel Molina', 'Defensa', 16, 1998));
  atletico.añadirJugador(new Jugador(28, 'Koke', 'Centrocampista', 6, 1992));
  atletico.añadirJugador(new Jugador(29, 'Rodrigo De Paul', 'Centrocampista', 5, 1994));
  atletico.añadirJugador(new Jugador(30, 'Saúl Ñíguez', 'Centrocampista', 8, 1994));
  atletico.añadirJugador(new Jugador(31, 'Marcos Llorente', 'Centrocampista', 14, 1995));
  atletico.añadirJugador(new Jugador(32, 'Antoine Griezmann', 'Delantero', 7, 1991));
  atletico.añadirJugador(new Jugador(33, 'Álvaro Morata', 'Delantero', 19, 1992));

  const villarreal = new Equipo(
    4,
    'Villarreal CF',
    1923,
    'Villarreal',
    'Marcelino García Toral',
    25000000,
    ['Amarillo'],
    '/assets/villarreal.png'
  );

  villarreal.añadirJugador(new Jugador(34, 'Gerónimo Rulli', 'Portero', 1, 1992));
  villarreal.añadirJugador(new Jugador(35, 'Pepe Reina', 'Portero', 13, 1982));
  villarreal.añadirJugador(new Jugador(36, 'Raúl Albiol', 'Defensa', 3, 1985));
  villarreal.añadirJugador(new Jugador(37, 'Pau Torres', 'Defensa', 4, 1997));
  villarreal.añadirJugador(new Jugador(38, 'Kiko Femenía', 'Defensa', 20, 1991));
  villarreal.añadirJugador(new Jugador(39, 'Dani Parejo', 'Centrocampista', 10, 1990));
  villarreal.añadirJugador(new Jugador(40, 'Álex Baena', 'Centrocampista', 11, 2001));
  villarreal.añadirJugador(new Jugador(41, 'Santi Comesaña', 'Centrocampista', 24, 1996));
  villarreal.añadirJugador(new Jugador(42, 'Manu Trigueros', 'Centrocampista', 25, 1991));
  villarreal.añadirJugador(new Jugador(43, 'Yeremy Pino', 'Delantero', 21, 2003));
  villarreal.añadirJugador(new Jugador(44, 'Gerard Moreno', 'Delantero', 7, 1992));

  const betis = new Equipo(
    5,
    'Real Betis Balompié',
    1907,
    'Sevilla',
    'Manuel Pellegrini',
    30000000,
    ['Verde', 'Blanco'],
    '/assets/betis.png'
  );

  betis.añadirJugador(new Jugador(45, 'Rui Silva', 'Portero', 1, 1994));
  betis.añadirJugador(new Jugador(46, 'Fran Vieites', 'Portero', 13, 1999));
  betis.añadirJugador(new Jugador(47, 'Germán Pezzella', 'Defensa', 6, 1991));
  betis.añadirJugador(new Jugador(48, 'Marc Bartra', 'Defensa', 15, 1991));
  betis.añadirJugador(new Jugador(49, 'Aitor Ruibal', 'Defensa', 20, 1996));
  betis.añadirJugador(new Jugador(50, 'Guido Rodríguez', 'Centrocampista', 8, 1994));
  betis.añadirJugador(new Jugador(51, 'Isco', 'Centrocampista', 22, 1992));
  betis.añadirJugador(new Jugador(52, 'William Carvalho', 'Centrocampista', 14, 1992));
  betis.añadirJugador(new Jugador(53, 'Nabil Fekir', 'Centrocampista', 25, 1993));
  betis.añadirJugador(new Jugador(54, 'Johnny Cardoso', 'Centrocampista', 18, 2001));
  betis.añadirJugador(new Jugador(55, 'Borja Iglesias', 'Delantero', 9, 1993));

  const sevilla = new Equipo(
    6,
    'Sevilla FC',
    1890,
    'Sevilla',
    'Quique Sánchez Flores',
    35000000,
    ['Rojo', 'Blanco'],
    '/assets/sevilla.png'
  );

  sevilla.añadirJugador(new Jugador(56, 'Marko Dmitrović', 'Portero', 13, 1992));
  sevilla.añadirJugador(new Jugador(57, 'Álvaro Fernández', 'Portero', 1, 1998));
  sevilla.añadirJugador(new Jugador(58, 'Jesús Navas', 'Defensa', 16, 1985));
  sevilla.añadirJugador(new Jugador(59, 'Marcos Acuña', 'Defensa', 19, 1991));
  sevilla.añadirJugador(new Jugador(60, 'Gonzalo Montiel', 'Defensa', 2, 1997));
  sevilla.añadirJugador(new Jugador(61, 'Nemanja Gudelj', 'Centrocampista', 6, 1991));
  sevilla.añadirJugador(new Jugador(62, 'Ivan Rakitić', 'Centrocampista', 10, 1988));
  sevilla.añadirJugador(new Jugador(63, 'Joan Jordán', 'Centrocampista', 8, 1994));
  sevilla.añadirJugador(new Jugador(64, 'Oliver Torres', 'Centrocampista', 11, 1994));
  sevilla.añadirJugador(new Jugador(65, 'Papu Gómez', 'Centrocampista', 24, 1988));
  sevilla.añadirJugador(new Jugador(66, 'Youssef En-Nesyri', 'Delantero', 15, 1997));

  const athletic = new Equipo(
    7,
    'Athletic Bilbao',
    1898,
    'Bilbao',
    'Ernesto Valverde',
    40000000,
    ['Rojo', 'Blanco'],
    '/assets/bilbao.png'
  );

  athletic.añadirJugador(new Jugador(67, 'Unai Simón', 'Portero', 1, 1997));
  athletic.añadirJugador(new Jugador(68, 'Julen Agirrezabala', 'Portero', 13, 2000));
  athletic.añadirJugador(new Jugador(69, 'Yeray Álvarez', 'Defensa', 5, 1995));
  athletic.añadirJugador(new Jugador(70, 'Dani Vivian', 'Defensa', 3, 2000));
  athletic.añadirJugador(new Jugador(71, 'Óscar De Marcos', 'Defensa', 18, 1988));
  athletic.añadirJugador(new Jugador(72, 'Dani García', 'Centrocampista', 14, 1994));
  athletic.añadirJugador(new Jugador(73, 'Ander Herrera', 'Centrocampista', 21, 1989));
  athletic.añadirJugador(new Jugador(74, 'Oihan Sancet', 'Centrocampista', 8, 2000));
  athletic.añadirJugador(new Jugador(75, 'Iker Muniain', 'Centrocampista', 10, 1997));
  athletic.añadirJugador(new Jugador(76, 'Iñaki Williams', 'Delantero', 9, 1994));
  athletic.añadirJugador(new Jugador(77, 'Gorka Guruzeta', 'Delantero', 12, 1996));

  const espanyol = new Equipo(
    8,
    'RCD Espanyol',
    1900,
    'Barcelona',
    'Luis García',
    20000000,
    ['Azul', 'Blanco'],
    '/assets/espanyol.png'
  );

  espanyol.añadirJugador(new Jugador(78, 'Fernando Pacheco', 'Portero', 13, 1991));
  espanyol.añadirJugador(new Jugador(79, 'Joan García', 'Portero', 1, 2001));
  espanyol.añadirJugador(new Jugador(80, 'Leandro Cabrera', 'Defensa', 6, 1991));
  espanyol.añadirJugador(new Jugador(81, 'Rafael Marín', 'Defensa', 4, 2001));
  espanyol.añadirJugador(new Jugador(82, 'Óscar Gil', 'Defensa', 22, 1998));
  espanyol.añadirJugador(new Jugador(83, 'Joselu', 'Delantero', 14, 1990));
  espanyol.añadirJugador(new Jugador(84, 'Javi Puado', 'Delantero', 7, 1998));
  espanyol.añadirJugador(new Jugador(85, 'Brian Oliván', 'Defensa', 3, 1998));
  espanyol.añadirJugador(new Jugador(86, 'Pol Lozano', 'Centrocampista', 15, 2001));
  espanyol.añadirJugador(new Jugador(87, 'Sergi Darder', 'Centrocampista', 10, 1993));
  espanyol.añadirJugador(new Jugador(88, 'Omar El Hilali', 'Defensa', 23, 2005));

  this._equipos = [
    realMadrid,
    barcelona,
    atletico,
    villarreal,
    betis,
    sevilla,
    athletic,
    espanyol
  ];
}
}