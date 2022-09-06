import { useEffect, useState } from "react";

export default function ScrollTopBtn() {
  const [scrollY, setScrollY] = useState();
  const [btnStatus, setBtnStatus] = useState(false);

  const handFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      //100이상이면 버튼 보이게
      setBtnStatus(true);
    } else {
      //100이하이면 버튼 사라지게
      setBtnStatus(false);
    }
  };

  //top버튼 클릭하면 스크롤이 위로 올라가게
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); //scrollY의 값을 초기화
    setBtnStatus(false); //btnStatus의 값을 false로 바꿈으로써 버튼이 다시 사라짐
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handFollow);
    };
  });

  return (
    //{BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
    //onClick={handleTop}  // 버튼 클릭시 함수 호출
    <button id="topBtn" className={btnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}>
      TOP
    </button>
  );
}
