import { useState, useEffect } from "react";
import "../ModalEditarRegistro/styles.css";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

export default function ModalEditarRegistro(props) {
  const idRegistro = props.selectedItem[0].id;
  const [arrayCategorias, setArrayCategorias] = useState([]);
  const { registros, setRegistros } = props;
  const [editarDados, setEditarDados] = useState({
    descricao: "",
    valor: "",
    data: "",
    newdia: "",
    categoria: "",
  });

  registerLocale("pt-BR", ptBR);

  const diaDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const [startDate, setStartDate] = useState(new Date());

  function getDiaExtenso(dia) {
    setEditarDados({ ...editarDados, newdia: diaDaSemana[dia] });
    return diaDaSemana[dia];
  }

  function handleEditarDescricao(event) {
    const descricao = event.target.value;
    setEditarDados({ ...editarDados, descricao });
  }

  function handleEditarData(date) {
    setStartDate(date);
    const dia = date.getDay();
    const diaExtenso = getDiaExtenso(dia);
    setEditarDados({ ...editarDados, data: date, newdia: diaExtenso });
  }

  const handleChangeValor = (event) => {
    let valorBruto = event.target.value;
    const somenteNumeros = Number(valorBruto.replace(/\D/g, ""))
      .toFixed(2)
      .replace(".", "")
      .replace(",", "");
    setEditarDados({ ...editarDados, valor: somenteNumeros });
  };

  const handleChangeCategoria = (event) => {
    setEditarDados({ ...editarDados, categoria: event.target.value });
    console.log(editarDados.categoria);
  };

  const categoriasApi = async () => {
    try {
      const { data } = await api.get("/categoria", {
        headers: {
          authorization: `Bearer ${getItem("token")}`,
        },
      });

      setArrayCategorias([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id } = arrayCategorias.find(
      (element) => editarDados.categoria === element.descricao
    );

    try {
      const response = await api.put(
        `/transacao/${idRegistro}`,
        {
          descricao: editarDados.descricao,
          valor: editarDados.valor,
          data: editarDados.data,
          categoria_id: id,
          tipo: "saida",
        },
        {
          headers: {
            authorization: `Bearer ${getItem("token")}`,
          },
        }
      );
      const localRegistros = [...registros];
      const registroAtt = localRegistros.find(
        (registro) => registro.id === idRegistro
      );
      const { descricao, valor, data } = response.data;
      registroAtt.descricao = descricao;
      registroAtt.valor = valor;
      registroAtt.data = data;
      registroAtt.categoria_nome = editarDados.categoria;
      setRegistros(localRegistros);
      props.setEditItem([]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    categoriasApi();
  }, []);

  return (
    <>
      <div className="container-editar-registro">
        <div className="container-editar-item-registro">
          <form
            onSubmit={handleSubmit}
            className="container-form-editar-registro"
          >
            <ul>
              <li>
                <DatePicker
                  id="data"
                  selected={startDate}
                  onChange={handleEditarData}
                  locale={ptBR}
                  withPortal
                  dateFormat="P"
                />
              </li>
              <li>{editarDados.newdia}</li>
              <li>
                <input
                  type="text"
                  defaultValue={editarDados.descricao}
                  onChange={handleEditarDescricao}
                />
              </li>
              <div className="container-itens-registro">
                <label htmlFor="categoria"></label>
                <br />
                <input
                  id="categoria"
                  list="categorias"
                  onChange={handleChangeCategoria}
                />
                <datalist id="categorias">
                  <option>Selecione uma categoria:</option>
                  {arrayCategorias.map((categoria) => (
                    <option
                      key={categoria.id}
                      value={categoria.descricao}
                    ></option>
                  ))}
                </datalist>
              </div>
              <li>
                <input
                  onChange={handleChangeValor}
                  defaultValue={(
                    props.selectedItem[0].valor / 100
                  ).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                />
              </li>
              <li>
                <button
                  className="btn-cancelar-editar-registo"
                  onClick={() => {
                    props.setEditItem([]);
                    props.setSelectedItem([]);
                  }}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-confirmar-editar-registro">
                  Confirmar
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}
