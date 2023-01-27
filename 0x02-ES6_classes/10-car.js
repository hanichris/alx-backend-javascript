export default class Car {
  constructor(brand, color, motor) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
