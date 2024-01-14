/* eslint-disable operator-assignment */
export default class Character {
  constructor() {
    this.stonedStatus = false;
    this.attackPoints = null;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(status) {
    this.stonedStatus = status;
  }

  get attack() {
    return this.attackPoints;
  }

  set attack(range) {
    if (this.stoned) {
      this.attack -= (range + 1) * 5;
    } else {
      this.attack -= range * 5;
    }
  }
}
