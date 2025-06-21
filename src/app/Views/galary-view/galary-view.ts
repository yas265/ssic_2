import { Component } from '@angular/core';
import { Galary } from '../../../galary/galary';
import { Header } from '../../../header/header';
import { Footer } from '../../../footer/footer';

@Component({
  selector: 'app-galary-view',
  imports: [Galary, Header, Footer],
  templateUrl: './galary-view.html',
  styleUrl: './galary-view.css'
})
export class GalaryView {

}
