import { removeOtherCharacters, formatPlate, onlyNumericCharacters } from './helpers'

describe('testing helpers functions', () => {
  test('It can remove characters espetials', () => {
    const str = removeOtherCharacters('Matheus !@@# Araujo.*!@(&1234')
    expect(str).toBe('MatheusAraujo1234')
  })

  test('It can remove characters all character, except numeric', () => {
    const str = onlyNumericCharacters('Matheus !@@# Araujo.*!@(&123456')
    expect(str).toBe('123456')
  })

  test('It can format plate', () => {
    const str = formatPlate('Matheus !@@# Araujo.*!@(&1234876521')
    const str2 = formatPlate('MATKJHASFJ ')
    expect(str).toBe('MAT-1234')
    expect(str2).toBe('MAT-')
  })
})
