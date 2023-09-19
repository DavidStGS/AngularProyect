export class DestinoViajes {
    private selected!: boolean;
    public servicios: string[];
    id: any;

    constructor(public nombre: string, public imageUrl: string) {
        this.servicios = ['Desayuno', 'Almuerzo', 'Merienda']
        this.selected = false;
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(ifSelected: boolean) {
        this.selected = ifSelected;
    }

}
