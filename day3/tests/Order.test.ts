import Coupon from "../src/domain/entity/Cupom"
import Dimensions from "../src/domain/entity/Dimensions";
import Order from "../src/domain/entity/Order"
import Product from "../src/domain/entity/Product"

const validDimensions = new Dimensions(1,1,1);
const validProduct = (id: number) => new Product(id, 'descrição', 3, validDimensions, 1);
const validProducts = [validProduct(1), validProduct(2), validProduct(3)]
const VALID_CPF = '11111111200'

const createValidOrder = (): Order => {
  const validOrder = new Order(VALID_CPF);
  validProducts.forEach(function (product) { validOrder.addProduct(product, 1) });
  return validOrder;
}

test('should return false when cpf is null', () => {
  expect(() => {
    new Order('')
  }).toThrow(Error('Invalid CPF'))
})

test('calculate order subtotal', () => {
  const order = createValidOrder();

  expect(order.subtotal).toBe(9)
})

test('calculate order price', () => {
  const order = createValidOrder();
  const coupon = new Coupon('VALID', 0.1, new Date(new Date().getTime() + 10000))
  order.addCoupon(coupon)
  expect(order.total).toBe(8.1)
})

test('calculate order price with invalid coupon', () => {
  const order = createValidOrder();
  const coupon = new Coupon('VALID', 0.1, new Date(new Date().getTime() - 1000))
  order.addCoupon(coupon)
  expect(order.total).toBe(9)
})

test('add product with invalid quantity', () => {
  const validOrder = new Order(VALID_CPF);

  expect(() => validOrder.addProduct(validProduct(1), -1)).toThrow()
})

test('add equal itens to order', () => {
  const validOrder = new Order(VALID_CPF);
  validOrder.addProduct(validProduct(1), 1)
  expect(() => validOrder.addProduct(validProduct(1), 1)).toThrow()
})

