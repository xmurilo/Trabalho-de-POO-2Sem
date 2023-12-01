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
    private _value: number,
  ) {}

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
        return 'Comum';
      case weaponRarity.Incomum:
        return 'Incomum';
      case weaponRarity.Rare:
        return 'Rare';
      case weaponRarity.Epic:
        return 'Epic';
      case weaponRarity.Legendary:
        return 'Legendary';
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

  increaseDamage(amount: number): void {
    this._damage += amount;
  }
  increaseValue(amount: number): void {
    this._value += amount;
  }
}

const armas: Weapon[] = [
  new Weapon('Arco Longo', 45, 'Perfuração', 80),
  new Weapon('Maça de Guerra', 55, 'Impacto', 120),
  new Weapon('Lança', 30, 'Perfuração', 50),
  new Weapon('Machado de Batalha', 70, 'Corte', 100),
  new Weapon('Florete', 35 , 'Perfuração', 60),
  new Weapon('Besta', 40, 'Perfuração', 90),
  new Weapon('Clava Espinhosa', 50, 'Impacto', 70),
  new Weapon('Cajado de Curandeiro', 25, 'Magia', 110),
  new Weapon('Espada Bastarda', 60, 'Corte', 95),
  new Weapon('Flechas da Voracidade', 48, 'Perfuração', 75),
]

export const randomWeapon = (): Weapon => {
  const randomIndex = Math.floor(Math.random() * armas.length);
  return armas[randomIndex];
}

;

