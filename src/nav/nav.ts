import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone : true,
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
