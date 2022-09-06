import axios from "axios";
import { useState } from "react";
export default function Voca(props) {
  const [info, setInfo] = useState(props);
  console.log(info);
  //컴포넌트 단위로 모든게 움직인다.
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(props.isDone);
  const toggleKor = function () {
    console.log(isVisible);
    setIsVisible(!isVisible); //true상태를 부정해서 true와 false 상태를 왔다갔다
  };
  const toggleDone = () => {
    //console.log("toggleDone");
    //axios.get() read
    //axios.post() create,update,delete
    //axios.put() update
    //axios.delete() delete

    //console.log(...props);
    axios
      .put(`https://today-voca.herokuapp.com/voca/${props.id}`, {
        isDone: !isDone, //!부정
      })
      .then((res) => {
        if (res.data.update === "ok") {
          console.log("변경되었습니다");
          setIsDone(!isDone);
        }
      });
  };
  const deleteVoca = () => {
    console.log("delete");
    if (window.confirm("삭제하시겠습니까?")) {
      console.log("delete");
      axios.delete(`https://today-voca.herokuapp.com/voca/${props.id}`).then((res) => {
        console.log(res.data);
        if (res.data.delete === "ok") {
          setInfo({ id: -1 });
          //db에서 값을 지웠다는 결과를 받았기 때문에
          //-1을 세팅하고 아래쪽에서 return false를 통해 화면에서 렌더링 안되게 만듦
        }
      });
    }
  };
  if (info.id === -1) {
    return false;
  }
  return (
    <li className={isDone ? "done" : ""} data-idx={props.id}>
      <div className="check">
        <label className="checkBox">
          <input type="checkbox" onChange={toggleDone} />
          <span className="label"></span>
        </label>
      </div>
      <div className="eng word">{props.eng}</div>
      <div className="kor word">{isVisible && props.kor}</div>
      <div className="btns">
        <button className="btn hidden" onClick={toggleKor}>
          HIDDEN
        </button>
        <button className="btn del" onClick={deleteVoca}>
          DEL
        </button>
      </div>
    </li>
  );
}
