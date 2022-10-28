const lowercaseRegex = new RegExp(/[a-z]/g);
const uppercaseRegex = new RegExp(/[A-Z]/g);
const numberRegex = new RegExp(/[0-9]/g);

export const MINIMUM_OF_CHARACTERS_FOR_PASSWORD = 8;

export const hasLowercase = (string: string) => {
  return string.match(lowercaseRegex);
};

export const hasUppercase = (string: string) => {
  return string.match(uppercaseRegex);
};

export const hasNumbers = (string: string) => {
  return string.match(numberRegex);
};

export const hasMinimumCharacters = (string: string) => {
  return string.length >= MINIMUM_OF_CHARACTERS_FOR_PASSWORD;
};
