import Product from "./Product";
import Cpf from "./Cpf";
import Coupon from "./Cupom";
import OrderProduct from "./OrderProduct";

export default class Order {
  orderProducts: OrderProduct[] = [];
  cpf: Cpf
  coupon?: Coupon

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
  }
  get subtotal(): number {
    const value = this.orderProducts.reduce((prev, acc) => acc.price + prev, 0);
    return value;
  }
  get total() {
    if (this.coupon) return this.subtotal - (this.subtotal * this.coupon.discount);
    return this.subtotal;
  }
  async calculateDeliveryPrice(){
    return this.orderProducts.map
  }
  productExistsInOrder(product: Product){
    return this.orderProducts.some(orderProduct => orderProduct.productId === product.id);
  }
  addProduct(product: Product, quantity: number) {
    if(this.productExistsInOrder(product)) throw new Error ('Product exists in order')
    const orderProduct = new OrderProduct(product.id, product.price, quantity);
    this.orderProducts.push(orderProduct);
  }
  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }
}