import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <h1>
          <Link to="/">
            TODAY ―<strong>VOCA</strong>
          </Link>
        </h1>
        <nav id="menu">
          <ul>
            <li>
              <Link to="/insert/day" className="day">
                ADD DAY
              </Link>
            </li>
            <li>
              <Link to="/insert/voca" className="voca">
                VOCA
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
