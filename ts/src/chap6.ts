//any
// 특정 변수의 타입을 모를 때 (사용많이하지말기)

let anyVar: any = 10;
anyVar = "hello";
let num:number = 10;
num = anyVar;
//unknown
let unknownVar: unknown;
//연산 불가능

if(typeof unknownVar === "number"){
  num = unknownVar;
}
// 제약조건 걸고 사용 가능