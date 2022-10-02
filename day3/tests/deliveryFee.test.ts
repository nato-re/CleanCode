import ProductRepositoryMemory from "../src/database/ProductRepositoryMemory"
import DeliveryFee from "../src/useCases/deliveryFee"

test('calculo de entrega com sucesso', async() => {
  const deliveryFee = new DeliveryFee(new ProductRepositoryMemory())
  const fee = await deliveryFee.execute({
    distance: 10000,
    orderProducts: [{ productId: 1, quantity: 1 }]
  })
  expect(fee).toBe(100)
})