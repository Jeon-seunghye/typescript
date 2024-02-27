// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온타입

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴하였습니다.
// Member -> {name}님 현재까지 {point}모였습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user:User){
  //switch ver
  switch(user.tag){
    case "ADMIN":{
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다. `);
      break;
    }
    case "MEMBER":{
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다. `);
      break;
    }
    case "GUEST":{
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다. `);
      break;
    }
  }

  //if ver
  if(user.tag === "ADMIN"){
    //admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다. `);
  } else if(user.tag === "MEMBER"){
    //member
    console.log(`${user.name}님 현재까지 ${user.point}명 강퇴하였습니다. `);
  } else{
    //guest
  }
}

// 비동기 작업의 결과를 처리하는방식

type LoadingTask = {
  state: "LOADING",
}

type FailedTask = {
  state: "FAILED",
  error: {
    message: "오류 발생"
  },
}

type SuccessTask = {
  state: "SUCCESS",
  response: {
    data: "데이터"
  },
}

// 서로소 유니온타입으로 설정
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 : 콘솔에 로딩중 출력
// 실패 : 에러메세지
// 성공 : 데이터 출력
function processResult(task: AsyncTask){
  switch (task.state){
    case "LOADING":{
      console.log("로딩중");
      break;
    }
    case "FAILED":{
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS":{
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생"
  },
};
const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터"
  },
};