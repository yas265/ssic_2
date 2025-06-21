import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { Announcement } from '../announcement/announcement';
import { ManagerMessage } from '../manager-message/manager-message';
import { Faculty } from '../faculty/faculty';
import { Galary } from '../galary/galary';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Announcement, ManagerMessage, Faculty, Galary, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {

}
