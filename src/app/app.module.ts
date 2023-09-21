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
import { DestinosViajesEffects, DestinosViajesState, initializeDestinosViajesState, reducerDestinosViajes } from './model/destino-viajes-state.model';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

const rutas: Routes = [
  { path: '', component: ListaViajesComponent },
  { path: 'destinos', component: DestinoComponent }
]

export interface AppState {
  destinos: DestinosViajesState;
}

const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};

let reducersInitialState = {
  destinos: initializeDestinosViajesState()
}

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
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(
      reducers,
      { initialState: reducersInitialState }
    ),
    EffectsModule.forRoot([DestinosViajesEffects])
  ],
  providers: [
    DestinoApiModel
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }