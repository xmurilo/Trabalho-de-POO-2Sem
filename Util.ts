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
import { Combat } from "./Combat";

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
  public combat: Combat;
  public creator: Creator;
  constructor(creator: Creator) {
    this.stats = new Stats();
    this.creator = new Creator();
    this.inventory = new Inventory();
    this.combat = new Combat(creator);
  }

  checkMaxHealth(creator: Creator): number {
    if (creator.stats.health > creator.stats.max_health) {
      creator.stats.health = creator.stats.max_health;
    }
    return creator.stats.health;
  }

  checkMaxMana(creator: Creator): number {
    if (creator.stats.mana > creator.stats.mana) {
      creator.stats.mana = creator.stats.mana;
    }
    return creator.stats.mana;
  }

  checkMaxStamina(creator: Creator): number {
    if (creator.stats.stamina > creator.stats.max_stamina) {
      creator.stats.stamina = creator.stats.max_stamina;
    }
    return creator.stats.stamina;
  }

  public static random(min: number, max: number) {
    const value = min + Math.random() * (max - min);
    const rounded = Math.round(value);
    return rounded;
  }
  showStats(creator: Creator): void {
    return console.log(creator.stats);
  }

  rest(creator: Creator) {
    if (creator.stats.health < creator.stats.max_health - creator.stats.max_health * 0.2) {
      creator.stats.health += creator.stats.max_health - creator.stats.max_health * 0.2;
      this.checkMaxHealth(creator);
    }
    if (creator.stats.mana < creator.stats.max_mana - creator.stats.max_mana * 0.2) {
      creator.stats.mana += creator.stats.max_mana - creator.stats.max_mana * 0.2;
      this.checkMaxMana(creator);
    }
    if (creator.stats.stamina < creator.stats.max_stamina - creator.stats.max_stamina * 0.2) {
      creator.stats.stamina += creator.stats.max_stamina - creator.stats.max_stamina * 0.2;
      this.checkMaxStamina(creator);
    }
    console.log("");
    console.log(
      "Você descansou e recuperou 20% de sua vida, mana e stamina, tome cuidado na sua jornada!",
    );
    console.log("");
    console.log(
      "Vida: " +
        creator.stats.health +
        " Mana: " +
        creator.stats.mana +
        " Stamina: " +
        creator.stats.stamina,
    );
    console.log("");
  }
  travel(creator: Creator) {}

  explore(creator: Creator) {
    let randomEnemy = Util.random(0, mobs.length - 1);
    if (mobs[randomEnemy].stats.health <= 0) {
      mobs[randomEnemy].stats.health = mobs[randomEnemy].stats.max_health;
    }
    this.combat.mobFight(creator, mobs[randomEnemy]);
  }

  giveUp() {
    const phases = [
      "Lembre-se que você é um guerreiro e não um covarde!",
      "Você não pode desistir agora!",
      "Se precisa de ajuda, procure um amigo!",
      "Lembre-se, até os heróis tiram um cochilo antes de voltar à batalha!",
    ];
    console.log("Você se suicidou!");
    console.log(phases[Math.floor(Math.random() * phases.length)]);
    process.exit();
  }
}
