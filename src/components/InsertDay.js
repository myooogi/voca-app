import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function InsertDay() {
  const navigate = useNavigate();
  const [days, setDays] = useState([]); //화면 렌더링할때는 useState를 사용해야한다 (기본값)
  useEffect(() => {
    //받는곳
    axios.get("http://127.0.0.1:8099/days").then((res) => {
      setDays(res.data);
    });
  }, []);
  const insertDay = () => {
    //axios를 가지고 json-server에 데이터 밀어넣기
    //setDays(days + 1);
    axios.post("http://127.0.0.1:8099/day/add", { day: days.length + 1 }).then((res) => {
      console.log(res.data);
      if (res.data.insert === "ok") {
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
          <Link to="/" className="btn backBtn">
            BACK
          </Link>
          <button className="btn" onClick={insertDay}>
            add day
          </button>
        </div>
      </div>
    </>
  );
}
