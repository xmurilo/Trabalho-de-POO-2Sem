import { Quest } from '../Quests/quests';
import { NPC } from '../Non_Player/npc';

export class Building {
  constructor(private _name: string, private _type: string, private _description: string) {}

  get description(): string {
    return this._description;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  set description(new_description: string) {
    this._description = new_description;
  }

  set name(new_name: string) {
    this._name = new_name;
  }

  set type(new_type: string) {
    this._type = new_type;
  }
}

export class City {
  constructor(
    private _name: string,
    private buildings: Building[] = [],
    private residents: NPC[] = [],
  ) {}
  addBuilding(building: Building): void {
    this.buildings.push(building);
  }
  addResident(resident: NPC): void {
    this.residents.push(resident);
  }

  get name(): string {
    return this._name;
  }

  get getBuilds(): Building[] {
    return this.buildings;
  }

  get getResidents(): NPC[] {
    return this.residents;
  }
}

export class Town extends City {
  constructor(buildings: Building[] = [], residents: NPC[] = []) {
    super('town', buildings, residents);
  }
}

const town = new Town([], []);
town.addBuilding(new Building('town hall', 'government', 'where the mayor lives'));
town.addResident(new NPC('mayor', []));
console.log(town.getBuilds);