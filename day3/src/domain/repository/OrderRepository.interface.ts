import Order from "../entity/Order"

export default interface OrderRepository {
  // getById(id: number): Promise<Order | undefined>
  create(orderProducts: { productId: number, quantity:number, price: number }[], cpf: string): Promise<number>
}