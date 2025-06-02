import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { Faculty } from '../faculty/faculty';
import { CommonModule } from '@angular/common';
import { Nav } from '../nav/nav';
import { Banner } from '../banner/banner';
import { Footer } from '../footer/footer';
import { Galary } from '../galary/galary';
import { Announcement } from '../announcement/announcement';
import { ManagerMessage } from '../manager-message/manager-message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, Faculty, Nav, Banner,Footer, Galary, Announcement, ManagerMessage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ssic';
}
