import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
/**
* Número de items a renderizar. Si recibes un array en lugar de un número,
* es fácil adaptarlo: acepta (items: any[] | number) y normalizar.
*/

@Input() count: number = 0;
@Input() label: string = '';

/**
* Opcional: columnas fijas (si no se setea, el layout usará grid-auto-fit).
*/
@Input() columns: number | null = null;


/** Emite el índice del item cuando se hace click sobre él */
@Output() itemClick = new EventEmitter<number>();


/** Genera un array de índices [0..count-1] para ngFor */
get items() {
return Array.from({ length: Math.max(0, Math.floor(this.count || 0)) }, (_, i) => i);
}


onItemClick(i: number) {
this.itemClick.emit(i);
}
}
