import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Voca from "./Voca";

export default function Day() {
  const { day } = useParams(); //useParams() hook은 상단 네비게이션의 params값을 받을 때 쓴다.
  console.log(day);
  const [voca, setVoca] = useState([]);
  //queryString
  useEffect(() => {
    axios.get(`https://today-voca.netlify.app/voca/${day}`).then((res) => {
      setVoca(res.data);
      //console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day - {day}</h2>
        {/* 여기에 day/1에 해당하는 값을 뿌려주면 된다. */}
        <ul className="vocas">
          {voca.map((item, idx) => {
            return <Voca kor={item.kor} eng={item.eng} key={item.id} isDone={item.isDone} id={item.id} day={item.day} />;
          })}
        </ul>
        <div className="btns">
          <Link to="/" className="btn backBtn">
            BACK
          </Link>
        </div>
      </div>
    </>
  );
}
