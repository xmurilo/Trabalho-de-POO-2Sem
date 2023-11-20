enum weaponRarity {
    Comum,
    Incomum,
    Rare,
    Epic,
    Legendary,
}

export class Weapon {
    constructor(
        private _name: string,
        private _damage: number,
        private _type: string,
        private _value: number
    ) { }


    defineRarity(damage: number): weaponRarity {
        if (damage < 20) {
            return weaponRarity.Comum;
        } else if (damage >= 20 && damage < 50) {
            return weaponRarity.Incomum;
        } else if (damage >= 50 && damage < 60) {
            return weaponRarity.Rare;
        } else if (damage >= 60 && damage < 80) {
            return weaponRarity.Epic;
        } else if (damage > 80) {
            return weaponRarity.Legendary;
        } else {
            return weaponRarity.Comum;
        }
    }

    getRarityString() {
        switch (this.defineRarity(this._damage)) {
            case weaponRarity.Comum:
                return "Comum";
            case weaponRarity.Incomum:
                return "Incomum";
            case weaponRarity.Rare:
                return "Rare";
            case weaponRarity.Epic:
                return "Epic";
            case weaponRarity.Legendary:
                return "Legendary";
        }
    }

    get name() {
        return this._name;
    }

    get damage() {
        return this._damage;
    }

    get type() {
        return this._type;
    }

    get raridade() {
        return this.getRarityString();
    }

    get value() {
        return this._value;
    }
}

const espada = new Weapon("Espada", 50, "Corte", 100);
espada.defineRarity(espada.damage);

