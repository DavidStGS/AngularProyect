export class DestinoViajes {
    private selected!: boolean;
    public servicios: string[];

    constructor(public nombre: string, public imageUrl: string) {
        this.servicios = ['Desayuno', 'Almuerzo', 'Merienda']
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(ifSelected: boolean) {
        this.selected = ifSelected;
    }
}