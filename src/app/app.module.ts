import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaViajesComponent } from './lista-viajes/lista-viajes.component';
import { DestinoViajesComponent } from './destino-viajes/destino-viajes.component';
import { DestinoComponent } from './destino/destino.component';

const rutas: Routes = [
  { path: '', component: ListaViajesComponent },
  { path: 'destinos', component: DestinoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListaViajesComponent,
    DestinoViajesComponent,
    DestinoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }