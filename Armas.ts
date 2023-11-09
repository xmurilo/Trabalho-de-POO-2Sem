enum RaridadeArma {
    Comum,
    Incomum,
    Raro,
    Épico,
    Lendário,
}

class Weapon {
    constructor(
        private _nome: string,
        private _dano: number,
        private _tipo: string,
        private _valor: number
    ) { }


    definirRaridade(dano: number): RaridadeArma {
        if (dano < 20) {
            return RaridadeArma.Comum;
        } else if (dano >= 20 && dano < 50) {
            return RaridadeArma.Incomum;
        } else if (dano >= 50 && dano < 60) {
            return RaridadeArma.Raro;
        } else if (dano >= 60 && dano < 80) {
            return RaridadeArma.Épico;
        } else if (dano > 80) {
            return RaridadeArma.Lendário;
        } else {
            return RaridadeArma.Comum;
        }
    }

    obterRaridadeString() {
        switch (this.definirRaridade(this._dano)) {
            case RaridadeArma.Comum:
                return "Comum";
            case RaridadeArma.Incomum:
                return "Incomum";
            case RaridadeArma.Raro:
                return "Raro";
            case RaridadeArma.Épico:
                return "Épico";
            case RaridadeArma.Lendário:
                return "Lendário";
        }
    }

    get nome() {
        return this._nome;
    }

    get dano() {
        return this._dano;
    }

    get tipo() {
        return this._tipo;
    }

    get raridade() {
        return this.obterRaridadeString();
    }

    get valor() {
        return this._valor;
    }
}

const espada = new Weapon("Espada", 50, "Corte", 100);
espada.definirRaridade(espada.dano);

