import Coupon from "../../domain/entity/Cupom";
import CouponRepository from "../../domain/repository/CouponRepository.interface";

export default class CouponRepositoryMemory implements CouponRepository {
  constructor(
    private coupons: Coupon[] = []
    ) {
    this.coupons = coupons
  }
  async get(code: string) {
    const couponData = this.coupons.find((coupon) => coupon.code === code);
    if (!couponData) throw Error('coupon_not_found')
    return couponData
  }
  // async create(
  //   orderProductsInput: { productId: number; quantity: number; price: number; }[], cpf: string
  // ): Promise<number> {
  //   const orderProducts = orderProductsInput.map(({ productId, quantity, price, }) => new OrderProduct(productId, quantity, price))
  //   this.orders.push({ id: this.orders.length, cpf, orderProducts });
  //   return this.orders.length;
  // }

}