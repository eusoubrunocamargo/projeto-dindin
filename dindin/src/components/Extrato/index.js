import '../Extrato/styles.css'
import Lapis from '../../assets/lapis.svg';
import Lixeira from '../../assets/lixeira.svg';

export default function Extrato() {

    const registros = [
        {
            id: 1,
            data: "11/07/1988",
            dia: "Segunda",
            descricao: "Barzinho",
            categoria: "Lazer",
            valor: "R$100,00"
        },
        {
            id: 2,
            data: "11/07/1988",
            dia: "Quarta",
            descricao: "Barzinho",
            categoria: "Lazer",
            valor: "R$100,00"
        },
    ]

    return (

        <>
            <div className='container-extrato'>

                <div className='container-descricao-itens'>
                    <ul>
                        <li>Data</li>
                        <li>Dia da semana</li>
                        <li>Descrição</li>
                        <li>Categoria</li>
                        <li>Valor</li>
                    </ul>
                </div>


                {registros.map((item) => {
                    return (
                        <div key={item.id} className='container-item'>
                            <div key={item.id} className='container-itens-extrato'>
                                <ul>
                                    <li>{item.data}</li>
                                    <li>{item.dia}</li>
                                    <li>{item.descricao}</li>
                                    <li>{item.categoria}</li>
                                    <li>{item.valor}</li>
                                </ul>
                            </div>
                            <div className='container-editar-item'>
                                <button><img src={Lapis} alt='Lapis' /></button>
                                <button><img src={Lixeira} alt='Lixeira' /></button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}



