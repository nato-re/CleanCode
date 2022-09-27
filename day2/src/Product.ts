import Dimensions from "./Dimensions";

export default class Product {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly price: number,
    readonly dimensions: number[],
    readonly weigh: number
  ) {
    this.validate()
  }
  validate(){
    this.validadeDescription();
    this.validadePrice();
    this.validateDimensions()
    this.validateWeigh()
  }
  validadePrice() {
    if (this.price <= 0) throw Error('Invalid price')
  }
  validadeDescription() {
    if (!this.description) throw Error('Invalid description')
  }
  validateDimensions() {
    const someDimensionInvalid = this.dimensions.some(dimension => dimension <= 0);
    if (someDimensionInvalid) throw Error('Invalid dimensions');
  }
  validateWeigh() {
    if (this.weigh <= 0) throw Error('Invalid weigh')
  }
}