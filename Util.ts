import { Creator } from './Creator';
import { Stats } from './Stats';
import {
  Enemy,
  Gladimir,
  Edecio,
  Bruna,
  Angelo,
  Fishman,
  lilAngel,
  Demon,
  Bandit,
  Vampire,
  Goblin,
  Troll,
  Fairy,
} from './Non_Player/Enemy';
import { Skills } from './Skills';
import { Weapon } from './Weapons';
const prompt = require('prompt-sync')();
const write = prompt;

let mobs: Enemy[] = [];
let bosses: Enemy[] = [];

// Aplicando mobs ao array mobs:
mobs.push(
  new Goblin(),
  new Troll(),
  new Fairy(),
  new Bandit(),
  new Vampire(),
  new Fishman(),
  new lilAngel(),
  new Demon(),
);

// Aplicando os bosses ao array bosses:
bosses.push(new Gladimir(), new Edecio(), new Bruna(), new Angelo());

export class Inventory {
  public items: Item[];
  public gold: number;

  constructor() {
    this.items = [];
    this.gold = 0;
  }

  addItem(item: Item | Weapon): void {
    this.items.push(item);
  }

  removeItem(item: Item | Weapon): void {
    this.items = this.items.filter(i => i !== item);
  }

  hasItem(item: Item | Weapon): boolean {
    return this.items.includes(item);
  }

  showInventory(): void {
    console.log('Inventário:');
    console.log('');
    console.log('Itens:');
    console.log('');
    this.items.forEach(item => {
      console.log(item.name);
    });
    console.log('');
    console.log('Gold:');
    console.log('');
    console.log(this.gold);
    console.log('');
  }

  sellItem(item: Item | Weapon): void {
    this.removeItem(item);
    this.gold += item.value;
  }

  checkItem(item: Item | Weapon): boolean {
    return this.items.includes(item);
  }

  checkGold(item: Item | Weapon): boolean {
    return this.gold >= item.value;
  }

  checkInventory(item: Item | Weapon): boolean {
    return this.checkItem(item) && this.checkGold(item);
  }

  checkInventoryItem(item: Item | Weapon): boolean {
    return this.checkItem(item);
  }
}

export class Item {
  constructor(public name: string, public value: number) {}
}

export class Util {
  public stats: Stats;
  public inventory: Inventory;
  constructor() {
    this.stats = new Stats();
    this.inventory = new Inventory();
  }

  checkMaxHealth(creator: Creator): number {
    if (creator.stats.health > creator.stats.max_health) {
        creator.stats.health = creator.stats.max_health
    }
    return creator.stats.health;
}
  public static random(min: number, max: number){
    const value = min + Math.random() * (max - min);
    const rounded = Math.round(value);
    return rounded;
}
}
