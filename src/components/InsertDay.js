import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function InsertDay() {
  const navigate = useNavigate();
  const [days, setDays] = useState([]); //화면 렌더링할때는 useState를 사용해야한다 (기본값)
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/days").then((res) => {
      setDays(res.data);
    });
  }, []);
  const insertDay = () => {
    //axios를 가지고 json-server에 데이터 밀어넣기
    //setDays(days + 1);
    axios.post("http://127.0.0.1:5000/days", { day: days.length + 1 }).then((res) => {
      console.log(res);
      if (res.statusText === "Created") {
        alert("day가 추가되었습니다.");
        navigate("/");
      }
    });
  };
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">insert day</h2>
        <p className="current">
          current day :
          <strong>
            <span className="day">{days.length}</span>
            <span className="unit">day</span>
          </strong>
        </p>
        <div className="btns">
          <button className="btn" onClick={insertDay}>
            add day
          </button>
        </div>
      </div>
    </>
  );
}
