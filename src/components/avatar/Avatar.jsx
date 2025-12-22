import avatarDefault from "./../../assets/avatar-default.svg";
import "./Avatar.css";

function Avatar() {
  return (
    <>
      <img src={avatarDefault} alt="avatar" className="avatar avatar-size-40" />
    </>
  );
}

export default Avatar;
