// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello0", "im", "sh"];

let boolArr: Array<boolean> = [true, false, false];


// 배열 요소들이 다양할 경우
let multiArr: (string | number)[] = [1, "hell", 4]

// 다차원 배열의 타입을 저장
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]

// 튜플 ->길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", false];

const users: [string, number][] = [
  ["전승혜", 1],
  ["정유나", 2],
  ["김온유", 3],
  // [4, "웅냔냐"], 'number'은 'string'에 못넣음->오류확인 용이
]