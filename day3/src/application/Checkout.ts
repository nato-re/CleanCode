import Order from "../domain/entity/Order"
import OrderRepository from "../domain/repository/OrderRepository.interface"
import ProductRepository from "../domain/repository/ProductRepository.interface"

export default class Checkout {
  constructor(
    private productRepository: ProductRepository,
    private orderRepository: OrderRepository,
  ) { }

  async execute(
    input: {
      cpf: string,
      orderProducts: { productId: number, quantity: number }[]
    }) {
    const order: Order = new Order(input.cpf);
    await Promise.all(
      input.orderProducts.map(async (orderProduct) => {
        const product = await this.productRepository.getById(orderProduct.productId)
        if (!product) throw Error('orderProduct doesn\'t exists')
        order.addProduct(product, orderProduct.quantity);
      })
    )
    const id = await this.orderRepository.create(order.orderProducts, order.cpf.value)
    const orderCode = order.createCode(id);
    return { orderCode };
  }
}
