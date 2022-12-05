import "./styles.css";
import Lapis from "../../assets/lapis.svg";
import Lixeira from "../../assets/lixeira.svg";
import { useState } from "react";
import ModalDelete from "../ModalDeleteRegistro";
import ModalEditarRegistro from "../ModalEditarRegistro";

export default function Extrato({ registros, setRegistros }) {
  const [deleteItem, setDeleteItem] = useState([]);
  const [editItem, setEditItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const [diaExtenso, setDiaExtenso] = useState('') 

  return (
    <>
      <div className="container-extrato">
        <div className="container-descricao-itens">
          <ul>
            <li>Data</li>
            <li>Dia da semana</li>
            <li>Descrição</li>
            <li>Categoria</li>
            <li>Valor</li>
            <li></li>
          </ul>
        </div>

        {registros.map((item) => {
          
          return (
            <div key={item.id} className="container-item" id="container-item">
              {editItem.includes(item.id) ? (
                <ModalEditarRegistro diaExtenso={diaExtenso} setDiaExtenso={setDiaExtenso} setSelectedItem={setSelectedItem} setEditItem={setEditItem} registros={registros} setRegistros={setRegistros} selectedItem={selectedItem} />
              ) : null}
              <div key={item.id} className="container-itens-extrato">
                <ul>
                  <li>{(item.data)}</li>
                  <li>{diaExtenso}</li>
                  <li>{item.descricao}</li>
                  <li>{item.categoria_nome}</li>
                  <li>R$ {(item.valor / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2})}</li>
                  <li>
                    <div className="container-editar-item">
                      <button
                        onClick={() => {
                          setEditItem([...editItem, item.id]);
                          setSelectedItem([...selectedItem, item]);
                        }}
                      >
                        <img src={Lapis} alt="Lapis" />
                      </button>

                      {deleteItem.includes(item.id) ? (
                        <ModalDelete
                          registros={registros}
                          setRegistros={setRegistros}
                          id={item.id}
                          setDeleteItem={setDeleteItem}
                          
                        />
                      ) : null}
                      <button
                        onClick={() => {
                          if (deleteItem.includes(item.id)) {
                            const arr = deleteItem.splice(
                              deleteItem.indexOf(item.id),
                              1
                            );
                            setDeleteItem([...deleteItem, arr]);
                            return;
                          }
                          setSelectedItem([...selectedItem, item]);
                          setDeleteItem([...deleteItem, item.id]);
                        }}
                      >
                        <img src={Lixeira} alt="Lixeira" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
