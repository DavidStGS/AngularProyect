import { DestinoViajes } from "./destino-viajes.model";
import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export class DestinoApiModel {
    private preferidoSubject = new BehaviorSubject<DestinoViajes | null>(null);
    private suscripcionSubject = new Subject<string>();
    destinos: DestinoViajes[];

    constructor() {
        this.destinos = [];
    }


    add(d: DestinoViajes) {
        this.destinos.push(d);
    }
    getAll() {
        return this.destinos;
    }

    getPreferidoObservable() {
        return this.preferidoSubject.asObservable();
    }

    suscribirseAViaje(viaje: string) {
        this.suscripcionSubject.next(`Te has suscrito a ${viaje}`);
    }

    marcarComoPreferido(destino: DestinoViajes) {
        this.preferidoSubject.next(destino);
    }

    getSuscripcionObservable() {
        return this.suscripcionSubject.asObservable();
    }
}

