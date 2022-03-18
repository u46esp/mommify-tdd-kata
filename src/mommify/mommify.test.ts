import { mommify } from './mommify'

describe('Mommify', () => {
  it('keep empty string as-is', () => {
    expect(mommify('')).toBe('')
  })

  it('keep string as-is when there is no vowel', () => {
    expect(mommify('str')).toBe('str')
  })

  it('mommify string with single vowel', () => {
    expect(mommify('a')).toBe('mommy')
  })

  it('keep string as-is when vowel takes less than 30% of the whole length', () => {
    expect(mommify('blah')).toBe('blah')
  })

  it('mommify string when vowel occupies more than 30% of the whole length', () => {
    expect(mommify('bla')).toBe('blmommy')
  })

  it('mommify string with any of a,e,i,o,u vowel', () => {
    expect(mommify('bla')).toBe('blmommy')
    expect(mommify('ble')).toBe('blmommy')
    expect(mommify('bli')).toBe('blmommy')
    expect(mommify('blo')).toBe('blmommy')
    expect(mommify('blu')).toBe('blmommy')
  })
})