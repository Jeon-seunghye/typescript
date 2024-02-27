//enum
//여러가지 값들에 ㅔ각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
// 자동 할당
// 중간값을 설정 할 경우 첫번째 값은 항상 0 
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "승혜",
    role: Role.ADMIN, //0:관리자
    language: Language.korean
};
const user2 = {
    name: "유나",
    role: Role.USER //1:일반유저
};
const user3 = {
    name: "온유",
    role: Role.GUEST //2:게스트
};
console.log(user1, user2, user3);
export {};
