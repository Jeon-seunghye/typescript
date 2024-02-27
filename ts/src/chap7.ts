//void 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}
function func2(): void {
  console.log("hello");
}

let a: void;
// number, string, {} 할당 불가능
a = undefined;

// never(공집합)
// 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의
function func3() :never {
  while (true) {}
}

function func4() :never {
  throw new Error();
}