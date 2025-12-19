import "./Header.css";
import react from "./../../assets/react.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title"></h1>
      <button className="header-button">
        {" "}
        <img src={react} alt="" />
      </button>
    </header>
  );
}



export default Header;
