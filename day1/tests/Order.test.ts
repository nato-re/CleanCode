import Order from "../src/Order"
import Product from "../src/Product"

const validProduct = new Product('asd', 1, 3)
const validProducts = [validProduct, validProduct, validProduct]
const VALID_CPF = '11111111200'

test('should return false when cpf is null', () => {
  expect(() => {
    new Order([validProduct], 'test', 0)
  }).toThrow(Error('Invalid CPF'))
})

test('calculate order subtotal', () =>{
  const order = new Order(validProducts, VALID_CPF);
  expect(order.subtotal).toBe(3)
})

test('calculate order price', () =>{
  const order = new Order(validProducts, VALID_CPF, 0.1);
  expect(order.total).toBe(2.7)
})
