import Product from "./Product";
import { validateCpf } from "./validateCPF";

export default class Order {
  constructor(
    protected products: Product[],
    protected cpf: string,
    protected cupom: number = 0
  ) {
    this.validateCpf();
  }
  validateCpf(){
    validateCpf(this.cpf)
  }
  get subtotal(): number{
    const value = this.products.reduce((prev, acc) => acc.price + prev, 0);
    return value 
  }
  get total(){
    return this.subtotal - (this.subtotal * this.cupom)
  }
}