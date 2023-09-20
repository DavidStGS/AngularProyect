import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinoViajes } from '../model/destino-viajes.model';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax';


@Component({
  selector: 'app-form-destino-vieajes',
  templateUrl: './form-destino-vieajes.component.html',
  styleUrls: ['./form-destino-vieajes.component.css']
})

export class FormDestinoVieajesComponent implements OnInit {

  searchResults: string[] = [];

  ngOnInit() {
    const elemNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemNombre, 'input')
      .pipe(
        map((e: Event) => (e.target as HTMLInputElement).value),
        filter(text => (text as string).length > 4),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(() => ajax<string[]>('/assets/datos.json'))
      )
      .subscribe((ajaxResponse: AjaxResponse<string[]>) => {
        this.searchResults = ajaxResponse.response;
      });
  }
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

