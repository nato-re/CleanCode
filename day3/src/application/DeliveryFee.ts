import ProductRepository from "../domain/repository/ProductRepository.interface";
import Delivery from "../domain/entity/Delivery";
import Product from "../domain/entity/Product";

export default class DeliveryFee {
  constructor(
    readonly productRepository: ProductRepository,
  ) { }
  async execute(
    input: {
      distance: number
      orderProducts: { productId: number, quantity: number }[]
    }
  ): Promise<number> {
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
};
