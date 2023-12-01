const prompt = require("prompt-sync")();
const write = prompt;
import { Creator } from "../Creator";
import { Item } from "../Inventory/Item";
import { Weapon } from "../Weapons";
import { City } from "./city";

export class Blacksmith extends City {
  public services(creator: Creator): void {
    console.log("Bem vindo a loja do ferreiro");
    console.log(`Você tem: ${creator.gold} de ouro`);
    console.log("O que deseja fazer?");
    console.log("1 - Comprar");
    console.log("2 - Vender");
    console.log("3 - Melhorar equipamento");
    console.log("4 - Sair");

    let option = write("Digite a opção: ");

    while (true) {
      if (option === "1") {
        console.log("Itens disponíveis para compra:");
        console.log("1 - Espada de Ferro (50 de ouro)");
        console.log("2 - Machado de Batalha (70 de ouro)");
        console.log("3 - Armadura de Couro (40 de ouro)");
        console.log("4 - Poção de Vida (30 de ouro)");
        console.log("5 - Poção de Mana (30 de ouro)");
        console.log("6 - Poção de Stamina (30 de ouro)");
        console.log("7 - Voltar");

        const itemChoice = write("Escolha o número do item que deseja comprar: ");
        let selectedItem: Item | Weapon | null = null;

        switch (itemChoice) {
          case "1":
            selectedItem = new Weapon("Espada de Ferro", 10, "Espada", 50);
            break;
          case "2":
            selectedItem = new Weapon("Machado de Batalha", 15, "Machado", 70);
            break;
          case "3":
            selectedItem = new Item("Armadura de Couro", 40);
            break;
          case "4":
            selectedItem = new Item("Poção de Vida", 30);
            break;
          case "5":
            selectedItem = new Item("Poção de Mana", 30);
            break;
          case "6":
            selectedItem = new Item("Poção de Stamina", 30);
            break;
          case "7":
            break;
          default:
            console.log("Opção inválida. Por favor, escolha um número válido.");
            break;
        }

        if (selectedItem instanceof Weapon) {
          if (this.creator.gold >= selectedItem.value) {
            this.creator.gold -= selectedItem.value;
            this.util.inventory.addItem(selectedItem);
            console.log(`Você comprou ${selectedItem.name} por ${selectedItem.value} de ouro`);
          } else {
            console.log("Você não tem ouro suficiente");
          }
        } else if (selectedItem instanceof Item) {
          if (this.creator.gold >= selectedItem.value) {
            this.creator.gold -= selectedItem.value;
            this.util.inventory.addItem(selectedItem);
            console.log(`Você comprou ${selectedItem.name} por ${selectedItem.value} de ouro`);
          } else {
            console.log("Você não tem ouro suficiente");
          }
        }
        // Após a compra, você pode retornar ao menu principal ou continuar o loop, dependendo da lógica do seu jogo
        break; // Encerrando o loop depois da compra, mas você pode continuar caso deseje
      } else if (option === "2") {
        console.log("Itens disponíveis para venda:");
        console.log("1 - Espada de Ferro (10 de ouro)");
        console.log("2 - Machado de Batalha (15 de ouro)");
        console.log("3 - Armadura de Couro (20 de ouro)");
        console.log("4 - Poção de Vida (15 de ouro)");
        console.log("5 - Poção de Mana (15 de ouro)");
        console.log("6 - Poção de Stamina (15 de ouro)");
        console.log("7 - Voltar");

        const itemChoice = write("Escolha o número do item que deseja vender: ");

        let selectedItem: Item | Weapon | null = null;

        switch (itemChoice) {
          case "1":
            selectedItem = new Weapon("Espada de Ferro", 10, "Espada", 50);
            break;
          case "2":
            selectedItem = new Weapon("Machado de Batalha", 15, "Machado", 70);
            break;
          case "3":
            selectedItem = new Item("Armadura de Couro", 40);
            break;
          case "4":
            selectedItem = new Item("Poção de Vida", 30);
            break;
          case "5":
            selectedItem = new Item("Poção de Mana", 30);
            break;
          case "6":
            selectedItem = new Item("Poção de Stamina", 30);
            break;
          case "7":
            break;
          default:
            console.log("Opção inválida. Por favor, escolha um número válido.");
            break;
        }
        if (selectedItem instanceof Weapon && this.util.inventory.hasItem(selectedItem)) {
          this.creator.gold += selectedItem.value;
          this.util.inventory.removeItem(selectedItem);
          console.log(`Você vendeu ${selectedItem.name} por ${selectedItem.value} de ouro`);
        } else if (selectedItem instanceof Item && this.util.inventory.hasItem(selectedItem)) {
          this.creator.gold += selectedItem.value;
          this.util.inventory.removeItem(selectedItem);
          console.log(`Você vendeu ${selectedItem.name} por ${selectedItem.value} de ouro`);
        }

        const option = write("Você deseja voltar ao menu principal? (S/N): ").toLowerCase();

        if (option === "s" || option === "y" || option === "sim" || option === "yes") {
          break;
        } else if (option === "n" || option === "não" || option === "nao" || option === "no") {
          continue;
        }

        break;
      } else if (option === "3") {
        // Lógica para a opção "Melhorar equipamento"
        console.log("Itens disponíveis para melhorar:");
        this.util.inventory.items.map((item, index) => {
          console.log(`${index} - ${item.name} | Valor: ${item.value} de ouro`);
        });
        // Implemente a lógica para melhorar equipamentos aqui
        const itemChoice = write("Escolha o número do item que deseja melhorar: ");
        const selectedItem = this.util.inventory.items[parseInt(itemChoice)];
        if (selectedItem instanceof Weapon) {
          if (this.creator.gold >= selectedItem.value) {
            this.creator.gold -= selectedItem.value;
            selectedItem.increaseDamage(5);
            console.log(`Você melhorou ${selectedItem.name} por ${selectedItem.value} de ouro`);
            selectedItem.increaseValue(10);
          } else {
            console.log("Você não tem ouro suficiente");
          }
        }
      } else if (option === "4") {
        console.log("Até mais! Volte sempre à loja do ferreiro.");
        break;
      } else {
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        option = write("Digite a opção: ");
      }
    }
  }
}

