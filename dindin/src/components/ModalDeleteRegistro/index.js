import api from "../../services/api";
import { getItem } from "../../utils/storage";
import "../ModalDeleteRegistro/styles.css";
import { useEffect, useState } from "react";

export default function ModalDelete({
  id,
  registros,
  setRegistros,
  setDeleteItem,
}) {
  const deletarRegistro = async () => {
    try {
      await api.delete(`/transacao/${id}`, {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });
      const localRegistros = [...registros];
      const indexRegistro = localRegistros.findIndex(
        (registro) => registro.id === id
      );
      localRegistros.splice(indexRegistro, 1);
      setRegistros(localRegistros);
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

  const [extrato, setExtrato] = useState({});

  const extratoApi = async () => {
    try {
      const response = await api.get("/transacao/extrato", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });
      setExtrato(response.data);
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

  useEffect(() => {
    extratoApi();
  }, [extrato]);

  return (
    <>
      <div className="container-modal-deletar">
        <div className="txt-modal">
          <h4>Apagar?</h4>
        </div>

        <div className="container-btn-sim-nao">
          <button className="btn-deletar-sim" onClick={deletarRegistro}>
            Sim
          </button>
          <button
            className="btn-deletar-nao"
            onClick={() => {
              setDeleteItem([]);
            }}
          >
            Não
          </button>
        </div>
      </div>
    </>
  );
}
