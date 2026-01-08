import { Component, Input } from '@angular/core';
import { Equipo } from '../../app/models/equipo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipo-detalle.html',
  styleUrls: ['./equipo-detalle.css']
})
export class EquipoDetalle {

  @Input() equipo!: Equipo;

  get porcentajeVictorias(): number {
    if (!this.equipo || this.equipo.partidos_jugados === 0) {
      return 0;
    }
    return (this.equipo.partidos_ganados / this.equipo.partidos_jugados) * 100;
  }
}
