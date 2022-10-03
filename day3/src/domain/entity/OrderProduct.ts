export default class OrderProduct {
  constructor(
    readonly productId: number,
    readonly quantity: number,
    readonly price: number
  ) {
    this.validate();
  }
  get total (){
    return this.price * this.quantity
  }
  validate(){
    this.validadeQuantity();
    this.validadePrice();
  }
  validadeQuantity() {
    if (this.quantity < 0) throw Error('Invalid quantity')
  }
  validadePrice() {
    if (this.price < 0) throw Error('Invalid price')
  }
}