import { Creator } from "./Creator";
import { Inventory } from "./Inventory/Inventory";
import { Stats } from "./Stats";
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
} from "./Non_Player/Enemy";
import { Skills } from "./Skills";

const prompt = require("prompt-sync")();
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

export class Util {
  public stats: Stats;
  public inventory: Inventory;
  constructor() {
    this.stats = new Stats();
    this.inventory = new Inventory();
  }

  checkMaxHealth(creator: Creator): number {
    if (creator.stats.health > creator.stats.max_health) {
      creator.stats.health = creator.stats.max_health;
    }
    return creator.stats.health;
  }
  public static random(min: number, max: number) {
    const value = min + Math.random() * (max - min);
    const rounded = Math.round(value);
    return rounded;
  }
}
