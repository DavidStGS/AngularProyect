import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinoViajes } from '../model/destino-viajes.model';

@Component({
  selector: 'app-form-destino-vieajes',
  templateUrl: './form-destino-vieajes.component.html',
  styleUrls: ['./form-destino-vieajes.component.css']
})

export class FormDestinoVieajesComponent {

  @Output() onItemAdded: EventEmitter<DestinoViajes>;
  fb: FormGroup;

  constructor(fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fb = fb.group({
      nombre: ['', Validators.required],
      url: ['']
    });

    this.fb.valueChanges.subscribe((form: any) => {
      console.log('cambio el formulario: ', form);
    });
  }

  guardar(nombre: string, url: string): boolean {
    let d = new DestinoViajes(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
}

