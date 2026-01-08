import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Formulario } from '../components/formulario/formulario';
import { Clasificacion } from '../components/clasificacion/clasificacion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Formulario,
    Clasificacion
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyectoClasificacion');
}
