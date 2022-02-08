let isSpicy = false;
let isSweet: boolean = true;

let firstName = "Maria";
console.log(firstName);
let lastName: string = "Silva";

let age = 25;
let whatTypeIsIt = [1, 2].reduce((prev, current) => 4);
let id: number = 1;

let steps = [1, 2, 3, 4];
let marks: number[] = [1, 2, 3, 4];
let prices: Array<number> = [1, 2, 3, 4];

let looselyTyped: any = 4;
looselyTyped = "a text with no error? yes!";
looselyTyped = false;

const fruits: string[] = ["Apple", "Banana", "Orange"];

console.log(fruits.forEach((fruit) => console.log(fruit.toUpperCase())));

const cars = ["Mercedes", "Ferrari", "Porsche"];
const drinks: Array<string> = ["Beer", "Vodka", "Wine"];
