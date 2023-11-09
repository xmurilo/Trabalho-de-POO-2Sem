export class Stats{
    constructor(
        private _hp: number = 0,
        private _max_hp: number = 0,
        private _stamina: number = 0,
        private _max_stamina: number = 0,
        private _mana: number = 0,
        private _max_mana: number = 0,
        private _strength: number = 0,
        private _dexterity: number = 0,
        private _intelligence: number = 0,
        private _armor: number = 0,

    ){ }

    // --------- Getters ----------
    public get health(): number{
        return this._hp
    }

    public get max_health(): number{
        return this._max_hp
    }

    public get stamina(): number{
        return this._stamina
    }

    public get max_stamina(): number{
        return this._max_stamina
    }

    public get mana(): number{
        return this._mana
    }

    public get max_mana(): number{
        return this._max_mana
    }

    public get strength(): number{
        return this._strength
    }

    public get dexterity(): number{
        return this._dexterity
    }

    public get intelligence(): number{
        return this._intelligence
    }

    public get armor(): number{
        return this._armor
    }

    // --------- Setters ----------

    public set health(health: number){
        this._hp = health
    }

    public set max_health(max_health: number){
        this._max_hp = max_health
    }

    public set stamina(stamina: number){
        this._stamina = stamina
    }

    public set max_stamina(max_stamina: number){
        this._max_stamina = max_stamina
    }

    public set mana(mana: number){
        this._mana = mana
    }

    public set max_mana(max_mana: number){
        this._max_mana = max_mana
    }

    public set strength(strength: number){
        this._strength = strength
    }

    public set dexterity(dexterity: number){
        this._dexterity = dexterity
    }

    public set intelligence(intelligence: number){
        this._intelligence = intelligence
    }

    public set armor(armor: number){
        this._armor = armor
    }

}