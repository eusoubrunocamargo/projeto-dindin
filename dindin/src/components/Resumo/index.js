import { useEffect, useState } from "react";
import "../Resumo/styles.css";
import { getItem } from "../../utils/storage";
import api from "../../services/api";

export default function Resumo(props) {
  const [extrato, setExtrato] = useState({});
  
  const extratoApi = async () => {
    try {
      const response = await api.get("/transacao/extrato", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });
      setExtrato(response.data)
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };


  useEffect(() => {
    extratoApi();
  },[extrato]);

  return (
    <>
      <div className="container-resumo">
        <h3>Resumo</h3>

        <div className="resumo-entradas">
          <span>Entradas</span>
          <span className="resumo-entradas-color">R$ {(extrato.entrada / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span>
        </div>

        <div className="resumo-entradas">
          <span>Saídas</span>
          <span className="resumo-saidas-color">R$ {(extrato.saida / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span>
        </div>

        <div className="resumo-entradas">
          <span>Saldo</span>
          <span className="resumo-saldo-color">R$ {(extrato.soma / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2})}</span>
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
