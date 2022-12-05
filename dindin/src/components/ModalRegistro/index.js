import "../ModalRegistro/styles.css";
import DatePicker, { registerLocale } from "react-datepicker";
import CurrencyInput from "react-currency-input-field";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { getItem } from "../../utils/storage";

export default function ModalRegistro(props) {
  const [arrayCategorias, setArrayCategorias] = useState([]);
  const { registros, setRegistros } = props;

  registerLocale("pt-BR", ptBR);

  const [startDate, setStartDate] = useState(new Date());

  const [stringInput, setStringInput] = useState({
    tipo: "",
    valor: "",
    categoria: "",
    descricao: "",
  });

  const handleChangeTipo = (event) => {
    setStringInput({ ...stringInput, tipo: event.target.value });
  };

  const handleChangeCategoria = (event) => {
    setStringInput({ ...stringInput, categoria: event.target.value });
  };

  const handleChangeDescricao = (event) => {
    setStringInput({ ...stringInput, descricao: event.target.value });
  };

  const handleChangeValor = (event) => {
    let valorBruto = event.target.value;
    const somenteNumeros = Number(valorBruto.replace(/\D/g, "")).toFixed(2).replace(".", "");
    setStringInput({ ...stringInput, valor: somenteNumeros });
  };

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


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { id } = arrayCategorias.find(
      (element) => stringInput.categoria === element.descricao
    );

    console.log(stringInput.valor);
    
    try {
      const { data } = await api.post(
        "/transacao",
        {
          tipo: stringInput.tipo === "" ? "saida" : stringInput.tipo,
          valor: stringInput.valor,
          categoria_id: id,
          descricao: stringInput.descricao,
          data: startDate.toISOString(),
        },
        {
          headers: {
            authorization: `Bearer ${getItem("token")}`,
          },
        }
      );
      setRegistros([...registros, data]);
    } catch (error) {
      alert(error.response.data.mensagem);
    }

    props.setAddRegistro(false);
  };

  useEffect(() => {
    categoriasApi();
  }, []);

  return (
    <>
      <div className="modal-add-registro">
        <div className="container-add-registro">
          <div className="titulo-btn-fechar">
            <h3>Adicionar Registro</h3>
            <button
              onClick={() => {
                props.setAddRegistro(false);
              }}
            >
              X
            </button>
          </div>

          <form className="form-add-registro" onSubmit={handleSubmit}>
            <div className="btn-entrada-saida">
              <input
                onChange={handleChangeTipo}
                type="radio"
                name="escolha-entrada-saida"
                id="tipoentrada"
                value="entrada"
              />
              <label htmlFor="tipoentrada" className="style-label-entrada">
                Entrada
              </label>

              <input
                onChange={handleChangeTipo}
                type="radio"
                name="escolha-entrada-saida"
                id="tiposaida"
                value="saida"
              />
              <label htmlFor="tiposaida" className="style-label-saida">
                Saída
              </label>
            </div>

            <div className="container-itens-registro">
              <label htmlFor="valor">Valor</label>
              <br />
              <CurrencyInput
                onChange={handleChangeValor}
                id="valor"
                prefix="R$"
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              />
            </div>

            <div className="container-itens-registro">
              <label htmlFor="categoria">Categoria</label>
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

            <div className="container-itens-registro">
              <label htmlFor="descricao">Descrição</label>
              <br />
              <input
                onChange={handleChangeDescricao}
                type="text"
                id="descricao"
              />
              <br />
            </div>

            <div>
              <label htmlFor="data">Data</label>
              <DatePicker
                id="data"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ptBR}
                withPortal
                dateFormat="P"
              />
            </div>

            <div className="btn-enviar-add-registro">
              <button className="style-btn-submit" type="submit">
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
