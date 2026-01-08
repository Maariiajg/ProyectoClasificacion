import { Component } from '@angular/core';
import { Router } from '@angular/router';  // ← AÑADIDO

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = 'Clasificación Liga';
  subtitulo = 'Proyecto Angular';
  menuActivo: 'clasificacion' | 'formulario' | 'ninguno' = 'clasificacion';

  constructor(private router: Router) {}  // ← AÑADIDO

  seleccionar(menu: 'clasificacion' | 'formulario') {
    this.menuActivo = menu;
    
    // ← CAMBIADO: navegación real
    if (menu === 'clasificacion') {
      this.router.navigate(['/clasificacion']);
    } else {
      this.router.navigate(['/formulario']);
    }
  }
}
