import { Component, EventEmitter, OnInit, } from '@angular/core';
import { DestinoViajes } from '../model/destino-viajes.model';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css'],

})

export class ListaViajesComponent {

  destinos: DestinoViajes[];

  constructor() {
    this.destinos = []
  }

  agregado(d: DestinoViajes) {
    this.destinos.push(d);
  }

  elegir(ifSelected: DestinoViajes) {
    this.destinos.forEach((destino) => {
      destino.setSelected(false);
    });
    ifSelected.setSelected(true);
  }
}
