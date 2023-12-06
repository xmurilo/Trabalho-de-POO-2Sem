const prompt = require('prompt-sync')();
const write = prompt;
import { Inventory } from '../Inventory/Inventory';



export abstract class City {
  public inventory: Inventory;
  constructor() {
    this.inventory = new Inventory();
  }

  public abstract services(inventory: Inventory): void;
}
