import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaViajesComponent } from './lista-viajes/lista-viajes.component';
import { DestinoViajesComponent } from './destino-viajes/destino-viajes.component';
import { DestinoComponent } from './destino/destino.component';
import { FormDestinoVieajesComponent } from './form-destino-vieajes/form-destino-vieajes.component';
import { DestinoApiModel } from './model/destino-api.model';


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
    FormDestinoVieajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DestinoApiModel
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }