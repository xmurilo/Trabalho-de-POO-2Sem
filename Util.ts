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
  Murilao,
} from "./Non_Player/Enemy";
import { Combat } from "./Combat";

const prompt = require("prompt-sync")();

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
bosses.push(new Gladimir(), new Edecio(), new Bruna(), new Murilao(), new Angelo());

export class Util {
  public stats: Stats;
  public inventory: Inventory;
  public combat: Combat;
  public creator: Creator;
  constructor(creator: Creator, inventory?: Inventory) {
    this.stats = new Stats();
    this.creator = new Creator();
    this.inventory = inventory || new Inventory();
    this.combat = new Combat(creator, this.inventory);
  }

  checkMaxHealth(creator: Creator): number {
    if (creator.stats.health > creator.stats.max_health) {
      creator.stats.health = creator.stats.max_health;
    }
    return creator.stats.health;
  }

  checkMaxMana(creator: Creator): number {
    if (creator.stats.mana > creator.stats.max_mana) {
      creator.stats.mana = creator.stats.max_mana;
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
    return console.log(
      `====Status====
      Vida: ${creator.stats.health}/${creator.stats.max_health}
      Força: ${creator.stats.strength}
      Stamina: ${creator.stats.stamina}/${creator.stats.max_stamina}
      Mana: ${creator.stats.mana}/${creator.stats.max_mana}
      Inteligência: ${creator.stats.intelligence}
      Destreza: ${creator.stats.dexterity}
      Armadura: ${creator.stats.armor}
      Nivel: ${creator.stats.level}
      Xp: ${creator.stats.xp}/${creator.stats.max_xp}`,
    );
  }

  rest(creator: Creator) {
    
    if (creator.stats.health < creator.stats.max_health) {
      creator.stats.health += creator.stats.max_health - creator.stats.max_health * 0.2;
      this.checkMaxHealth(creator);
    }
    if (creator.stats.mana < creator.stats.max_mana - creator.stats.max_mana * 0.2) {
      creator.stats.mana += creator.stats.max_mana - creator.stats.max_mana * 0.2;
      this.checkMaxMana(creator);
    }
    if (creator.stats.stamina < creator.stats.max_stamina ) {
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

  travel(creator: Creator, inventory: Inventory) {
    console.log("");
    let choice = prompt(
      "Você deseja viajar para a Cripta dos Antigos Reis (cripta), Abismo da Perdição (abismo), Torre da Magia Esquecida (torre), Labirinto dos Espíritos Perdidos (labirinto) ou SENAC? ",
    ).toLowerCase();
    console.log("");
    let north: boolean = true;
    let south: boolean = true;
    let east: boolean = true;
    let west: boolean = true;

    switch (choice) {
      case "cripta":
        console.log("Você viajou para a Cripta dos Antigos Reis!");
        console.log("");
        if (bosses[0].stats.health > 0) {
          if (creator.stats.level >= 2) {
            this.combat.mobFight(creator, bosses[0], inventory);
            north = false;
          } else {
            console.log("Você não tem nível suficiente para lutar contra o Boss!");
          }
        } else {
          console.log("Você já derrotou esse Boss!");
        }
        break;

      case "abismo":
        console.log("Você viajou para o Abismo da Perdição!");
        console.log("");
        if (bosses[1].stats.health > 0) {
          if (creator.stats.level >= 2) {
            this.combat.mobFight(creator, bosses[1], inventory);
            south = false;
          } else {
            console.log("Você não tem nível suficiente para lutar contra o Boss!");
          }
        } else {
          console.log("Você já derrotou esse Boss!");
        }
        break;

      case "torre":
        console.log("Você viajou para a Torre da Magia Esquecida!");
        console.log("");
        if (bosses[2].stats.health > 0) {
          if (creator.stats.level >= 2) {
            this.combat.mobFight(creator, bosses[2], inventory);
            east = false;
          } else {
            console.log("Você não tem nível suficiente para lutar contra o Boss!");
          }
        } else {
          console.log("Você já derrotou esse Boss!");
        }
        break;

      case "labirinto":
        console.log("Você viajou para o Labirinto dos Espíritos Perdidos!");
        console.log("");
        if (bosses[3].stats.health > 0) {
          if (creator.stats.level >= 2) {
            this.combat.mobFight(creator, bosses[3], inventory);
            west = false;
          } else {
            console.log("Você não tem nível suficiente para lutar contra o Boss!");
          }
        } else {
          console.log("Você já derrotou esse Boss!");
        }
        break;

      case "senac":
        
        if (bosses[4].stats.health > 0) {
          if (creator.stats.level >= 3) {
            console.log("Você derrotou todos os Bosses, agora você pode enfrentar o Boss Final!");
            console.log("");
            console.log("Seja MASSACRADO HAHAHAHAHA");
            this.combat.mobFight(creator, bosses[4], inventory);
            if (bosses[4].stats.health <= 0) {
              console.log(`Você derrotou o Boss Final ${bosses[4].name} e salvou o mundo!`);
              process.exit();
            }
          } else {
            console.log("Você não tem nível suficiente para lutar contra o Boss!");
          }
        } else {
          console.log("Você já derrotou esse Boss!");
        }
        break;

      default:
        console.log("Você não escolheu uma direção válida!");
        console.log("");
        break;
    }
  }

  explore(creator: Creator, inventory: Inventory) {
    let randomEnemy = Util.random(0, mobs.length - 1);
    if (mobs[randomEnemy].stats.health <= 0) {
      mobs[randomEnemy].stats.health = mobs[randomEnemy].stats.max_health;
    }
    this.combat.mobFight(creator, mobs[randomEnemy], inventory);
  }

  giveUp() {
    const phases = [
      "Lembre-se que você é um guerreiro e não um covarde!",
      "Se precisa de ajuda, procure um amigo!",
      "Lembre-se, até os heróis tiram um cochilo antes de voltar à batalha!",
    ];
    console.log("Você se suicidou!");
    console.log(phases[Math.floor(Math.random() * phases.length)]);
    process.exit();
  }
}
