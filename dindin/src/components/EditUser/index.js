import "../EditUser/styles.css";
import { useState } from "react";
import { getItem, setItem } from "../../utils/storage";
import api from "../../services/api";

export default function EditUser(props) {
  const [stringInput, setStringInput] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarsenha: "",
  });

  const handleChangeNome = (event) => {
    setStringInput({ ...stringInput, nome: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setStringInput({ ...stringInput, email: event.target.value });
  };

  const handleChangeSenha = (event) => {
    setStringInput({ ...stringInput, senha: event.target.value });
  };

  const handleChangeConfirmarSenha = (event) => {
    setStringInput({ ...stringInput, confirmarsenha: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (stringInput.senha !== stringInput.confirmarsenha) {
        return alert("A senha deve ser igual!");
      }

      await api.put(
        "/usuario",
        {
          nome: stringInput.nome,
          email: stringInput.email,
          senha: stringInput.senha,
        },
        {
          headers: {
            authorization: `Bearer ${getItem("token")}`,
          },
        }
      );

      setItem("name", stringInput.nome);
    } catch (error) {
      alert(error.response.data.mensagem);
    }

    props.setOpenEditUser(false);
  };

  return (
    <>
      <div className="modal-add-registro">
        <div className="container-add-registro">
          <div className="titulo-btn-fechar">
            <h3>Editar Perfil</h3>
            <button
              onClick={() => {
                props.setOpenEditUser(false);
              }}
            >
              X
            </button>
          </div>

          <form className="form-add-registro" onSubmit={handleSubmit}>
            <div className="container-itens-registro">
              <label htmlFor="editar-nome">Nome</label>
              <br />
              <input
                onChange={handleChangeNome}
                type="text"
                id="editar-nome"
                required
              />
              <br />
            </div>

            <div className="container-itens-registro">
              <label htmlFor="editar-email">E-mail</label>
              <br />
              <input
                onChange={handleChangeEmail}
                type="email"
                id="editar-email"
                required
              />
              <br />
            </div>

            <div className="container-itens-registro">
              <label htmlFor="editar-senha">Senha</label>
              <br />
              <input
                onChange={handleChangeSenha}
                type="password"
                id="editar-senha"
                required
              />
              <br />
            </div>

            <div className="container-itens-registro">
              <label htmlFor="editar-confirmar-senha">Confirmar Senha</label>
              <br />
              <input
                onChange={handleChangeConfirmarSenha}
                type="password"
                id="editar-confirmar-senha"
                required
              />
              <br />
            </div>

            <div className="btn-enviar-add-registro">
              <button type="submit">Confirmar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
