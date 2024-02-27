//기본 타입과의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//객체 타입과의 호환성

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name:"기린",
  color: "yellow",
}
let dog: Dog = {
  name: "돌돌",
  color: "brown",
  breed: "진도",
}
animal = dog;
// dog = animal; ->breed 속성이 dog타입에서는 필수 이기 때문에 조건이 더 적은 animal이 슈퍼타입

