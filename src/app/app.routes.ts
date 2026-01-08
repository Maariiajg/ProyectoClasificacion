import { Routes } from '@angular/router';
import { Clasificacion } from '../components/clasificacion/clasificacion';
import { Formulario } from '../components/formulario/formulario';
import { EquipoDetalle } from '../components/equipo-detalle/equipo-detalle';

export const routes: Routes = [
  { path: '', component: Clasificacion },
  { path: 'clasificacion', component: Clasificacion },  // ← NUEVA
  { path: 'formulario', component: Formulario },       // ← NUEVA
  { path: 'equipo/:id', component: EquipoDetalle },    // TU RUTA EXISTENTE
  { path: '**', redirectTo: '/clasificacion' }         // ← BUENA PRÁCTICA
];
