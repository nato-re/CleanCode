import Dimensions from "../entity/Dimensions";
import Product from "../entity/Product";

export default interface ProductRepository {
  getById(id: number): Promise<Product | undefined>
  // create(description: string, price: number, dimensions: Dimensions, weigh: number): Promise<void>
}