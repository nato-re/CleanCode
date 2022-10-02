import Dimensions from "../Dimensions";
import Product from "../Product";
import ProductRepository from "./ProductRepository.interface";

const productDummy = new Product(1, 'asd', 1, new Dimensions(1, 2, 3), 1);

export default class ProductRepositoryMemory implements ProductRepository {
  private products: Product[] = [productDummy];
  constructor() {
  }
 async getById(id: number) {
    return this.products.find((product) => product.id === id)
  }
  async create(description: string, price: number, dimensions: Dimensions, weigh: number) {
    const product = new Product(this.products.length, description, price, dimensions, weigh)
    this.products.push(product);
  }
}