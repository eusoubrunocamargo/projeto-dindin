import { Link } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <div className="container-geral">
      <div className="container-main">
        <div className="left-side">
          <h1>Controle suas finanças, sem planilha chata.</h1>
          <span>
            Organizar suas finanças nunca foi tão fácil com o DINDIN. Você tem
            tudo num único lugar e em um clique de distância.
          </span>
          <Link className="btn-sign-up" to="/sign-up">
            Cadastre-se
          </Link>
        </div>
        <div className="right-side">
          <form className="container-form">
            <h1>Login</h1>
            <input type="text" placeholder="E-mail"></input>
            <input type="text" placeholder="Password"></input>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
