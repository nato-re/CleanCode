import Product from "./Product";

const DEFAULT_DISTANCE_IN_KM = 1000;

export default class Delivery {
  readonly MIN_FEE = 10;
  constructor(
    readonly products: Product[],
    readonly distance: number = DEFAULT_DISTANCE_IN_KM,
  ) {}
  get price() {
    const total = this.products.reduce(
      (total, product) =>
        total + this.distance * product.volume * (product.density / 100)
      , 0
    )
    return Number
    ((total > this.MIN_FEE ? total : this.MIN_FEE).toFixed(2));
  }
}