import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { DestinoViajes } from '../model/destino-viajes.model';
import { DestinoApiModel } from '../model/destino-api.model';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css'],

})

export class ListaViajesComponent {

  @Output() onItemAdded: EventEmitter<DestinoViajes>;
  //destinos: DestinoViaje[];

  constructor(public DestinoApiModel: DestinoApiModel) {
    this.onItemAdded = new EventEmitter();
  }


  agregado(d: DestinoViajes) {
    this.DestinoApiModel.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViajes) {
    //desmarcar todos los demas en en array de elegidos
    //this.destinos.forEach(function (x) {x.setSelected(false); });
    //se marca el elegido
    //d.setSelected(true);
    this.DestinoApiModel.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
  }
}
