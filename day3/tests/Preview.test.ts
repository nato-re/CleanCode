import chai from 'chai';
import chaiHttp from 'chai-http';
import DeliveryFee from '../src/application/DeliveryFee';
import Preview from '../src/application/Preview';
import Coupon from '../src/domain/entity/Cupom';
import Dimensions from '../src/domain/entity/Dimensions';
import Product from '../src/domain/entity/Product';
import PreviewController from '../src/infra/controllers/PreviewController';
import CouponRepositoryMemory from '../src/infra/database/CouponRepositoryMemory';
import ProductRepositoryMemory from '../src/infra/database/ProductRepositoryMemory';
import ExpressAdapter from '../src/infra/http/ExpressAdapter';

chai.use(chaiHttp)

const validPreviewBody = {
  orderProducts: [{ productId: 1, quantity: 1 }],
  cpf: '111.111.112-00',
  cep: 'dummy',
  couponCode: 'VALIDO'
};

const expectedPreviewResponse = {
  deliveryFee: 10,
  total:0.9,
  subtotal:1
}

const server = new ExpressAdapter();
const productDummy = new Product(1, 'asd', 1, new Dimensions(1, 2, 3), 1);
const productRepository = new ProductRepositoryMemory([productDummy]);
const coupon = new Coupon('VALIDO', 0.1, new Date(new Date().getTime() + 10000))
const couponRepository = new CouponRepositoryMemory([coupon])
const previewUseCase = new Preview(productRepository, couponRepository)
const deliveryFeeUseCase =  new DeliveryFee(productRepository)
new PreviewController(server, deliveryFeeUseCase, previewUseCase)

test('deve retornar o código do pedido com sucesso', async() => {
  const response = await chai.request(server.app)
    .get('/preview').send(validPreviewBody);

  expect(response.body).toMatchObject(expectedPreviewResponse);
})