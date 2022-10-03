import chai from 'chai';
import chaiHttp from 'chai-http';
import ExpressAdapter from '../src/infra/http/ExpressAdapter';

import DeliveryFee from '../src/application/DeliveryFee';
import Preview from '../src/application/Preview';
import Coupon from '../src/domain/entity/Cupom';
import PreviewController from '../src/infra/controllers/PreviewController';
import CouponRepositoryMemory from '../src/infra/database/CouponRepositoryMemory';
import ProductRepositoryMemory from '../src/infra/database/ProductRepositoryMemory';
import CheckoutController from '../src/infra/controllers/CheckoutController';
import Checkout from '../src/application/Checkout';
import OrderRepositoryMemory from '../src/infra/database/OrderRepositoryMemory';
import Product from '../src/domain/entity/Product';
import Dimensions from '../src/domain/entity/Dimensions';


chai.use(chaiHttp)

const validCheckoutBody = {
  orderProducts: [{ productId: 1, quantity: 1 }],
  cpf: '111.111.112-00',
  cep: 'dummy'
};

const expectedCheckoutResponse = {
  orderCode: '202200000001'
}

const server = new ExpressAdapter();
const productDummy = new Product(1, 'asd', 1, new Dimensions(1, 2, 3), 1);
const productRepository = new ProductRepositoryMemory([productDummy]);
const orderRepository = new OrderRepositoryMemory()
const checkoutUseCase = new Checkout(productRepository, orderRepository)
new CheckoutController(server, checkoutUseCase)

test('deve retornar o código do pedido com sucesso', async () => {
  const response = await chai.request(server.app)
    .post('/checkout').send(validCheckoutBody);

  expect(response.body).toMatchObject(expectedCheckoutResponse);
})