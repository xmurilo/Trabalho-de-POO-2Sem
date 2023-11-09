import { Quest } from "../Quests/quests";

export class NPC {
  constructor(
    private _name: string,
    private _quests: Quest[] = []
  ) {}

  get name(): string {
    return this._name;
  }

  get quests(): Quest[] {
    return this._quests;
  }

  set quests(new_quests: Quest[]) {
    this._quests = new_quests;
  }

  removeQuest(quest: Quest): void {
    this._quests = this._quests.filter((q) => q !== quest);
  }
}

