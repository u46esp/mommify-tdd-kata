import { mummify } from './mummify'

describe('Mummify', () => {
  it('keep empty string as-is', () => {
    expect(mummify('')).toBe('')
  })

  it('keep string as-is when there is no vowel', () => {
    expect(mummify('str')).toBe('str')
  })

  it('mommify string with single vowel', () => {
    expect(mummify('a')).toBe('mommy')
  })
})