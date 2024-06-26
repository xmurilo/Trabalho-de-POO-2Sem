export enum RewardType {
  ITEM = 'item',
  MONEY = 'money',
}

interface Item {
  name: string;
  description: string;
}

export class Quest {
  constructor(
    private _description: string,
    private _reward: { type: RewardType; value: Item | number },
  ) {}

  getQuestDetails(): string {
    let rewardDescription = '';

    if (this._reward.type === RewardType.ITEM) {
      const item = this._reward.value as Item;
      rewardDescription = `Item: ${item.name} - ${item.description}`;
    } else {
      rewardDescription = `${this._reward.value} Gold`;
    }
    return `Quest: ${this._description}\nRecompensa → ${rewardDescription}`;
  }
}



