import { Injectable } from "@angular/core";
import { DestinoViajes } from "./destino-viajes.model";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Action, ActionReducer } from "@ngrx/store";

export interface DestinosViajesState {
    items: DestinoViajes[];
    loading: boolean;
    favorito: DestinoViajes;
}

export const initializeDestinosViajesState = function () {
    return {
        items: [],
        loading: false,
        favorito: null
    };
}

export enum DestinosViajesActionTypes {
    NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
    ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito',

}

export class NuevoDestinoAction implements Action {
    type = DestinosViajesActionTypes.NUEVO_DESTINO;
    constructor(public destino: DestinoViajes) { }
}

export class ElegidoFavoritoAction implements Action {
    type = DestinosViajesActionTypes.ELEGIDO_FAVORITO;
    constructor(public destino: DestinoViajes) { }
}

export type DestinosViajesActions = NuevoDestinoAction | ElegidoFavoritoAction;

//reducers
export function reducerDestinosViajes(
    state: DestinosViajesState,
    action: DestinosViajesActions
): DestinosViajesState {
    switch (action.type) {
        case DestinosViajesActionTypes.NUEVO_DESTINO: {
            return {
                ...state,
                items: [...state.items, (action as NuevoDestinoAction).destino]
            };
        }
        case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
            state.items.forEach(x => x.setSelected(false));
            const fav: DestinoViajes = (action as ElegidoFavoritoAction).destino;
            fav.setSelected(true);
            return {
                ...state,
                favorito: fav
            };
        }
        default: {
            return state
        }

    }
}

//effects
@Injectable()
export class DestinosViajesEffects {
    nuevoAgregado$: Observable<Action> = this.actions$.pipe(
        ofType(DestinosViajesActionTypes.NUEVO_DESTINO),
        map((action: NuevoDestinoAction) => new ElegidoFavoritoAction(action.destino))
    );
    constructor(private actions$: Actions) { }
}

