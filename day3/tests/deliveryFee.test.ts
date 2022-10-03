import ProductRepositoryMemory from "../src/infra/database/ProductRepositoryMemory"
import DeliveryFee from "../src/application/DeliveryFee"
import Product from "../src/domain/entity/Product";
import Dimensions from "../src/domain/entity/Dimensions";

test('calculo de entrega com sucesso', async() => {
  const productDummy = new Product(1, 'asd', 1, new Dimensions(1, 2, 3), 1);
const productRepository = new ProductRepositoryMemory([productDummy]);
  const deliveryFee = new DeliveryFee(productRepository)
  const fee = await deliveryFee.execute({
    distance: 10000,
    orderProducts: [{ productId: 1, quantity: 1 }]
  })
  expect(fee).toBe(100)
})