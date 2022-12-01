import "../ModalRegistro/styles.css";
import DatePicker, { registerLocale } from "react-datepicker";
import CurrencyInput from "react-currency-input-field";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function ModalRegistro(props) {
  const arrayCategorias = props.arrayCategorias;

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
    const somenteNumeros = Number(valorBruto.replace(/\D/g, ""));
    setStringInput({ ...stringInput, valor: somenteNumeros });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      tipo: stringInput.tipo,
      valor: stringInput.valor,
      categoria: stringInput.categoria,
      descricao: stringInput.descricao,
      data: startDate.toISOString(),
    };
    console.log(formData);
    props.setAddRegistro(false);
  };

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
                checked={true}
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
                  <option key={categoria.id} value={categoria.descricao}>
                    {categoria.descricao}
                  </option>
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
