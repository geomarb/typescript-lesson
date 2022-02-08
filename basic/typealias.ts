type ArrayOfNumbers = number[];
const numberList: ArrayOfNumbers = [5, 4, 3, 2];

type ArrayOfNumbersOrNumber = number[] | number;
let numberListOrNumber: ArrayOfNumbersOrNumber = 5;
numberListOrNumber = [1, 2];

type ArrayOfString = string[];
const textList: ArrayOfString = ["a", "b"];

type StringOrNumber = string | number;
let numberThatBecomeAString: StringOrNumber = 5;
numberThatBecomeAString = "string";
