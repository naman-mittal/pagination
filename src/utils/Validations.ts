export const validateNumber = (number: string) => {
  if (!number) {
    return 'enter a value';
  }

  const numberRegex = /^\d+$/;

  if (!numberRegex.test(number)) {
    return 'not a number';
  }

  if (number.length > 4) {
    return 'enter b/w 0 & 9999';
  }

  return '';
};
