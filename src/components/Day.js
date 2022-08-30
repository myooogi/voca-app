import { useParams } from "react-router-dom";

export default function Day() {
  const { day } = useParams(); //useParams() hook은 상단 네비게이션의 params값을 받을 때 쓴다.
  console.log(day);
  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>
        <div className="btns">{/* <button className="btn"></button> 뒤로돌아가기버튼*/}</div>
      </div>
    </>
  );
}
