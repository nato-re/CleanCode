// export const couponService = {
//   getCoupon: function (code: string) {
//     if (code === 'VALID') return;
//     throw new Error("Invalid Coupon");
//   }
// }

export default class Coupon {
  constructor(
    readonly code: string,
    private _discount: number,
    readonly expiration: Date
  ) {
    this.validate()
  }
  get discount() {
    return this._discount;
  }
  validate() {
    this.validateExpiration();
    this.validateDiscount();
  }
  validateExpiration() {
    if (this.expiration.getTime() < new Date().getTime()) {
      this._discount = 0;
    }
  }
  validateDiscount() {
    if (this._discount > 1) throw new Error('Invalid coupon discount')
  }
}