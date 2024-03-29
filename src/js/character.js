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
    return Math.round(this.attackPoints);
  }

  set attack(range) {
    if (this.stonedStatus) {
      this.attackPoints -= Math.log2(range) * 5;
    } else {
      this.attackPoints -= range * 5;
    }
  }
}
