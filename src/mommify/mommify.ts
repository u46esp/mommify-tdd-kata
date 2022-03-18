const needToMommifyString = (str: string): boolean => {
  const vowelCount = str
    .split('')
    .filter(char => char === 'a' || char === 'e' || char == 'i' || char === 'o' || char === 'u')
    .length

  return vowelCount > 0.3 * str.length
}


export const mommify = (str: string): string => {

  return needToMommifyString(str) ? str.replace(/[(a|e|i|o|u)]+/g, 'mommy') : str
};