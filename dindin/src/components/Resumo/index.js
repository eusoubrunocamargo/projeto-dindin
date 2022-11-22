import '../Resumo/styles.css';

export default function Resumo(props) {

    return (

        <>
            <div className='container-resumo'>
                <h3>Resumo</h3>

                <div className='resumo-entradas'>
                    <span>Entradas</span>
                    <span>R$200,00</span>
                </div>

                <div className='resumo-entradas'>
                    <span>Saídas</span>
                    <span>R$150,00</span>
                </div>

                <div className='resumo-entradas'>
                    <span>Saldo</span>
                    <span>R$50,00</span>
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



