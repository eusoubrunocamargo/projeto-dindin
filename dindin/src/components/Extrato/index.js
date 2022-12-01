import './styles.css'
import Lapis from '../../assets/lapis.svg';
import Lixeira from '../../assets/lixeira.svg';
import { useEffect, useState } from 'react';
import ModalDelete from '../ModalDeleteRegistro';

export default function Extrato() {

    const registros = [
        {
            id: 1,
            data: "11/07/1988",
            dia: "Segunda",
            descricao: "Barzinho",
            categoria: "Lazer",
            valor: "R$100,00",
        },
        {
            id: 2,
            data: "11/07/1988",
            dia: "Quarta",
            descricao: "Barzinho",
            categoria: "Lazer",
            valor: "R$100,00",
        },
    ];

    // const [index] = useState();
    const [deleteItem, setDeleteItem] = useState([]);

    // useEffect(() => {

    //     if (!index) {
    //         return;
    //     }
    //     console.log(index);
    //     setDeleteItem([...deleteItem, index]);
    //     console.log(deleteItem);

    // }, [index]);

    // useEffect(() => {



    // }, [deleteItem]);



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
                        <li></li>
                    </ul>
                </div>

                {registros.map((item) => {
                    return (
                        <div key={item.id} className='container-item' id='container-item'>
                            <div key={item.id} className='container-itens-extrato'>
                                <ul>
                                    <li>{item.data}</li>
                                    <li>{item.dia}</li>
                                    <li>{item.descricao}</li>
                                    <li>{item.categoria}</li>
                                    <li>{item.valor}</li>
                                    <li>
                                        <div className='container-editar-item'>
                                            {deleteItem.includes(item.id) ? <ModalDelete /> : null}
                                            <button><img src={Lapis} alt='Lapis' /></button>
                                            <button onClick={() => {
                                                if (deleteItem.includes(item.id)) {
                                                    const arr = deleteItem.splice(deleteItem.indexOf(item.id), 1);
                                                    setDeleteItem([...deleteItem, arr]);
                                                    return;
                                                }
                                                setDeleteItem([...deleteItem, item.id]);

                                            }}><img src={Lixeira} alt='Lixeira' /></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}



