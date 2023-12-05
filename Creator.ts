import { Stats } from "./Stats";
import { Skills, BerserkImpact, DesintegratorBolt, DeathVision, IlusionDart } from "./Skills";

const prompt = require("prompt-sync")();
const write = prompt;

export class Creator {
  public stats: Stats;
  public skills: Skills;

  nick: string = "";
  region: string = "";
  race: string = "";
  class: string = "";
  gold: number = 0;

  constructor(
  ) {

    this.stats = new Stats();
    this.skills = new Skills(this);
  }

  // ---- Metodo para criar o Personagem

  characterCreator() {
    this.nick = write("Digite o nome do seu personagem: ");
    console.log("");
    console.log("¤*¨¨*¤.¸¸…¸.¤ Regiões do mundo de Eldorum ¤*¨¨*¤.¸¸…¸.¤");
    console.log("");
    console.log("1 - Reino de Arton (Região habitada por Humanos e Anões)");
    console.log("");
    console.log("2 - Floresta de Alahan (Região habitada por Elfos e Sylfos)");
    console.log("");
    console.log("3 - Ilhas Esquecidas (Região habitada por Tritões e Anjos)");
    console.log("");
    console.log("");
    this.region = write("¤*¨¨*¤.¸¸…¸.¤ Escolha a região que você quer nascer ");

    // ESCOLHENDO A REGIÃO

    while (true) {
      if (
        this.region == "1" ||
        this.region == "Arton" ||
        this.region == " Reino de Arton" ||
        this.region == "reino de arton"
      ) {
        console.log("");
        console.log("Escolha sua raça:");
        console.log("1- Humano");
        console.log("2- Anão");
        this.race = write("Digite o número correspondente à sua escolha: ");
    
        if (this.race === "1" || this.race === "humano") {
          this.race = "humano"; // Converte para o formato padrão
          break;
        } else if (this.race === "2" || this.race === "anão") {
          this.race = "anão"; // Converte para o formato padrão
          break;
        } else {
          console.log("Escolha de raça inválida. Por favor, escolha entre 1 (Humano) ou 2 (Anão).");
        }
      } else if (
        this.region == "2" ||
        this.region == "Floresta de Alahan" ||
        this.region == "Alahan" ||
        this.region == "floresta de alahan"
      ) {
        console.log("");
        console.log("Escolha sua raça:");
        console.log("1- Elfo");
        console.log("2- Sylfo");
        this.race = write("Digite o número correspondente à sua escolha: ");
    
        if (this.race === "1" || this.race === "elfo") {
          this.race = "elfo"; // Converte para o formato padrão
          break;
        } else if (this.race === "2" || this.race === "sylfo") {
          this.race = "sylfo"; // Converte para o formato padrão
          break;
        } else {
          console.log("Escolha de raça inválida. Por favor, escolha entre 1 (Elfo) ou 2 (Sylfo).");
        }
      } else if (
        this.region == "3" ||
        this.region == "Ilhas Esquecidas" ||
        this.region == "ilhas esquecidas"
      ) {
        console.log("");
        console.log("Escolha sua raça:");
        console.log("1- Tritão");
        console.log("2- Anjo");
        this.race = write("Digite o número correspondente à sua escolha: ");
    
        if (this.race === "1" || this.race === "tritão") {
          this.race = "tritão"; // Converte para o formato padrão
          break;
        } else if (this.race === "2" || this.race === "anjo") {
          this.race = "anjo"; // Converte para o formato padrão
          break;
        } else {
          console.log("Escolha de raça inválida. Por favor, escolha entre 1 (Tritão) ou 2 (Anjo).");
        }
      } else {
        console.log("Digite a região corretamente!");
        break; // Se a região estiver incorreta, sai do loop para evitar um loop infinito.
      }
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
        this.stats.level = 1;
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
        this.stats.level = 1;
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
        this.stats.level = 1;
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
        this.stats.level = 1;
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
      (this.region = "3" || this.region == "Ilhas Esquecidas" || this.region == "ilhas esquecidas")
    ) {
      // TRITÃO
      if (this.race == "tritão") {
        this.stats.level = 1;
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
        this.stats.level = 1;
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
    console.log("¤*¨¨*¤.¸¸…¸.¤ Classes do mundo de Eldorum ¤*¨¨*¤.¸¸…¸.¤");
    console.log("");
    console.log("1 - Guerreiro");
    console.log("2 - Mago");
    console.log("3 - Arqueiro");
    console.log("4 - Assassino");
    console.log("");
    this.class = write("¤*¨¨*¤.¸¸…¸.¤ Escolha a classe que você quer ser: ").toLowerCase();

    // ATRIBUINDO OS ATRIBUTOS DE CADA CLASSE
    // GUERREIRO
    if (this.class == "1" || this.class == "guerreiro") {
      this.stats.strength += 20;
      this.stats.max_health += 11;
      this.stats.health += 11;
      this.stats.armor += 5;
      this.skills = new BerserkImpact(this);
    }

    // MAGO
    else if (this.class == "2" || this.class == "mago") {
      this.stats.intelligence += 20;
      this.stats.max_mana += 15;
      this.stats.mana += 15;
      this.skills = new DesintegratorBolt(this);
    }

    // ARQUEIRO
    else if (this.class == "3" || this.class == "arqueiro") {
      this.stats.dexterity += 20;
      this.stats.max_stamina += 10;
      this.stats.stamina += 10;
      this.stats.strength += 7;
      this.skills = new IlusionDart(this);
    }

    // ASSASSINO
    else if (this.class == "4" || this.class == "assassino") {
      this.stats.dexterity += 23;
      this.stats.max_stamina += 13;
      this.stats.stamina += 13;
      this.stats.strength += 5;
      this.skills = new DeathVision(this);
    } else {
      console.log("Classe inexistente, favor digitar corretamente!");
    }

    console.warn(`Bem vindo ao mundo de Eldorum\n
    Voce se encontra em uma carruagem e esta sendo levado\n 
    para a cidade de Everglen para se encontrar com o Rei Arthen\n
    para ser recrutado pela guarda Real, mas um grupo de Goblins\n
    ataca a carruagem para matá-los e em meio à confusão você consegue escapar\n
    e se esconder em uma caverna, mas você não sabe onde esta.\n
    \n
    Agora voce esta na/o ${this.region} `);

    console.log("");
    console.log("»»———————Mini Dica———————««");
    console.log("Opção de viajar você vai se deparar com monstros mais fortes que você,");
    console.log("então é bom você upar antes de viajar! Poupe sua vida.");
    console.log("");
    console.log("Outra dica é que você pode conseguir dinheiro (Gold) para comprar armamentos ");
    console.log(
      "mais fortes e tambem pode realizar quests para conseguir experiência, dinheiro e itens raros.",
    );
  }

  levelUp(creator: Creator) {
    if (creator.stats.xp >= creator.stats.max_xp) {
      creator.stats.level += 1;
      creator.stats.max_xp += 100;
      creator.stats.xp = 0;

      console.log(`  _                   _   _   _       _ _ 
                      | |    _____   _____| | | | | |_ __ | | |
                      | |   / _ \ \ / / _ \ | | | | | '_ \| | |
                      | |__|  __/\ V /  __/ | | |_| | |_) |_|_|
                      |_____\___| \_/ \___|_|  \___/| .__/(_|_)
                                                    |_|        `);

      console.log("");

      console.log(` ➡️➡️ Você subiu para o nível ${creator.stats.level}!  ⬅️⬅️`);
      console.log(
        `Você agora tem 10 Pontos para distribuir em seus atributos, escolha sabiamente!`,
      );

      let points = 10;
      while (points != 0) {
        console.log("");
        console.log("1 - Força");
        console.log("2 - Destreza");
        console.log("3 - Inteligência");
        console.log("");

        let qnt: number = +write("Digite a quantidade que você quer aumentar: ");

        let atribute = write("Digite o atributo que você quer aumentar: ");

        console.log("");

        if (atribute == "1" || atribute == "força" || atribute == "forca") {
          creator.stats.strength += qnt;
          points -= Number(qnt);
          console.log(`Você aumentou ${qnt} pontos em Força!`);
        } else if (atribute == "2" || atribute == "destreza") {
          creator.stats.dexterity += qnt;
          points -= Number(qnt);
          console.log(`Você aumentou ${qnt} pontos em Destreza!`);
        } else if (atribute == "3" || atribute == "inteligência" || atribute == "inteligencia") {
          creator.stats.intelligence += qnt;
          points -= Number(qnt);
          console.log(`Você aumentou ${qnt} pontos em Inteligência!`);
        }
      }
    }
  }
}
