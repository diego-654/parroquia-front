import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/layouts/layout/internal-layout';
import { Navbar } from "./shared/components/navbar/navbar";
import Home from '@features/home/presentation/page/home';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nombre-del-proyecto');
}
