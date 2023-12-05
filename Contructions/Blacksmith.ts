const prompt = require("prompt-sync")();
const write = prompt;
import { Creator } from "../Creator";
import { Item } from "../Inventory/Item";
import { Weapon } from "../Weapons";
import { City } from "./city";
import { HealingItem } from "../Inventory/Item";

export class Blacksmith extends City {
  public services(): void {
    console.log("Bem vindo a loja do ferreiro");
    console.log(`Você tem: ${this.util.inventory.gold} de Gold`);
    console.log("O que deseja fazer?");
    console.log("1 - Comprar");
    console.log("2 - Vender");
    console.log("3 - Melhorar equipamento");
    console.log("4 - Sair");

    let option = write("Digite a opção: ");

    while (true) {
      if (option === "1") {
        console.log("Itens disponíveis para compra:");
        console.log("1 - Espada de Ferro (50 de Gold)");
        console.log("2 - Machado de Batalha (70 de Gold)");
        console.log("3 - Armadura de Couro (40 de Gold)");
        console.log("4 - Poção de Vida (30 de Gold)");
        console.log("5 - Poção de Mana (30 de gold)");
        console.log("6 - Poção de Stamina (30 de gold)");
        console.log("7 - Voltar");

        const itemChoice = write("Escolha o número do item que deseja comprar: ");
        let selectedItem: Item | Weapon | null = null;

        switch (itemChoice) {
          case "1":
            selectedItem = new Weapon("Espada de Ferro", 10, 50);
            break;
          case "2":
            selectedItem = new Weapon("Machado de Batalha", 15, 70);
            break;
          case "3":
            selectedItem = new Item("Armadura de Cgold", 40);
            break;
          case "4":
            selectedItem = new HealingItem("Poção de Vida Pequena", 30, 15);
            break;
          case "5":
            selectedItem = new HealingItem("Poção de Vida Grande", 30, 30);
          case "6":
            selectedItem = new Item("Poção de Mana", 30);
            break;
          case "7":
            selectedItem = new Item("Poção de Stamina", 30);
            break;
          case "8":
            break;
          default:
            console.log("Opção inválida. Por favor, escolha um número válido.");
            break;
        }

        if (selectedItem instanceof Weapon) {
          if (this.util.inventory.gold >= selectedItem.value) {
            this.util.inventory.gold -= selectedItem.value;
            this.util.inventory.addItem(selectedItem);
            console.log(`Você comprou ${selectedItem.name} por ${selectedItem.value} de gold`);
            continue;
          } else {
            console.log("Você não tem gold suficiente");
          }
        } else if (selectedItem instanceof Item) {
          if (this.util.inventory.gold >= selectedItem.value) {
            this.util.inventory.gold -= selectedItem.value;
            this.util.inventory.addItem(selectedItem);
            console.log(`Você comprou ${selectedItem.name} por ${selectedItem.value} de gold`);
            continue;
          } else {
            console.log("Você não tem gold suficiente");
          }
        }
        // Após a compra, você pode retornar ao menu principal ou continuar o loop, dependendo da lógica do seu jogo
        break; // Encerrando o loop depois da compra, mas você pode continuar caso deseje
      } else if (option === "2") {
        console.log("Itens disponíveis para venda:");
        this.util.inventory.items.map((item, index) => {
          console.log(`${index} - ${item.name} | Valor: ${item.value} de gold`);
        });
        console.log("7 - Voltar");

        const itemChoice = write("Escolha o número do item que deseja vender: ");

        let selectedItem: Item | Weapon | HealingItem | null = null;

        if (itemChoice === "7") {
          break;
        }

        selectedItem = this.util.inventory.items[+itemChoice];

        if (selectedItem instanceof Weapon && this.util.inventory.hasItem(selectedItem)) {
          this.util.inventory.gold += selectedItem.value;
          this.util.inventory.removeItem(selectedItem);
          console.log(`Você vendeu ${selectedItem.name} por ${selectedItem.value} de gold`);
          // continue;
        } else if (selectedItem instanceof Item && this.util.inventory.hasItem(selectedItem)) {
          this.util.inventory.gold += selectedItem.value;
          this.util.inventory.removeItem(selectedItem);
          console.log(`Você vendeu ${selectedItem.name} por ${selectedItem.value} de gold`);
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
          console.log(`${index} - ${item.name} | Valor: ${item.value} de gold`);
        });
        console.log("Aperte Q para sair");
        // Implemente a lógica para melhorar equipamentos aqui
        const itemChoice = write("Escolha o número do item que deseja melhorar: ");
        if (itemChoice === "q") break;

        const selectedItem = this.util.inventory.items[parseInt(itemChoice)];
        if (selectedItem instanceof Weapon) {
          if (this.util.inventory.gold >= selectedItem.value) {
            this.util.inventory.gold -= selectedItem.value;
            selectedItem.increaseDamage(5);
            console.log(`Você melhorou ${selectedItem.name} por ${selectedItem.value} de gold`);
            selectedItem.increaseValue(10);
          } else {
            console.log("Você não tem gold suficiente");
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
