import Delivery from "../src/domain/entity/Delivery";
import Dimensions from "../src/domain/entity/Dimensions";
import Product from "../src/domain/entity/Product";

test('Create valid delivery', function(){
  const product = new Product(1, 'descrição', 3, new Dimensions(1,2,3), 1);
  const delivery = new Delivery([product])

  expect(delivery.price).toBe(10);
})

test('Create valid delivery', function(){
  const product = new Product(1, 'descrição', 3, new Dimensions(0.1,0.2,0.3), 1);
  const distance = 100000;
  const delivery = new Delivery([product], distance)

  expect(delivery.price).toBe(1000);
})

