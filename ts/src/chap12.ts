// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

function func(value: number | string) {
  // value.toFixed() // 오류
	// value.toUpperCase() // 오류
  if (typeof value === "number") { //value의 타입이 number임을 보장해야함
    console.log(value.toFixed()); 
  } else if (typeof value === "string") { //value의 타입이 string임을 보장해야함
    console.log(value.toUpperCase());
  }
}

//instanceof 타입가드
function func1(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { //왼쪽의 값이 오른쪽의 인스턴스값인지
    console.log(value.getTime());
  }
}

//in 타입가드
type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) { //age가 value에 있는지 여부 확인
    console.log(`${value.name}은 ${value.age}살 입니다`)
  }
}