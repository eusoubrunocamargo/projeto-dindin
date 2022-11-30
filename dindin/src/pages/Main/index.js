import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import { useState } from "react";

function Main() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });

  const inputValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/login", {
        email: form.email,
        senha: form.senha,
      });

      console.log(response);

      navigate('/dashboard')
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

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
          <form className="container-form" onSubmit={submit}>
            <h1>Login</h1>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={inputValue}
            ></input>
            <input
              name="senha"
              type="password"
              placeholder="Senha"
              value={form.senha}
              onChange={inputValue}
            ></input>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
