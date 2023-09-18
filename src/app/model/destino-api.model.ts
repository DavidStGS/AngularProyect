import { DestinoViajes } from "./destino-viajes.model";
import { Subject, BehaviorSubject } from "rxjs";

export class DestinoApiModel {
    destinos: DestinoViajes[];
    current: Subject<DestinoViajes> = new BehaviorSubject<DestinoViajes>(destinoPredeterminado);

    constructor() {
        this.destinos = [];
    }

    // Resto del código...

    add(d: DestinoViajes) {
        this.destinos.push(d);
    }

    getAll(): DestinoViajes[] {
        return this.destinos;
    }

    GetById(id: string): DestinoViajes {
        return this.destinos.filter(function (d) { return d.id.toString() === id; })[0];
    }
}

// Definir una instancia predeterminada
const destinoPredeterminado = new DestinoViajes("Nombre Predeterminado", "URL Predeterminada");
