import { DestinoViajes } from "./destino-viajes.model";
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export class DestinoApiModel {
    public preferidoSubject = new BehaviorSubject<DestinoViajes | null>(null);
    public suscripcionSubject = new Subject<string>();
    destinos: DestinoViajes[];

    constructor() {
        this.destinos = [];
    }


    add(d: DestinoViajes) {
        this.destinos.push(d);
    }

    getAll(): DestinoViajes[] {
        return this.destinos;
    }

    getById(id: string): DestinoViajes {
        return this.destinos.filter(function (d) { return d.id.toString() === id; })[0];
    }

    elegido(d: DestinoViajes) {
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.preferidoSubject.next(d);
    }

    marcarComoPreferido(destino: DestinoViajes) {
        this.preferidoSubject.next(destino);
    }

    getSuscripcionObservable() {
        return this.suscripcionSubject.asObservable();
    }
}

