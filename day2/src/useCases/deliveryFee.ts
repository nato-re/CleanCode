import ProductRepository from "../database/ProductRepository.interface";
import Delivery from "../Delivery";
import Product from "../Product";

export default class DeliveryFee {

  constructor(
    readonly productRepository: ProductRepository,
  ) { }
  async execute(input: Input): Promise<number> {
    const products = await Promise.all(
      input.orderProducts.map(
        async ({ productId }) => {
          const product = await this.productRepository.getById(productId);
          if(!product) throw Error('orderProduct doesn\'t exists')
          return product
        }))
      const delivery = new Delivery(products, input.distance)
      return delivery.price;
  }
}
type Input = {
  distance: number
  orderProducts: { productId: number, quantity: number }[]
}