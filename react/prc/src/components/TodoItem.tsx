import { useTodoDispatch } from "../App";
import { Todo } from "../types"

interface Props extends Todo {
  //추가로 받으려면
  // extra: string; 의 형태로 받는다
  // onClickDelete: (id:number) => void;
}
export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickBtn = () => {
    dispatch.onClickDelete(props.id);
  }

  return (
  <div>
    {props.id}번 : {props.content}
    <button onClick={onClickBtn}>삭제</button>
  </div>
  );
}