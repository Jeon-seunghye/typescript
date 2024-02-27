//enum
//여러가지 값들에 ㅔ각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN=10,
  USER ,
  GUEST,
}
// 자동 할당
// 중간값을 설정 할 경우 첫번째 값은 항상 0 
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

enum Language {
  korean = 'ko',
  english = 'en'
}

const user1 = {
  name:"승혜",
  role: Role.ADMIN, //0:관리자
  language: Language.korean
}

const user2 = {
  name:"유나",
  role:Role.USER //1:일반유저
}

const user3 = {
  name:"온유",
  role:Role.GUEST //2:게스트
}

console.log(user1, user2, user3);

