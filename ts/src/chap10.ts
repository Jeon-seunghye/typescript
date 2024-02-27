//타입 추론
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론

let c = {
  id: 1,
  name: "승혜",
  profile: {
    nickname: "sh",
  },
  urls: ["https://sh.com"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

//함수
function func() {
  return "hello";
}
// 반환값이 string 타입으로 추론->반환값을 기준으로 추론

//기본값이 할당된 매개변수를 가지는 함수
function func1(message = "hello") {
  return "hello";
}

// 주의사항
let d;
// 암시적인 any 타입으로 추론
// 값을 할당하면 다음 라인부터 any타입이 해당 값의 타입으로 변화
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); // 오류 

// const 상수 -> 초기화때 설정 값을 변경하지 못하기 때문
const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

//최적 공통 타입
let arr = [1, "string"];
// (string | number)[] 타입으로 추론