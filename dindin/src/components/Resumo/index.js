import '../Resumo/styles.css';

export default function Resumo(props) {

    return (

        <>
            <div className='container-resumo'>
                <h3>Resumo</h3>

                <div className='resumo-entradas'>
                    <span>Entradas</span>
                    <span className='resumo-entradas-color'>R$200,00</span>
                </div>

                <div className='resumo-entradas'>
                    <span>Saídas</span>
                    <span className='resumo-saidas-color'>R$150,00</span>
                </div>

                <div className='resumo-entradas'>
                    <span>Saldo</span>
                    <span className='resumo-saldo-color'>R$50,00</span>
                </div>
            </div>

            <div className='container-btn-add-registro'>
                <button onClick={() => {
                    props.addRegistro ? props.setAddRegistro(false) : props.setAddRegistro(true);
                }}>Adicionar Registro</button>
            </div>

        </>
    )


};



