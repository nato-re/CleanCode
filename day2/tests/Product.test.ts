import Dimensions from "../src/Dimensions";
import Product from "../src/Product"
const validDimensions = new Dimensions(1,1,1);
const validWeigh = 10;
test('create product with invalid description', function(){
  expect(() => new Product(1, '', 1, validDimensions, validWeigh)).toThrowError('Invalid description')
})

test('create product with invalid price', function(){
  expect(() => new Product(1, 'asd', 0, validDimensions, validWeigh)).toThrowError('Invalid price')
})

test('create product with invalid weigh', function(){
  expect(() => new Product(1, 'asd', 1, validDimensions, -1)).toThrowError('Invalid weigh')
})

test('create product with invalid dimensions', function(){
  expect(() => new Dimensions(0,0,-1)).toThrowError('Invalid Dimension')
})