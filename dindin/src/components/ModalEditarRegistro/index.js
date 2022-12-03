import { useState } from 'react';
import '../ModalEditarRegistro/styles.css';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import CurrencyInput from "react-currency-input-field";

export default function ModalEditarRegistro(props) {

    registerLocale("pt-BR", ptBR);

    const [startDate, setStartDate] = useState(new Date());

    const { data, dia, descricao, categoria, valor } = props.item[0];

    const [editarDados, setEditarDados] = useState({
        newdate: data,
        newdia: dia,
        newdescricao: descricao,
        newcategoria: categoria,
        newvalor: valor
    });

    function handleEditarDescricao(event) {
        const newdescricao = event.target.value;
        setEditarDados({ ...editarDados, newdescricao });
        console.log(editarDados);
    };

    function handleEditarData(date) {
        const dia = date.getDay();
        console.log(dia);
        setStartDate(date);
        setEditarDados({ ...editarDados, newdate: date.toISOString() })
    };

    const handleChangeValor = (event) => {
        let valorBruto = event.target.value;
        const somenteNumeros = Number(valorBruto.replace(/\D/g, ""));
        setEditarDados({ ...editarDados, newvalor: somenteNumeros });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(editarDados);
    }

    return (
        <>

            <div className='container-editar-registro'>

                <div className='container-editar-item-registro'>

                    <form onSubmit={handleSubmit} className='container-form-editar-registro'>
                        <ul>
                            <li><DatePicker
                                id="data"
                                selected={startDate}
                                // onChange={(date) => setStartDate(date)}
                                onChange={handleEditarData}
                                locale={ptBR}
                                withPortal
                                dateFormat="P"
                            /></li>
                            <li>{dia}</li>
                            <li><input type='text' defaultValue={editarDados.newdescricao} onChange={handleEditarDescricao} /></li>
                            <li>{categoria}</li>
                            <li><CurrencyInput
                                defaultValue={(valor.replace(/\D/g, "") / 100).toFixed(2)}
                                onChange={handleChangeValor}
                                id="valor"
                                prefix="R$"
                                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                            /></li>
                            <li>
                                <button className='btn-cancelar-editar-registo'
                                    onClick={() => {
                                        props.setEditItem([])
                                    }}>Cancelar</button>
                                <button type='submit' className='btn-confirmar-editar-registro'>Confirmar</button>
                            </li>
                        </ul>
                    </form>

                </div>

            </div>

        </>
    )
}