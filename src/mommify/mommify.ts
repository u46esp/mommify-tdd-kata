export const mommify = (str: string): string => {
  const needToMommifyString = (str: string): boolean => {
    const vowelCount = str
      .split('')
      .filter(char => char === 'a')
      .length

    return vowelCount > 0.3 * str.length
  }

  return needToMommifyString(str) ? str.replace('a', 'mommy') : str
};