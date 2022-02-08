let salute = (name: string): string => {
  return `Hello ${name}`;
};

const saluteJohn = salute("John");
console.log(saluteJohn);

let notReturnAnythingJustLog = (): void => {
  console.log("not return anything");
};

notReturnAnythingJustLog();

// Type of function
type ConvertNumberToStringFunctionType = (nr: number) => string;

const convertNumberToString: ConvertNumberToStringFunctionType = (x: number) =>
  x.toString();

// Type of function with object as parameter
interface UserType {
  id: number;
  name: string;
}

type UserFunctionType = (user: UserType) => number;

let getUser: UserFunctionType = (user) => user.id;
