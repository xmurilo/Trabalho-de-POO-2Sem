import { Creator } from "./Creator";
import { Stats } from "./Stats";

export abstract class Enemy{
    protected _name: string;
    protected _stats: Stats;

    constructor(
        enemyName: string,
        enemyHealth: number,
        enemyMaxHealth: number,
        enemyStrength: number,
        enemyArmor: number,
        enemyStamina: number
    ){
        this._stats = new Stats()
        this._name = enemyName
        this._stats.health = enemyHealth
        this._stats.max_health = enemyMaxHealth
        this._stats.strength = enemyStrength
        this._stats.armor = enemyArmor
        this._stats.stamina = enemyStamina
    }

    public get name(): string{
        return this._name
    }

    public get stats(): Stats{
        return this._stats
    }

    public get health(): number{
        return this._stats.health
    }

    public get max_health(): number{
        return this._stats.max_health
    }

    public get strength(): number{
        return this._stats.strength
    }

    public get armor(): number{
        return this._stats.armor
    }

    public get stamina(): number{
        return this._stats.stamina
    }

    public abstract atack(creator: Creator):void;

}

// ////////////////////////////// BOSSES ///////////////////////////////

export class Gladimir extends Enemy{
    constructor(){
        super("Gladimir", 70, 70, 10, 6, 1)
    }

    public atack(creator: Creator){
        let damage = 30 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Edecio extends Enemy{
    constructor(){
        super("Edécio", 80, 80, 10, 7, 3)
    }

    public atack(creator: Creator){
        let damage = 17 + this.stats.strength
        creator.stats.health -= damage
    }
}

export class Bruna extends Enemy{
    constructor(){
        super("Bruna", 100, 100, 15, 8, 2)
    }

    public atack(creator: Creator){
        let damage = 20 + this.stats.strength
        creator.stats.health -= damage
    }
}

export class Angelo extends Enemy{
    constructor(){
        super("Angelo", 150, 150, 20, 30, 2)
    }

    public atack(creator: Creator){
        console.log("Você realmente chegou até aqui?! HAHAHAHAHAHAHA QUERO VER VOCÊ SOBREVIVER A ISSO!!!!");
        
        let damage = 27 + this.stats.strength
        creator.stats.health -= damage
        creator.stats.armor -= 2
        creator.stats.mana -= 2
    }
}

// ################## ILHAS ESQUECIDAS MOBS ##################

export class Fishman extends Enemy{
    constructor(){
        super("Homem P eixe", 30, 30, 10, 5,0)
    }

    public atack(creator: Creator){
        let damage = 20 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class lilAngel extends Enemy{
    constructor(){
        super("Anjinho ", 20, 20, 8, 2, 0)
    }

    public atack(creator: Creator){
        let damage = 16 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Demon extends Enemy{
    constructor(){
        super("Demônio", 32, 32, 10, 7, 0)
    }

    public atack(creator: Creator){
        let damage = 21 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

// ################## REINO DE ARTON MOBS ##################

export class Orc extends Enemy{
    constructor(){
        super("Orc", 25, 25, 10, 5, 0)
    }

    public atack(creator: Creator){
        let damage = 18 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Bandit extends Enemy{
    constructor(){
        super("Ladrão", 23, 23, 11, 3, 0)
    }

    public atack(creator: Creator){
        let damage = 18 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Vampire extends Enemy{
    constructor(){
        super("Vampiro", 27, 27, 11, 2, 0)
    }

    public atack(creator: Creator){
        let damage = 19 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}


// ################### FLORESTA DE ALAHAN MOBS ###################

export class Goblin extends Enemy{
    constructor(){
        super("Goblin", 21, 21, 7, 3, 0)
    }

    public atack(creator: Creator){
        let damage = 15 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Troll extends Enemy{
    constructor(){
        super("Troll", 30, 30, 11, 5, 0)
    }

    public atack(creator: Creator){
        let damage = 18 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}

export class Fairy extends Enemy{
    constructor(){
        super("Fada", 18, 18, 5, 2, 0)
    }

    public atack(creator: Creator){
        let damage = 17 + this.stats.strength - creator.stats.armor
        creator.stats.health -= damage
    }
}