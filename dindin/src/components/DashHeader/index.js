import { useNavigate } from "react-router-dom";
import "../DashHeader/styles.css";
import { clearItem, getItem } from "../../utils/storage";

export default function DashHeader() {
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
          <h1>Logomarca</h1>
        </div>
        <div className="container-menu">
          <ul className="menu">
            <li>{user}</li>
            <li onClick={loggout}>Sair</li>
          </ul>
        </div>
      </header>
    </>
  );
}
