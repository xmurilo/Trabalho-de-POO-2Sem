import { Stats } from "./Stats";
import { Enemy } from "./Non_Player/Enemy";
import { Skills } from "./Skills";
import { Creator } from "./Creator";
import { Util } from "./Util";
import { Weapon } from "./Weapons";
import { BerserkImpact, DesintegratorBolt, IlusionDart, DeathVision } from "./Skills";
import { Item } from  "./Inventory/Item";
import { Inventory } from "./Inventory/Inventory";

const prompt = require('prompt-sync')();
const write = prompt;


export class Combat{
    public creator: Creator;
    public skill: Skills;
    public berserkImpact: BerserkImpact;
    public desintegratorBolt: DesintegratorBolt;
    public ilusionDart: IlusionDart;
    public deathVision: DeathVision;
    public inventory: Inventory;
    constructor(creator:Creator){
        this.creator = new Creator();
        this.skill = new Skills(creator); 
        this.berserkImpact = new BerserkImpact(creator);
        this.desintegratorBolt = new DesintegratorBolt(creator);
        this.ilusionDart = new IlusionDart(creator);
        this.deathVision = new DeathVision(creator);
        this.inventory = new Inventory();
    }

    public atack(creator: Creator, enemy: Enemy): void{
        if (creator.stats.stamina >= 5) {
            creator.stats.stamina -= 5;
            let damage = 10 + creator.stats.strength - enemy.stats.armor;
            enemy.stats.health -= damage;
            enemy.atack(creator);
            console.log("");
            console.table("Vida atual do monstro:" + enemy.stats.health);
            console.log("");
            
        }else{
            enemy.atack(creator);
            console.log("");
            console.log("Você não tem stamina suficiente para atacar, o monstro atacou você!");
            console.log("");
        }
    }

    public death(creator: Creator, enemy: Enemy): void{
        if(enemy.stats.health <= 0){
            enemy.stats.health = 0;
            this.inventory.gold += Math.floor(Util.random(1, 100) + 30);
            creator.stats.xp += Math.floor(Util.random(1, 100) + 10);
            creator.levelUp(creator);
        }else{
            if(creator.stats.health <= 0){
                console.log("");
                console.log("VOCÊ MORREU!!!!!!!");
                throw console.error(` ____  ____    __   ____  _   _ 
                                     (  _ \( ___)  /__\ (_  _)( )_( )
                                      )(_) ))__)  /(__)\  )(   ) _ ( 
                                     (____/(____)(__)(__)(__) (_) (_)`);
            }
        }
    }

    public deathBoss(creator: Creator, enemy: Enemy): void{
        if(enemy.stats.health <= 0){
            enemy.stats.health = 0;
            const gold = Math.floor(Util.random(1, 100) + 70)
            this.inventory.gold += gold;
            creator.stats.xp += 150; 
            creator.levelUp(creator);
            console.log("");
            console.log(`Parabéns, você derrotou o boss ${enemy.name} e ganhou 150 de xp e ${gold} de ouro!`);
            console.log("");
        }else{
            if(creator.stats.health <= 0){
                console.log("");
                console.log("VOCÊ MORREU!!!!!!!");
                throw console.error(` ____  ____    __   ____  _   _ 
                                     (  _ \( ___)  /__\ (_  _)( )_( )
                                      )(_) ))__)  /(__)\  )(   ) _ ( 
                                     (____/(____)(__)(__)(__) (_) (_)`);
            }
        }
    }

    public useSkill(creator: Creator, enemy: Enemy): void{
        if (creator.class == "1") {
            this.berserkImpact.atack(creator, enemy);
        }else if(creator.class == "2"){
            this.desintegratorBolt.atack(creator, enemy);
        }else if(creator.class == "3"){
            this.ilusionDart.atack(creator, enemy);
        }else if(creator.class == "4"){
            this.deathVision.atack(creator, enemy);
        }
    }

    public mobFight(creator: Creator, enemy: Enemy): void{
        console.log("");
        console.log(`Você encontrou um ${enemy.name}!`);
        console.log("");
        console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳`);
        console.log(`⎳ ⎲  `);
        console.log(`⎳ ⎲           ${enemy.name}  `);
        console.log(`⎳ ⎲       Vida: ${enemy.stats.health}  `);
        console.log(`⎳ ⎲       Força: ${enemy.stats.strength}  `);
        console.log(`⎳ ⎲       Armadura: ${enemy.stats.armor}  `);
        console.log(`⎳ ⎲  `);
        console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳`);
        

