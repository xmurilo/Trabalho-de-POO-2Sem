import { Creator } from "../Creator";
//Item generico
export class Item {
  constructor(public name: string, public value: number) {}
}

// Item de cura

export class HealingItem extends Item {
  constructor(name: string, price: number, public heal: number) {
    super(name, price);
  }

  useItem(creator: Creator) {
    creator.stats.health += this.heal;
  }
}
