import { Weapon } from "../Weapons";
import { Item } from "./Item";

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
    console.log("Inventário:");
    console.log("");
    console.log("Itens:");
    console.log("");
    this.items.forEach(item => {
      console.log(`${item.name} - Valor: ${item.value}`);
    });
    console.log("");
    console.log("Gold:");
    console.log("");
    console.log(this.gold);
    console.log("");
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