import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Jugador } from '../../app/models/jugador';
import { Liga } from '../../app/services/liga';


@Component({
  selector: 'app-jugador-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jugador-detalle.html',
  styleUrls: ['./jugador-detalle.css']
})
export class JugadorDetalle implements OnInit {

  jugador?: Jugador;

  constructor(
    private route: ActivatedRoute,
    private liga: Liga
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugador = this.liga.getJugadorById(id);
  }
}
