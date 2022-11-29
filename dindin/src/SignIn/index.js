import "./styles.css";
import api from "../services/api";

function SignIn() {
  return (
    <div className="container-geral">
      <form className="container-form">
        <h1>Cadastre-se</h1>
        <input type="text" placeholder="Nome" required></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme sua senha"></input>
        <button type="submit">Cadastrar</button>
        <span>Já tem cadastro? Faça login!</span>
      </form>
    </div>
  );
}

export default SignIn;
