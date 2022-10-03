import Coupon from "../domain/entity/Cupom";
import Order from "../domain/entity/Order";
import CouponRepository from "../domain/repository/CouponRepository.interface";
import ProductRepository from "../domain/repository/ProductRepository.interface"

export default class Preview {
  constructor(
    readonly productRepository: ProductRepository,
    readonly couponRepository: CouponRepository
  ) {
  }
  async execute(input: {
    orderProducts: { productId: number, quantity: number }[],
    cpf: string,
    coupon?: string
  }){
    const order = new Order(input.cpf);
		for (const orderProduct of input.orderProducts) {
			const item = await this.productRepository.getById(orderProduct.productId);
      if (!item) throw new Error("Invalid order, product not found");
			order.addProduct(item, orderProduct.quantity);
		}
    if(input.coupon) order.addCoupon(await this.couponRepository.get(input.coupon))

		return { total: order.total, subtotal: order.subtotal };
  }
}