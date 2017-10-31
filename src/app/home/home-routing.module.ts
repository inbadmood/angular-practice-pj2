import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { siteRouter } from '../site/site.routing';



const routes: Routes = [
  { path: 'home', component: HomeComponent, children: siteRouter }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
