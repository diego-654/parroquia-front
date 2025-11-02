import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/layouts/layout/layout';
import { Navbar } from "./shared/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Layout,
    Navbar,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nombre-del-proyecto');
}
