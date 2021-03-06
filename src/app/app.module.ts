import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ProduktService } from './shared/produkt-service.service';
import { CounterService } from './shared/counter-service.service';

import { AppComponent } from './app.component';
import { ProduktComponent } from './produkt/produkt.component';
import { ProduktListeComponent } from './produkt-liste/produkt-liste.component';
import { ProduktDetailsComponent } from './produkt-details/produkt-details.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktComponent,
    ProduktListeComponent,
    ProduktDetailsComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProduktService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
