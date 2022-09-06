import "./App.css";
import "./css/layout.css";
import "./css/reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Days from "./components/Days";
import Day from "./components/Day";
import InsertDay from "./components/InsertDay";
import InsertVoca from "./components/InsertVoca";
import ScrollTopBtn from "./components/ScrollTopBtn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import UseRefComponent from "./components/UseRefComponent";

//리액트에서는 a태그를 사용하지 않는다.
//routing을 위해서 react-router-dom을 npm install react-router-dom을 통해서 설치해서 쓴다.
//그리고 App전체를 BrowserRouter로 감싸고 링크걸어서 바뀌는 곳은
//Routes 안에 Route로 만들어서 사용한다.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UseRefComponent /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
          <Route path="/day/:day" element={<Day />} />
          {/* insert에 voca라는 주소가 들어오면 InsertVoca를 렌더링 */}
        </Routes>
        <ScrollTopBtn />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
