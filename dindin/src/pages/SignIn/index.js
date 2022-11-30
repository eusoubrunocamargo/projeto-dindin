import "./styles.css";
import api from "../../services/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    senhaIdentica: "",
  });

  const inputValue = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();

    try {
      if (!form.email || !form.nome || !form.senha || !form.senhaIdentica) {
        return alert("Todos os campos são obrigatórios!");
      }

      if (form.senha !== form.senhaIdentica) {
        return alert("A senha deve ser igual!");
      }

      const { data } = await api.post("/usuario", {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });

      console.log(data);

      navigate("/login");
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

  return (
    <div className="container-geral">
      <form className="container-form" onSubmit={submit}>
        <h1>Cadastre-se</h1>
        <input
          name="nome"
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={inputValue}
        ></input>

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

        <input
          name="senhaIdentica"
          type="password"
          placeholder="Confirme sua senha"
          value={form.senhaIdentica}
          onChange={inputValue}
        ></input>
        <button>Cadastrar</button>
        <span>Já tem cadastro? <Link to="/login">Faça login!</Link></span>
      </form>
    </div>
  );
}

export default SignIn;
