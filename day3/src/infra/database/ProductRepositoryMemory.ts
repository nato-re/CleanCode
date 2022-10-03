import Dimensions from "../../domain/entity/Dimensions";
import Product from "../../domain/entity/Product";
import ProductRepository from "../../domain/repository/ProductRepository.interface";



export default class ProductRepositoryMemory implements ProductRepository {
  constructor(
    private products: Product[] = []
  ) {}
 async getById(id: number) {
    return this.products.find((product) => product.id === id)
  }
  // async create(description: string, price: number, dimensions: Dimensions, weigh: number) {
  //   const product = new Product(this.products.length, description, price, dimensions, weigh)
  //   this.products.push(product);
  // }
}