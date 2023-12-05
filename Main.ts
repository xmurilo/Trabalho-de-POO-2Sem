const prompt = require("prompt-sync")();
const write = prompt;
import { Creator } from "./Creator";
import { Util } from "./Util";
import { Blacksmith } from "./Contructions/Blacksmith";
import { Enemy } from "./Non_Player/Enemy";
import { Inventory } from "./Inventory/Inventory";

const creator: Creator = new Creator();
const util: Util = new Util(creator);
const blacksmith: Blacksmith = new Blacksmith(creator);
const inventory: Inventory = new Inventory();
creator.characterCreator();
main();

export function main() {
  while (true) {
    console.log("====== Menu de Ações ======");
    console.log("1. Ver Stats");
    console.log("2. Descansar");
    console.log("3. Viajar");
    console.log("4. Inventario");
    console.log("5. Explorar");
    console.log("6. Ir para a cidade");
    console.log("7. Se matar");
    console.log("===========================");
    const action: number = parseInt(write("Escolha sua ação: "));

    if (
      action !== 1 &&
      action !== 2 &&
      action !== 3 &&
      action !== 4 &&
      action !== 5 &&
      action !== 6 &&
      action !== 7
    ) {
      console.log("Ação inválida!");
      continue;
    }

    switch (action) {
      case 1:
        util.showStats(creator);
        break;
      case 2:
        util.rest(creator);
        break;
      case 3:
        // creator.travel();
        console.log('Building...');
        
        break;
      case 4:
        inventory.showInventory();
        break;
      case 5:
        util.explore(creator);
        break;
      case 6:
        city();
        break;
      case 7:
        util.giveUp();
        break;
      default:
        console.log("Ação inválida!");
        break;
    }
  }
}

export function city() {
  while (true) {
    console.log("====== Menu de Ações ======");
    console.log("1. Ir para a Ferreiro");
    console.log("2. Voltar");
    console.log("===========================");
    const action: number = parseInt(write("Escolha sua ação: "));

    if (action !== 1 && action !== 2 && action !== 3) {
      console.log("Ação inválida!");
      continue;
    }

    switch (action) {
      case 1:
        blacksmith.services();
        break;
      case 2:
        main();
        break;
      default:
        console.log("Ação inválida!");
        break;
    }
  }
}
