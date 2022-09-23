export default class Product {
  constructor(
    public description: string,
    public price: number,
    public quantity: number
  ) {
    this.validadeDescription();
    this.validadeQuantity();
    this.validadePrice;
  }
  validadeQuantity() {
    if (this.quantity < 0)
      throw Error('Invalid quantity')
  }
  validadePrice() {
    if (this.price < 0) throw Error('Invalid price')
  }
  validadeDescription() {
    if (!this.description) throw Error('Invalid description')
  }
}