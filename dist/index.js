"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFristLetterUpperCase = exports.areaOfCircle = void 0;

var areaOfCircle = function areaOfCircle(radius) {
  if (isNaN(radius)) {
    throw "Parameter is not a number";
  }

  return Math.PI * Math.pow(radius, 2);
};

exports.areaOfCircle = areaOfCircle;

var isFristLetterUpperCase = function isFristLetterUpperCase(word) {
  if (typeof word !== "string") {
    throw "Parameter is not a string";
  }

  var firstLetter = word.charAt(0);
  return /[A-Z]/.test(firstLetter);
};

exports.isFristLetterUpperCase = isFristLetterUpperCase;