import Delivery from "../src/Delivery";
import Dimensions from "../src/Dimensions";
import Product from "../src/Product";

test('Create valid delivery', function(){
  const product = new Product(1, 'descrição', 3, new Dimensions(1,2,3), 1);
  const distance = 1000;
  //const density = 11;
  //const volume = 1; const result = 1100
  const delivery = new Delivery(distance, product.dimensions.volume, product.density)

  expect(delivery.price).toBe(10);
})