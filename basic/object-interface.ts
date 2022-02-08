interface UserType {
  name: string;
  age: number;
  isAdm?: boolean;
}

let user: UserType = {
  name: "Mark",
  age: 28,
};
console.log(user);

interface StudentType extends UserType {
  school: string;
  course: string;
}

let student: StudentType = {
  name: "Anna",
  age: 21,
  isAdm: false,
  school: "Wild Code School",
  course: "WebDev",
};

interface StudentType extends UserType {
  school: string;
  course: string;
}

interface WeirdType {
  weirdArray: any[];
}

console.log(student);
