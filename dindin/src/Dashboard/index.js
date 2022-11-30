import './styles.css';
import Filtros from '../components/Filtros';
import { useState } from 'react';
import ModalRegistro from '../components/ModalRegistro';
import DashHeader from '../components/DashHeader';
import Extrato from '../components/Extrato';
import Resumo from '../components/Resumo';
import EditUser from '../components/EditUser';
import Filtro from '../assets/icon-filtro.svg';

function Dashboard() {

  const [filtro, setFiltro] = useState(false);

  function handleFiltro() {
    filtro ?
      setFiltro(false) :
      setFiltro(true);
  };

  const [addRegistro, setAddRegistro] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);

  // function handleAdicionarRegistro() {
  //   console.log("entrou...");
  //   addRegistro ?
  //     setAddRegistro(false) :
  //     setAddRegistro(true);
  // };

  return (
    <div className='container-geral'>

      <DashHeader
        openEditUser={openEditUser}
        setOpenEditUser={setOpenEditUser} />

      <div className='container-dashboard'>

        <div className='container-lado-esquerdo'>
          <button onClick={handleFiltro} className='btn-exibir-filtro'><img src={Filtro} alt='Filtro' /><span>Filtrar</span></button>
          {filtro ? <Filtros /> : null}

          <Extrato />
        </div>

        <div className='container-lado-direito'>
          <Resumo
            addRegistro={addRegistro}
            setAddRegistro={setAddRegistro} />
        </div>

      </div>

      {addRegistro ? <ModalRegistro
        addRegistro={addRegistro}
        setAddRegistro={setAddRegistro}
      /> : null}

      {openEditUser ? <EditUser
        openEditUser={openEditUser}
        setOpenEditUser={setOpenEditUser}
      /> : null}

    </div>

  );
}


export default Dashboard;

