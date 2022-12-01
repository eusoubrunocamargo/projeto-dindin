import { useNavigate } from "react-router-dom";
import { clearItem, getItem } from "../../utils/storage";
import "./styles.css";
import Logo from "../../assets/logo.svg";
import Logout from "../../assets/logout.svg";
import User from "../../assets/user.svg";

export default function DashHeader(props) {
  const navigate = useNavigate();
  const user = getItem("name");

  const loggout = () => {
    clearItem();
    navigate("/login");
  };

  return (
    <>
      <header className="container-header">
        <div className="container-logo">
          <img src={Logo} alt="Logo"></img>
          <span>DinDin</span>
        </div>
        <div className="container-menu">
          <ul className="menu">
            <button
              className="btn-user"
              onClick={() => {
                props.setOpenEditUser(true);
              }}
            >
              <img src={User} alt="User" />
              {user}
            </button>
            <li>
              <img onClick={loggout} src={Logout} alt="Logout"></img>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
