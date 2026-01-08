export default class User {
  userName: string;
  bankaAcs: string[];
  userId: string;

  constructor(name: string, bankAcs: string[]) {
    this.userName = name;
    this.bankaAcs = bankAcs;
  }

  static create(name: string, bandAcs: string[]) {
    return new User(name, bandAcs);
  }

  getId() {
    return this.userId;
  }
}
