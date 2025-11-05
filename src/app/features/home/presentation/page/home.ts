import { Component } from '@angular/core';
import { Navbar } from '@shared/components/navbar/navbar';
import { Layout } from '@shared/layouts/layout/internal-layout';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Layout,
    RouterModule
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {

}
