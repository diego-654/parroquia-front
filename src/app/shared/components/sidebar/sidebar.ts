import { Component } from '@angular/core';
import { MenuItem } from './sidebar.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})

export class Sidebar {
  title = 'PARROQUIA LA PURISIMA\nCONCEPCION';

  menuPartidas: MenuItem[] = MENU_PARTIDAS;
  menuNotificacion: MenuItem[] = MENU_NOTIFICACION;

  showPartidas = true;
  showNotificacion = true;

  onLogout() {
    console.log('Cerrar Sesión');
  }
}


export const MENU_PARTIDAS: MenuItem[] = [
  {
    label: 'Bautizo',
    url: '/bautizo' },
  {
    label: 'Matrimonio',
    url: '/matrimonio'
  },
  {
    label: 'Primera Comunión',
    url: '/primera-comunion'
  },
  {
    label: 'Confirmación',
    url: '/confirmacion'
  },
];

export const MENU_NOTIFICACION: MenuItem[] = [
  {
    label: 'Matrimonio',
    url: '/notificacion/matrimonio'
  },
  {
    label: 'Proclama',
    url: '/notificacion/proclama'
  },
];
