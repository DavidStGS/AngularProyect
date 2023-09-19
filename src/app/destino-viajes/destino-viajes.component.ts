import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { DestinoViajes } from '../model/destino-viajes.model';

@Component({
  selector: 'app-destino-viajes',
  templateUrl: './destino-viajes.component.html',
  styleUrls: ['./destino-viajes.component.css']
})
export class DestinoViajesComponent {

  @Input() destino!: DestinoViajes;
  @Input('idx') posicion!: number;
  @HostBinding('class') cssClass = 'col-md-4 pb-4';
  @Output() clicked: EventEmitter<DestinoViajes>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }
}
