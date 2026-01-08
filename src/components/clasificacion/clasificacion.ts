import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipo } from '../../app/models/equipo';
import { Liga } from '../../app/services/liga';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clasificacion.html',
  styleUrls: ['./clasificacion.css']
})
export class Clasificacion {

  constructor(private liga: Liga) {}

  get equipos(): Equipo[] {
    return this.liga.getClasificacionOrdenada();
  }

}
