//타입 단언
// 값 as 타입 으로 특정값을 원하는 타입으로 단언하는 것

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 23; 


//초과 프로퍼티 검사 피하기
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog

// 규칙
// 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나 
// A가 B의 서브타입이어야 함
let num1 = 10 as never;   // ✅
let num2 = 10 as unknown; // ✅
// let num3 = 10 as string;  // ❌

// 다중 단언
// 왼쪽 -> 오른쪽으로
let num3 = 10 as unknown as string;
//1. number타입을 unknown으로 단언
//2. unknown타입의 값을 string으로 단언
// => 좋지 않은 것 (오류가 발생할 확률이 매우 높아짐)


//const 단언
// 특정 값을 const 타입으로 단언하면 마치 변수를 const로 선언한 것 과 비슷하게 타입이 변경
let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly(읽기전용)를 갖도록 단언됨

//not null 단언
// 값 as 타입 형태를 따르지 않는 단언.. 값 뒤에 ! 를 붙이면 undefined 이거나 null이 아닐것으로 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "승혜"
};

const len: number = post.author!.length;