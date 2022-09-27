import Dimensions from "./Dimensions";

export default class Product {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly price: number,
    readonly dimensions: Dimensions,
    readonly weigh: number
  ) {
    this.validate()
  }
  validate(){
    this.validadeDescription();
    this.validadePrice();
    this.validateWeigh();
  }
  get density(){
    return this.weigh / this.dimensions.volume
  }
  validadePrice() {
    if (this.price <= 0) throw Error('Invalid price')
  }
  validadeDescription() {
    if (!this.description) throw Error('Invalid description')
  }

  validateWeigh() {
    if (this.weigh <= 0) throw Error('Invalid weigh')
  }
}