import Coupon from "../entity/Cupom";

export default interface CouponRepository {
  get(code: string): Promise<Coupon>
}