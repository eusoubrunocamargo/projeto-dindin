import { useEffect, useState } from "react";
import "../Resumo/styles.css";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

export default function Resumo(props) {
  const [extrato, setExtrato] = useState([]);

  const extratoApi = async () => {
    try {
      const { data } = await api.get("/transacao/extrato", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });

      setExtrato(data);
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

  useEffect(() => {
    extratoApi();
  },[]);
  return (
    <>
      <div className="container-resumo">
        <h3>Resumo</h3>

        <div className="resumo-entradas">
          <span>Entradas</span>
          <span className="resumo-entradas-color">R${extrato.entrada}</span>
        </div>

        <div className="resumo-entradas">
          <span>Saídas</span>
          <span className="resumo-saidas-color">R${extrato.saida}</span>
        </div>

        <div className="resumo-entradas">
          <span>Saldo</span>
          <span className="resumo-saldo-color">R${extrato.soma}</span>
        </div>
      </div>

      <div className="container-btn-add-registro">
        <button
          onClick={() => {
            props.addRegistro
              ? props.setAddRegistro(false)
              : props.setAddRegistro(true);
          }}
        >
          Adicionar Registro
        </button>
      </div>
    </>
  );
}
