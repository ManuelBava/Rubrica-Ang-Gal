export class Contatto {
    nome = "";
    cognome = "";
    telefono = "";

    constructor(n: string, c: string, t: string) {
        this.nome =  n;
        this.cognome = c;
        this.telefono = t;
    }
}