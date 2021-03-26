export const areaOfCircle = (radius) => {
  if (isNaN(radius)) {
    throw "Parameter is not a number";
  }

  return Math.PI * radius ** 2;
};

export const isFristLetterUpperCase = (word) => {
  if (typeof word !== "string") {
    throw "Parameter is not a string";
  }

  const firstLetter = word.charAt(0);

  return /[A-Z]/.test(firstLetter);
};
