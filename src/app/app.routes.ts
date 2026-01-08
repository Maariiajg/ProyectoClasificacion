import { Routes } from '@angular/router';
import { Clasificacion } from '../components/clasificacion/clasificacion';
import { EquipoDetalle } from '../components/equipo-detalle/equipo-detalle';

export const routes: Routes = [ //rutas para redirigir a la información de un equipo pulsando el nombre
    { path: '', component: Clasificacion },
    { path: 'equipo/:id', component: EquipoDetalle }
];
