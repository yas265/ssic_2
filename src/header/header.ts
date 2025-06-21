import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-header',
  standalone : true,
  imports: [Dashboard, Nav],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
