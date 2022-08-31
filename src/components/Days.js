import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Days() {
  const [days, setDays] = useState([]);
  //state가 변경될때마다 감지를 해서 실행을 한다.
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/days").then((res) => {
      setDays(res.data);
      //console.log(days);
    });
  }, []);
  //상태변수를 넣어주면 그게 바뀔때마다 useEffect를 실행한다.
  return (
    <>
      <div className="container dayBox">
        <ul className="days">
          {days.map((item, idx) => {
            return (
              <li>
                <Link to={`/day/${item.day}`}>day{item.day}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
