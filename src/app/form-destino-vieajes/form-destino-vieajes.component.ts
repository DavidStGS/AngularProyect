import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinoViajes } from '../model/destino-viajes.model';

@Component({
  selector: 'app-form-destino-vieajes',
  templateUrl: './form-destino-vieajes.component.html',
  styleUrls: ['./form-destino-vieajes.component.css']
})

export class FormDestinoVieajesComponent {
  @Output() onItemAdded: EventEmitter<DestinoViajes>;
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.formulario = this.fb.group({
      nombre: [''],
      url: ['']
    });
  }

  guardar(nombre: string, url: string): boolean {
    let d = new DestinoViajes(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
}
