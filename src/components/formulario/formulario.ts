import { Component } from '@angular/core';
import { Equipo } from '../../app/models/equipo';
import { FormsModule } from '@angular/forms';
import { Liga } from '../../app/services/liga';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {

  equipos: Equipo[] = [];

  equipoLocalId!: number;
  equipoVisitanteId!: number;
  golesLocal!: number;
  golesVisitante!: number;

  error: string = '';

  constructor(private liga: Liga) {
    this.equipos = this.liga.equipos;
  }

  enviar(): void {

    if (this.equipoLocalId === this.equipoVisitanteId) {
      this.error = 'Los equipos no pueden ser iguales';
      return;
    }

    if (
      this.golesLocal < 0 ||
      this.golesVisitante < 0 ||
      this.golesLocal === undefined ||
      this.golesVisitante === undefined
    ) {
      this.error = 'Los goles deben ser números válidos';
      return;
    }

    try {
      this.liga.añadirPartido(
        this.equipoLocalId,
        this.equipoVisitanteId,
        this.golesLocal,
        this.golesVisitante
      );

      this.error = '';
      this.resetFormulario();

    } catch (e: any) {
      this.error = e.message;
    }
  }

  private resetFormulario(): void {
    this.equipoLocalId = undefined as any;
    this.equipoVisitanteId = undefined as any;
    this.golesLocal = undefined as any;
    this.golesVisitante = undefined as any;
  }

}
