import "./styles.css";
import Filtros from "../../components/Filtros";
import { useEffect, useState } from "react";
import ModalRegistro from "../../components/ModalRegistro";
import DashHeader from "../../components/DashHeader";
import Extrato from "../../components/Extrato";
import Resumo from "../../components/Resumo";
import EditUser from "../../components/EditUser";
import Filtro from "../../assets/icon-filtro.svg";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

function Dashboard() {
  const [filtro, setFiltro] = useState(false);
  const [arrayCategorias, setArrayCategorias] = useState();
  function handleFiltro() {
    filtro ? setFiltro(false) : setFiltro(true);
  }
  const [openEditUser, setOpenEditUser] = useState(false);
  const categoriasApi = async () => {
    try {
      const { data } = await api.get("/categoria", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });

      setArrayCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [addRegistro, setAddRegistro] = useState(false);

  useEffect(() => {
    categoriasApi();
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

          <Extrato />
        </div>

        <div className="container-lado-direito">
          <Resumo addRegistro={addRegistro} setAddRegistro={setAddRegistro} />
        </div>
      </div>

      {addRegistro ? (
        <ModalRegistro
          addRegistro={addRegistro}
          setAddRegistro={setAddRegistro}
          arrayCategorias={arrayCategorias}
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
