import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Jugador } from '../../app/models/jugador';

@Component({
  selector: 'app-lista-jugadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-jugadores.html',
  styleUrls: ['./lista-jugadores.css']
})
export class ListaJugadores {
  @Input() jugadores: Jugador[] = [];
}
