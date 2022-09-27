import Cpf from "../src/Cpf"

test('should return false when cpf is null', () => {
  expect(() => new Cpf('')).toThrow(Error('Invalid CPF'))
})

test('should return false when cpf length is too short', () => {
  expect(() => new Cpf('null')).toThrow(Error('Invalid CPF'))
})
test('should return false when cpf length is too long', () => {
  expect(() => new Cpf('123456789012345')).toThrow(Error('Invalid CPF'))
})
test('should return false when cpf has only same number', () => {
  expect(() => new Cpf('11111111111')).toThrow(Error('Invalid CPF'))
})
test('should return true when cpf is valid', () => {
  expect(new Cpf('11111111200')).toBeDefined();
})
test('should return true when cpf is valid', () => {
  expect(new Cpf('11111111200')).toBeDefined();
})