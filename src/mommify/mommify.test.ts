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
})