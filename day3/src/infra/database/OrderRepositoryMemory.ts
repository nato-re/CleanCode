import OrderProduct from "../../domain/entity/OrderProduct";
import OrderRepository from "../../domain/repository/OrderRepository.interface";

export default class OrderRepositoryMemory implements OrderRepository {

  constructor(
    private orders: {
      id: number, cpf: string, orderProducts: OrderProduct[]
    }[] = []
  ) {
  }
  //  async getById(id: number) {
  //     return this.orders.find((product) => product.id === id)
  //   }
  async create(
    orderProductsInput: { productId: number; quantity: number; price: number; }[], cpf: string
  ): Promise<number> {
    const orderProducts = orderProductsInput.map(({ productId, quantity, price, }) => new OrderProduct(productId, quantity, price))
    this.orders.push({ id: this.orders.length, cpf, orderProducts });
    return this.orders.length;
  }

}