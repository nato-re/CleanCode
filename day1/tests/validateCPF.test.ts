import { validateCpf } from "../src/validateCPF"

test('should return false when cpf is null', () => {
  expect(() => validateCpf('')).toThrow(Error('Invalid CPF'))
})

test('should return false when cpf length is too short', () => {
  expect(() => validateCpf('null')).toThrow(Error('Invalid CPF'))
})
test('should return false when cpf length is too long', () => {
  expect(() => validateCpf('123456789012345')).toThrow(Error('Invalid CPF'))
})
test('should return false when cpf has only same number', () => {
  expect(() => validateCpf('11111111111')).toThrow(Error('Invalid CPF'))
})
test('should return true when cpf is valid', () => {
  expect(validateCpf('10141660635')).toBe(true)
})
test('should return true when cpf is valid', () => {
  expect(validateCpf('11111111200')).toBe(true)
})