import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { DestinoViajes } from '../model/destino-viajes.model';
import { DestinoApiModel } from '../model/destino-api.model';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css'],
})

export class ListaViajesComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViajes>;
  destinos: DestinoViajes[];

  ultimaSuscripcion: string;

  constructor(public DestinoApiModel: DestinoApiModel) {
    this.onItemAdded = new EventEmitter();
    this.destinos = [];
    this.ultimaSuscripcion = '';
  }

  ngOnInit() {
    this.destinos = this.DestinoApiModel.getAll();

    this.DestinoApiModel.getPreferidoObservable().subscribe(destino => {
      if (destino) {
        this.ultimaSuscripcion = (`Preferiste el destino: ${destino.nombre}`);
        console.log(this.ultimaSuscripcion);
      }
    });
  }
  agregado(d: DestinoViajes) {
    this.DestinoApiModel.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViajes) {
    this.DestinoApiModel.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
    const nombreDestino = e.nombre;
    this.ultimaSuscripcion = `Preferiste el destino: ${nombreDestino}`;
  }

  suscribirseALaNotificacion(viaje: string) {
    this.DestinoApiModel.suscribirseAViaje(viaje);
  }
}