import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Navbar } from "@shared/components/navbar/navbar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-internal-layout',
  imports: [
    CommonModule,
    Sidebar,
    Navbar,
    RouterModule
],
  templateUrl: './internal-layout.html',
  styleUrl: './internal-layout.scss',
})
export class Layout {


}



