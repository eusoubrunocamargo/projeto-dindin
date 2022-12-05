import "./styles.css";
import Filtros from "../../components/Filtros";
import { useState, useEffect } from "react";
import ModalRegistro from "../../components/ModalRegistro";
import DashHeader from "../../components/DashHeader";
import Extrato from "../../components/Extrato";
import Resumo from "../../components/Resumo";
import EditUser from "../../components/EditUser";
import Filtro from "../../assets/icon-filtro.svg";
import { getItem } from "../../utils/storage";
import api from "../../services/api";

function Dashboard() {
  const [filtro, setFiltro] = useState(false);
  function handleFiltro() {
    filtro ? setFiltro(false) : setFiltro(true);
  }
  const [openEditUser, setOpenEditUser] = useState(false);
  const [addRegistro, setAddRegistro] = useState(false);
  const [registros, setRegistros] = useState([]);

  const transacoesUsuario = async () => {
    try {
      const { data } = await api.get("/transacao", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });
      setRegistros([...data]);
    } catch (error) {
      alert(error.response.data.mensagem);
    }
  };

  useEffect(() => {
    transacoesUsuario();
  }, []);

  return (
    <div className="container-geral">
      <DashHeader
        openEditUser={openEditUser}
        setOpenEditUser={setOpenEditUser}
      />

      <div className="container-dashboard">
        <div className="container-lado-esquerdo">
          <button onClick={handleFiltro} className="btn-exibir-filtro">
            <img src={Filtro} alt="Filtro" />
            <span>Filtrar</span>
          </button>
          {filtro ? <Filtros /> : null}

          <Extrato registros={registros} setRegistros={setRegistros} />
        </div>

        <div className="container-lado-direito">
          <Resumo addRegistro={addRegistro} setAddRegistro={setAddRegistro} />
        </div>
      </div>

      {addRegistro ? (
        <ModalRegistro
          addRegistro={addRegistro}
          setAddRegistro={setAddRegistro}
          registros={registros}
          setRegistros={setRegistros}
        />
      ) : null}

      {openEditUser ? (
        <EditUser
          openEditUser={openEditUser}
          setOpenEditUser={setOpenEditUser}
        />
      ) : null}
    </div>
  );
}

export default Dashboard;
