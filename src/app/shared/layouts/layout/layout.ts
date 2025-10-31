import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    Sidebar,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {


}



