import { Component } from '@angular/core';
import { MenuItem } from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: MenuItem[] = MENU_ITEMS;

}
export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'home',
    url: '/home'
  },
  {
    label: 'About',
    icon: 'info',
    url: '/about'
  },
  {
    label: 'Contact',
    icon: 'contact',
    url: '/contact'
  },
  {
    label: 'Blog',
    icon: 'blog',
    url: '/blog',
    children: [
      {
        label: 'Blog 1',
        icon: 'blog',
        url: '/blog/1'
      },
      {
        label: 'Blog 2',
        icon: 'blog',
        url: '/blog/2'
      },
      {
        label: 'Blog 3',
        icon: 'blog',
        url: '/blog/3'
      }
    ]
  }
]

