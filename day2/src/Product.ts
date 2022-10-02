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
  get density(){
    return this.weigh / this.dimensions.volume
  }
  get volume (){
    return this.dimensions.volume
  }
  private validate(){
    this.validadeDescription();
    this.validadePrice();
    this.validateWeigh();
  }
  private validadePrice() {
    if (this.price <= 0) throw Error('Invalid price')
  }
  private validadeDescription() {
    if (!this.description) throw Error('Invalid description')
  }
  private validateWeigh() {
    if (this.weigh <= 0) throw Error('Invalid weigh')
  }
}

// new Product(1,'asd', 1, new Dimensions(1,2,3), 1)