// import { Routes } from '@angular/router';
// import { Dashboard } from '../dashboard/dashboard';
// import { Nav } from '../nav/nav';
// import { GalaryView } from './Views/galary-view/galary-view';
// import { Home } from '../home/home';

// export const routes: Routes = [
// { path: '', component: Home},
// { path: 'nav', component: Nav},
// { path: 'galary', component: GalaryView } 
// ];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from '../home/home';
import { Nav } from '../nav/nav';
import { GalaryView } from './Views/galary-view/galary-view';

export const routes: Routes = [
  { path: '', component: Home},
{ path: 'nav', component: Nav},
{ path: 'galary', component: GalaryView }       // wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
