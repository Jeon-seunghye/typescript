let a: string | number | boolean;

a = 1;
a = "hello";
a = true;
// 개수에 제한이 없음

//배열타입 정의
let arr: (number | string | boolean )[] = [1, "hello", false];


// 객체 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};


//합집합(Union)
type Union1 = Dog | Person;

let union1: Union1 = { // ✅
  name: "",
  color: "",
};

let union2: Union1 = { // ✅
  name: "",
  language: "",
};

let union3: Union1 = { // ✅
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // ❌
//   name: "",
// };


//교집합(intersection)
let variable: number & string; 
// never 타입으로 추론됨

//이미 위에 선언되어있음
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Intersection = Dog & Person;

//모든 property를 가지고 있어야 함
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};