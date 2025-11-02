import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [
    SvgIconComponent,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  menuItems: NavBarItems[] = NAVBAR_ITEMS;
  constructor() {
    console.log(this.menuItems);
  }

  search() {
    console.log('hola');
  }

}

export const NAVBAR_ITEMS: NavBarItems[] = [
  {
    label: 'INICIO',
    icon: 'home',
    routes: '/home'
  },
  {
    label: 'HISTORIAL',
    icon: 'document',
    routes: '/historial'
  },
  {
    label: 'CONFIGURACION',
    icon: 'config',
    routes: '/config'
  },

];
interface NavBarItems {
  label: string;
  icon: string;
  routes: string;
}
