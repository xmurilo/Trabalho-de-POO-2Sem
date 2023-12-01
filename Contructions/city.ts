const prompt = require('prompt-sync')();
const write = prompt;
import { Creator } from '../Creator';
import { Util } from '../Util';



export abstract class City {
  public creator: Creator;
  public util: Util;

  constructor(creator:Creator) {
    this.creator = new Creator();
    this.util = new Util(creator);
  }

  public abstract services(creator: Creator): void;
}
