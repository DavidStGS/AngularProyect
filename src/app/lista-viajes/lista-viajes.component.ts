import { Component } from '@angular/core';
import { DestinoViajes } from '../model/destino-viajes.model';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css']
})
export class ListaViajesComponent {
  destinos: DestinoViajes[];

  constructor() {
    this.destinos = []
  }

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinoViajes(nombre, url));
    return false;
  }

  elegir(ifSelected: DestinoViajes) {
    this.destinos.forEach((destino) => {
      destino.setSelected(false);
    });
    ifSelected.setSelected(true);
  }
}
