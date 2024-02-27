//object -> 객체 리터럴 타입 설정
let user: {
  id?:number; //property가 있어도, 없어도 됨->optional property
  name:string;
} = {
  id:1,
  name:"승혜"
};

let config : {
  apiKey: string;
} = {
  apiKey: "myAPIkey",
}

let dog:{
  name:string;
  color:string;
} = {
  name:"조랭이",
  color:"brown",
};

dog.color;
user.id;