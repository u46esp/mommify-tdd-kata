const needToMommifyString = (str: string): boolean => {
  const vowelThreshold = 0.3 * str.length
  const vowels = ['a','e','i','o','u']
  const vowelCount = str
    .split('')
    .filter(char => vowels.includes(char))
    .length

  return vowelCount > vowelThreshold
}

export const mommify = (str: string): string => {
  return needToMommifyString(str) ? str.replace(/[(a|e|i|o|u)]+/g, 'mommy') : str
}
