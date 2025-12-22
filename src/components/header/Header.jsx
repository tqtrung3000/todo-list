import "./Header.css";
import ReactLogo from "./../../assets/react.svg";
import Avatar from "../avatar/Avatar";

function Header() {
  // Trả về JSX để render giao diện header
  return (
    // Phần tử header chính, có class 'header' để áp dụng CSS
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <img src={ReactLogo} alt="logo" className="header-logo" />
        </div>
        <div className="header-actions">
          <button className="icon-btn" aria-label="Create">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="#1f2937"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="11" cy="11" r="6" stroke="#374151" strokeWidth="2" />
            </svg>
          </button>

          <Avatar />
        </div>
      </div>
    </header>
  );
}

// Xuất component Header mặc định để có thể import và sử dụng trong các file khác
export default Header;