        while(enemy.stats.health > 0 || creator.stats.health > 0){
            console.log("");
            console.log("O que você deseja fazer?");
            console.log("");
            console.log("1 - Atacar");
            console.log("2 - Usar Skill");
            console.log("3 - Fugir");
            console.log("4 - Abrir a mochila");
            
            let choice = write("Escolha uma das opções: ");

            if(choice == "1"){
                this.atack(creator, enemy);
                this.death(creator, enemy);
            }
            if (choice == "2") {
                this.useSkill(creator, enemy);
                this.death(creator, enemy);
            }
            if (choice == "3") {
                console.log("");
                console.log("Você fugiu da batalha, CAGÃO!");
                console.log("");
                break;
            }
            if (choice == "4") {
                this.inventory.showInventory();
                this.death(creator, enemy);
            }
            console.log("⫍ ——————————————————————————————————————————————————— ⥚ ⦾ ⥛ ——————————————————————————————————————————————————— ⫎");
                console.log("");
                console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ `);
                console.log(`⎳ ⎲  `);
                console.log(`⎳ ⎲        ${creator.nick}                             |                         Monstro:  ${enemy.name}  `);
                console.log(`⎳ ⎲       Vida: ${creator.stats.health}/${creator.stats.max_health}                          |                         Vida: ${enemy.stats.health}  `);
                console.log(`⎳ ⎲          Força: ${creator.stats.strength}                       |                         Força: ${enemy.stats.strength}  `);
                console.log(`⎳ ⎲          Armadura: ${creator.stats.armor}                     |                         Armadura: ${enemy.stats.armor}  `);
                console.log(`⎳ ⎲       Stamina: ${creator.stats.stamina}/${creator.stats.max_stamina}     `);
                console.log(`⎳ ⎲       Mana: ${creator.stats.mana}/${creator.stats.max_mana}               `);
                console.log(`⎳ ⎲       Dextreza: ${creator.stats.dexterity}          `);
                console.log(`⎳ ⎲       Inteligência: ${creator.stats.intelligence}     `);
                console.log(`⎳ ⎲       level: ${creator.stats.level}        `);
                console.log(`⎳ ⎲       Gold: ${this.inventory.gold}`);
                console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ `);
                console.log("");
                console.log("⫍ ——————————————————————————————————————————————————— ⥞ ⦾ ⥟ ——————————————————————————————————————————————————— ⫎");
                console.log("");

                if (enemy.stats.health <= 0) {
                    console.log(`${enemy.name} morreu ⤜(*.*)⤏ . Parabens pelo seu feito!! `);
                    const gold = Math.floor(Util.random(1, 100) + 30)
                    console.log("");
                    console.log(`Você ganhou ${gold} de ouro!`);
                    this.inventory.gold += gold
                    break;
                }
        }
    }

    public bossFight(creator: Creator, enemy: Enemy): void{
        console.log("");
        console.log(`Você encontrou um ${enemy.name}!`);
        console.log("");
        console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳`);
        console.log(`⎳ ⎲  `);
        console.log(`⎳ ⎲           ${enemy.name}  `);
        console.log(`⎳ ⎲       Vida: ${enemy.stats.health}  `);
        console.log(`⎳ ⎲       Força: ${enemy.stats.strength}  `);
        console.log(`⎳ ⎲       Armadura: ${enemy.stats.armor}  `);
        console.log(`⎳ ⎲  `);
        console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳`);
        

        while(enemy.stats.health > 0 || creator.stats.health > 0){
            console.log("");
            console.log("O que você deseja fazer?");
            console.log("");
            console.log("1 - Atacar");
            console.log("2 - Usar Skill");
            console.log("3 - Fugir");
            console.log("4 - Abrir a mochila");
            
            let choice = write("Escolha uma das opções: ");

            if(choice == "1"){
                this.atack(creator, enemy);
                this.deathBoss(creator, enemy);
            }
            if (choice == "2") {
                this.useSkill(creator, enemy);
                this.deathBoss(creator, enemy);
            }
            if (choice == "3") {
                console.log("");
                console.log("Você fugiu da batalha!");
                console.log("");
                console.log(`- ${enemy.name} : "Você é um fracote mesmo, HAHHAHAHAHAH, EU VOU TE PEGAR!!!!`);
                
                break;
            }
            if (choice == "4") {
                this.inventory.showInventory();
                this.deathBoss(creator, enemy);
            }

            console.log("⫍ ——————————————————————————————————————————————————— ⥚ ⦾ ⥛ ——————————————————————————————————————————————————— ⫎");
            console.log("");
            console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ `);
            console.log(`⎳ ⎲  `);
            console.log(`⎳ ⎲        ${creator.nick}                             |                         Monstro:  ${enemy.name}  `);
            console.log(`⎳ ⎲       Vida: ${creator.stats.health}/${creator.stats.max_health}                          |                         Vida: ${enemy.stats.health}  `);
            console.log(`⎳ ⎲          Força: ${creator.stats.strength}                       |                         Força: ${enemy.stats.strength}  `);
            console.log(`⎳ ⎲          Armadura: ${creator.stats.armor}                     |                         Armadura: ${enemy.stats.armor}  `);
            console.log(`⎳ ⎲       Stamina: ${creator.stats.stamina}/${creator.stats.max_stamina}     `);
            console.log(`⎳ ⎲       Mana: ${creator.stats.mana}/${creator.stats.max_mana}               `);
            console.log(`⎳ ⎲       Dextreza: ${creator.stats.dexterity}          `);
            console.log(`⎳ ⎲       Inteligência: ${creator.stats.intelligence}     `);
            console.log(`⎳ ⎲       level: ${creator.stats.level}        `);
            console.log(`⎳ ⎲       Gold: ${this.inventory.gold}`);
            console.log(`⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ ⎳⎲ `);
            console.log("");
            console.log("⫍ ——————————————————————————————————————————————————— ⥞ ⦾ ⥟ ——————————————————————————————————————————————————— ⫎");
            console.log("");

            if (enemy.stats.health <= 0) {
                console.log(`${enemy.name} morreu ⤜(*.*)⤏ . Parabens pelo seu feito!! `);
                break;
            }
        }
    }
}