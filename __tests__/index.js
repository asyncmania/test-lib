const { areaOfCircle, isFristLetterUpperCase } = require("../src/index");

describe("Test for area of a circle", () => {
  test("A paramater that is not a number should throw an error", () => {
    try {
      areaOfCircle([]);
    } catch (error) {
      expect(error).toBe("Parameter is not a number");
    }
  });

  test("A radius parameter should return the area of the circle", () => {
    const result = areaOfCircle(5);
    expect(result).toBe(78.53981633974483);
    const result2 = areaOfCircle(7);
    expect(result2).toBe(153.93804002589985);
  });
});

describe("Test to check if the first letter is an upper case", () => {
  test("A parameter that is not a string should throw an error", () => {
    try {
      isFristLetterUpperCase([]);
    } catch (error) {
      expect(error).toBe("Parameter is not a string");
    }
  });

  test("A word that starts with a lowercase should return false", () => {
    const result = isFristLetterUpperCase("how about This");
    expect(result).toBe(false);
  });

  test("A word that starts with a non-letter character should return false", () => {
    const result = isFristLetterUpperCase("[some text here]");
    expect(result).toBe(false);
  });

  test("A word that starts with an uppercase should return true", () => {
    const result = isFristLetterUpperCase("This should work fine");
    expect(result).toBe(true);
  });
});
