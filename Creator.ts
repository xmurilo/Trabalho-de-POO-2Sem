import { Stats } from "./Stats";

const prompt = require("prompt-sync")();
const write = prompt;

export class Creator {
  public stats: Stats;

  nick: string = "";
  region: string = "";
  race: string = "";
  class: string = "";
  gold: number = 0;
  skills: string = "";

  constructor() {
    this.stats = new Stats();
  }

  // ---- Metodo para criar o Personagem

  characterCreator() {
    this.nick = write("Digite o nome do seu personagem: ");
    console.log("");
    console.log("¤*¨¨*¤.¸¸…¸.¤ Regiões do mundo de Eldorium ¤*¨¨*¤.¸¸…¸.¤");
    console.log("");
    console.log("1 - Reino de Arton (Região habitada por Humanos e Anões)");
    console.log("");
    console.log("2 - Floresta de Alahan (Região habitada por Elfos e Sylfos)");
    console.log("");
    console.log("3 - Ilhas Esquecidas (Região habitada por Tritões e Anjos)");
    console.log("");
    console.log("");
    this.region = write("¤*¨¨*¤.¸¸…¸.¤ Escolha a região que você quer nascer");

    // ESCOLHENDO A REGIÃO

    if (
      this.region == "1" ||
      this.region == "Arton" ||
      this.region == " Reino de Arton" ||
      this.region == "reino de arton"
    ) {
      console.log("");
      this.race = write(
        "¤*¨¨*¤.¸¸…¸.¤ Escolha a raça que você quer ser (Humano ou Anão)"
      ).toLowerCase();
      console.log("");
    } else if (
      this.region == "2" ||
      this.region == "Floresta de Alahan" ||
      this.region == "Alahan" ||
      this.region == "floresta de alahan"
    ) {
      console.log("");
      this.race = write(
        "¤*¨¨*¤.¸¸…¸.¤ Escolha a raça que você quer ser (Elfo ou Sylfo)"
      ).toLowerCase();
      console.log("");
    } else if (
      (this.region =
        "3" ||
        this.region == "Ilhas Esquecidas" ||
        this.region == "ilhas esquecidas")
    ) {
      console.log("");
      this.race = write(
        "¤*¨¨*¤.¸¸…¸.¤ Escolha a raça que você quer ser (Tritão ou Anjo)"
      ).toLowerCase();
      console.log("");
    } else {
      console.log("Digite a região corretamente!");
    }

    // ESCOLHENDO A RAÇA DE CADA REGIÃO
    // REINO DE ARTON

    if (
      this.region == "1" ||
      this.region == "Arton" ||
      this.region == " Reino de Arton" ||
      this.region == "reino de arton"
    ) {
      // HUMANO
      if (this.race == "humano") {
        this.stats.nivel = 1;
        this.stats.health = 100;
        this.stats.max_health = 120;
        this.stats.stamina = 50;
        this.stats.max_stamina = 50;
        this.stats.mana = 20;
        this.stats.max_mana = 20;
        this.stats.strength = 50;
        this.stats.dexterity = 50;
        this.stats.intelligence = 50;
        this.stats.armor = 10;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
      }
      // ANÃO
      else if (this.race == "anão") {
        this.stats.nivel = 1;
        this.stats.health = 80;
        this.stats.max_health = 80;
        this.stats.stamina = 30;
        this.stats.max_stamina = 30;
        this.stats.mana = 20;
        this.stats.max_mana = 20;
        this.stats.strength = 30;
        this.stats.dexterity = 65;
        this.stats.intelligence = 50;
        this.stats.armor = 10;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
      }
    }

    // FLORESTA DE ALAHAN

    if (
      this.region == "2" ||
      this.region == "Floresta de Alahan" ||
      this.region == "Alahan" ||
      this.region == "floresta de alahan"
    ) {
      // ELFO
      if (this.race == "elfo") {
        this.stats.nivel = 1;
        this.stats.health = 80;
        this.stats.max_health = 80;
        this.stats.stamina = 40;
        this.stats.max_stamina = 40;
        this.stats.mana = 60;
        this.stats.max_mana = 60;
        this.stats.strength = 30;
        this.stats.dexterity = 55;
        this.stats.intelligence = 70;
        this.stats.armor = 20;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
      }
      // Sylfo
      else if (this.race == "sylfo") {
        this.stats.nivel = 1;
        this.stats.health = 70;
        this.stats.max_health = 70;
        this.stats.stamina = 50;
        this.stats.max_stamina = 50;
        this.stats.mana = 80;
        this.stats.max_mana = 80;
        this.stats.strength = 20;
        this.stats.dexterity = 75;
        this.stats.intelligence = 90;
        this.stats.armor = 15;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
      }
    }

    // ILHAS ESQUECIDAS

    if (
      (this.region =
        "3" ||
        this.region == "Ilhas Esquecidas" ||
        this.region == "ilhas esquecidas")
    ) {
      // TRITÃO
      if (this.race == "tritão") {
        this.stats.nivel = 1;
        this.stats.health = 120;
        this.stats.max_health = 120;
        this.stats.stamina = 80;
        this.stats.max_stamina = 80;
        this.stats.mana = 60;
        this.stats.max_mana = 60;
        this.stats.strength = 70;
        this.stats.dexterity = 75;
        this.stats.intelligence = 40;
        this.stats.armor = 60;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
        
      }
      // ANJO
      else if (this.race == "anjo") {
        this.stats.nivel = 1;
        this.stats.health = 100;
        this.stats.max_health = 100;
        this.stats.stamina = 80;
        this.stats.max_stamina = 80;
        this.stats.mana = 90;
        this.stats.max_mana = 90;
        this.stats.strength = 40;
        this.stats.dexterity = 75;
        this.stats.intelligence = 60;
        this.stats.armor = 30;
        this.stats.xp = 0;
        this.stats.max_xp = 100;
      }
    }

    // ESCOLHENDO A CLASSE

    console.log("");
    console.log("¤*¨¨*¤.¸¸…¸.¤ Classes do mundo de Eldorium ¤*¨¨*¤.¸¸…¸.¤");
    console.log("");
    console.log("1 - Guerreiro");
    console.log("2 - Mago");
    console.log("3 - Arqueiro");
    console.log("4 - Assassino");
    console.log("");
    this.class = write(
      "¤*¨¨*¤.¸¸…¸.¤ Escolha a classe que você quer ser: "
    ).toLowerCase();

    // ATRIBUINDO OS ATRIBUTOS DE CADA CLASSE
    // GUERREIRO
    if (this.class == "1" || this.class == "guerreiro") {
      this.stats.strength += 20;
      this.stats.max_health += 11;
      this.stats.health += 11;
      this.stats.armor += 5;
      this.skills = "Impacto Berserker";
    }

    // MAGO
    else if (this.class == "2" || this.class == "mago") {
      this.stats.intelligence += 20;
      this.stats.max_mana += 15;
      this.stats.mana += 15;
      this.skills = "Raio Desintegrador";
    }

    // ARQUEIRO
    else if (this.class == "3" || this.class == "arqueiro") {
      this.stats.dexterity += 20;
      this.stats.max_stamina += 10;
      this.stats.stamina += 10;
      this.stats.strength += 7;
      this.skills = "Flecha Ilusória";
    }

    // ASSASSINO
    else if (this.class == "4" || this.class == "assassino") {
      this.stats.dexterity += 23;
      this.stats.max_stamina += 13;
      this.stats.stamina += 13;
      this.stats.strength += 5;
      this.skills = "Visão da Morte";
    } else {
      console.log("Classe inexistente, favor digitar corretamente!");
    }

    console.warn(`✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
                　 ˚ * .          * ⋆ 　 .                      * ⋆ 　 .               　 ˚ * .  
        　 　　 *　　 * ⋆ 　 .      Bem vindo ao mundo de Eldorium        　 　　 *　　 * ⋆ 　 . 
        · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
        　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
        　 *       ✷ 　Voce se encontra em uma carruagem e esta sendo levado　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
        　　　　 ⋆ ✧　 　 · para a cidade de Everglen para se encontrar com o Rei　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
        　　 *　　 * ⋆ 　 . 　Arthen para ser recrutado pela guarda Real, mas　um · ✵      　　　　 ⋆ ✧　 　 · 　 ✧　✵
        　　　　 ⋆ ✧　 　 · 　grupo de Goblins ataca a carruagem para matá-los e　 · ✵           　 ⋆ · 　 * · 　 ✧　✵
        ✧　 　 · 　 ✧　✵   　em meio à confusão você consegue escapar...　 ·            　 ⋆ · 　 *      
        　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *
        　　　　 ⋆ ✧　 　 · 　Agora voce esta na/o ${this.region} `);

    console.log("");
    console.log("»»———————Mini Dica———————««");
    console.log("Opção de viajar você vai se deparar com monstros mais fortes que você,");
    console.log("então é bom você upar antes de viajar! Poupe sua vida.");
    console.log("");
    console.log("Outra dica é que você pode conseguir dinheiro (Gold) para comprar armamentos ");
    console.log("mais fortes e tambem pode realizar quests para conseguir experiência, dinheiro e itens raros.");
    

  }
}
