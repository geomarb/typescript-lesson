let employee: [id: number, name: string] = [1, "Steve"];

console.log(employee[0]); // returns 1

employee.push("Bill", 1, 2);

console.log(employee);

// retrieving value by index and performing an operation
employee[1] = employee[1].concat(" Jobs");

console.log(employee); //Output: [1, 'Steve Jobs']
