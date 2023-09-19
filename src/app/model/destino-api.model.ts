import { DestinoViajes } from "./destino-viajes.model";

export class DestinoApiModel {
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
}

