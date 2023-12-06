import { Creator } from "./Creator";
import { Enemy } from "./Non_Player/Enemy";
import { Util } from "./Util";

export class Skills {
  public creator: Creator;

  constructor(creator: Creator) {
    this.creator = creator;
  }
}

export class BerserkImpact extends Skills {
  constructor(creator: Creator) {
    super(creator);
  }

  public atack(creator: Creator, enemy: Enemy): void {
    let util = new Util(creator);

    if (creator.stats.mana >= 10 && creator.stats.stamina >= 10) {
      let damage = 30 + creator.stats.strength - enemy.stats.armor;
      if (enemy.stats.health > 0) {
        enemy.stats.health -= damage;
        console.log(
          `Você deu ${damage} de dano no inimigo e foi parar atrás dele, utilizando a habilidade Berserk Impact!`,
        );
        console.log(`O inimigo agora tem ${enemy.stats.health} de vida!`);
      } else {
        enemy.stats.health = 0;
        console.log(`Você matou o ${enemy.name}!`);
      }
      creator.stats.stamina -= 40;
      creator.stats.mana -= 30;
      creator.stats.health += 10;
      util.checkMaxHealth(creator);
    } else {
      console.log("Você não tem mana ou stamina suficiente para usar essa habilidade!");
    }
  }
}

export class DesintegratorBolt extends Skills {
  constructor(creator: Creator) {
    super(creator);
  }

  public atack(creator: Creator, enemy: Enemy): void {
    if (creator.stats.mana >= 10 && creator.stats.stamina >= 10) {
      let damage = 40 + creator.stats.intelligence - enemy.stats.armor;
      if (enemy.stats.health > 0) {
        enemy.stats.health -= damage;
        console.log(
          `Você deu ${damage} de dano no inimigo, utilizando a habilidade Raio Desintegrador!`,
        );
        console.log(`O inimigo agora tem ${enemy.stats.health} de vida!`);
      } else {
        enemy.stats.health = 0;
        console.log(`Você matou o ${enemy.name} com um Raio imenso que veio do céu!`);
        console.log(`Tu é o bichão mesmo em!`);
      }
      creator.stats.stamina -= 20;
      creator.stats.mana -= 40;
    }
  }
}

export class IlusionDart extends Skills {
  constructor(creator: Creator) {
    super(creator);
  }

  public atack(creator: Creator, enemy: Enemy): void {
    if (creator.stats.mana >= 10 && creator.stats.stamina >= 10) {
      let damage = 25 + creator.stats.dexterity - enemy.stats.armor;
      if (enemy.stats.health > 0) {
        enemy.stats.health -= damage;
        enemy.stats.armor -= 10;
        console.log(
          `Você deu ${damage} de dano no inimigo, utilizando a habilidade Flecha Ilusória!`,
        );
        console.log(`O inimigo agora tem ${enemy.stats.health} de vida!`);
      } else {
        enemy.stats.health = 0;
        console.log(`Você matou o ${enemy.name} com uma flecha ilusória!`);
        console.log(`Você criou clones de si para atacar o inimigo, confundindo-o!`);
      }
      creator.stats.stamina -= 10;
      creator.stats.mana -= 20;
    }
  }
}

export class DeathVision extends Skills {
  constructor(creator: Creator) {
    super(creator);
  }

  public atack(creator: Creator, enemy: Enemy): void {
    const util = new Util(creator);
    if (creator.stats.mana >= 10 && creator.stats.stamina >= 10) {
      let damage = 40 + creator.stats.dexterity - enemy.stats.armor;
      if (enemy.stats.health > 0) {
        enemy.stats.health -= damage;
        enemy.stats.armor -= 10;
        console.log(
          `Você deu ${damage} de dano no inimigo, utilizando a habilidade Visão da Morte!`,
        );
        console.log(`O inimigo agora tem ${enemy.stats.health} de vida!`);
      } else {
        enemy.stats.health = 0;
        console.log(`Você matou o ${enemy.name} com uma Visão da Morte!`);
        console.log(`Você viu a morte do inimigo e o matou com um golpe fatal!`);
      }
      creator.stats.stamina -= 40;
      creator.stats.mana -= 20;
      creator.stats.health += 20;
    }
  }
}
