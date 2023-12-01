enum weaponRarity {
  Comum,
  Incomum,
  Rare,
  Epic,
  Legendary,
}

// Classe Weapon representa uma arma no jogo
export class Weapon {
  private _rarity: weaponRarity = weaponRarity.Comum; // Armazena a raridade da arma

  // Construtor da classe Weapon
  constructor(
    private readonly _name: string, // Nome da arma (valor estático)
    private _damage: number, // Dano da arma (pode ser modificado)
    private _value: number // Valor da arma (pode ser modificado)
  ) {
    this.defineRarity(); // Chama o método para definir a raridade com base no dano
  }

  // Método privado para definir a raridade com base no dano
  private defineRarity(): void {
    if (this._damage < 20) {
      this._rarity = weaponRarity.Comum;
    } else if (this._damage < 50) {
      this._rarity = weaponRarity.Incomum;
    } else if (this._damage < 60) {
      this._rarity = weaponRarity.Rare;
    } else if (this._damage < 80) {
      this._rarity = weaponRarity.Epic;
    } else {
      this._rarity = weaponRarity.Legendary;
    }
  }

  // Método para obter uma string representando a raridade da arma
  getRarityString(): string {
    switch (this._rarity) {
      case weaponRarity.Comum:
        return 'Comum';
      case weaponRarity.Incomum:
        return 'Incomum';
      case weaponRarity.Rare:
        return 'Rara';
      case weaponRarity.Epic:
        return 'Epica';
      case weaponRarity.Legendary:
        return 'Legendaria';
    }
  }

  // Getter para obter o nome da arma
  get name() {
    return this._name;
  }

  // Getter para obter o dano da arma
  get damage() {
    return this._damage;
  }


  // Getter para obter a raridade da arma
  get raridade() {
    return this.getRarityString();
  }

  // Getter para obter o valor da arma
  get value() {
    return this._value;
  }

  // Método para aumentar o dano da arma
  increaseDamage(amount: number): void {
    this._damage += amount;
    this.defineRarity(); // Recalcula a raridade após a modificação do dano
  }

  // Método para aumentar o valor da arma
  increaseValue(amount: number): void {
    this._value += amount;
  }
}

// Lista de armas no jogo
const armas: Weapon[] = [
  new Weapon('Arco Longo', 45, 80),
  new Weapon('Arco Curto', 25, 40),
  new Weapon('Maça de Guerra', 55, 120),
  new Weapon('Cajado', 20, 30),
  new Weapon('Espada Bastarda', 60, 150),
  new Weapon('Espada Longa', 75, 100),
  new Weapon('Machado de Batalha', 35, 80),
  new Weapon('Lança', 30, 60),
  new Weapon('Adaga', 15, 20),
  new Weapon('Porrete', 10, 10),
];

// Função para obter uma arma aleatória da lista
export const randomWeapon = (): Weapon => {
  const randomIndex = Math.floor(Math.random() * armas.length);
  return armas[randomIndex];
};
