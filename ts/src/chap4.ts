//타입 별칭  (type Alias)

type User = {
  id:number;
  name:string;
  nickname:string;
  birth:string;
  bio:string;
  location:string;
}
// 중복되지 않도록
// 함수 내에서 하면 함수 내에서만, 밖에서 선언하면 밖에서만

let user1: {
  id:number;
  name:string;
  nickname:string;
  birth:string;
  bio:string;
  location:string;
} = {
  id:1,
  name:"승혜",
  nickname: "sh",
  birth:"1997.10.01",
  bio:"안뇽",
  location:"서울",
}
let user2: User = {
  id:2,
  name:"냠",
  nickname: "sㅎㅎh",
  birth:"1997.09.01",
  bio:"안뇽",
  location:"서울",
}

// index signature
// properties가 없어도 에러x
type ContryCodes = {
  [key: string]: string; 
};

let countryCode :ContryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type ContryNumCodes = {
  [key: string]: number;
  Korea: number; //필수로 있어야 하는 것
};

let contryNumCode = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}