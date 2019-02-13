import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProduktDetailsComponent } from './produkt-details/produkt-details.component';
import { ProduktListeComponent } from './produkt-liste/produkt-liste.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produktliste',
    component: ProduktListeComponent
  },
  {
    path: 'produktliste/:id',
    component: ProduktDetailsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
