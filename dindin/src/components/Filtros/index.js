import { useState } from 'react';
import '../Filtros/styles.css';

export default function Filtros() {

    const [filtros, setFiltros] = useState([
        {
            filtro: 'Alimentação',
            id: 1,
            status: false
        },
        {
            filtro: 'Assinaturas e serviços',
            id: 2,
            status: false
        },
        {
            filtro: 'Casa',
            id: 3,
            status: false
        },
        {
            filtro: 'Mercado',
            id: 4,
            status: false
        },
        {
            filtro: 'Cuidados pessoais',
            id: 5,
            status: false
        },
        {
            filtro: 'Educação',
            id: 6,
            status: false
        },
        {
            filtro: 'Família',
            id: 7,
            status: false
        },
        {
            filtro: 'Lazer',
            id: 8,
            status: false
        },
        {
            filtro: 'Pets',
            id: 9,
            status: false
        },
        {
            filtro: 'Presentes',
            id: 10,
            status: false
        },
        {
            filtro: 'Roupas',
            id: 11,
            status: false
        },
        {
            filtro: 'Saúde',
            id: 12,
            status: false
        },
        {
            filtro: 'Transporte',
            id: 13,
            status: false
        },
        {
            filtro: 'Salários',
            id: 14,
            status: false
        },
        {
            filtro: 'Vendas',
            id: 15,
            status: false
        },
        {
            filtro: 'Outras receitas',
            id: 16,
            status: false
        },
        {
            filtro: 'Outras despesas',
            id: 17,
            status: false
        },
    ]);


    const handleActive = (e) => {

        const tempFiltros = [...filtros];
        const indexFiltro = filtros.findIndex((item) => {
            return item.id == e.target.id;
        })
        tempFiltros[indexFiltro].status = !tempFiltros[indexFiltro].status;
        setFiltros(tempFiltros);

    };

    const handleActiveFilters = () => {

        const arr = filtros.filter(item => (item.status));
        const parametrosFiltro = arr.map((item) => item.id);
        console.log(parametrosFiltro);
    };

    const handleCleanFilters = () => {

        const tempFiltros = [...filtros];
        tempFiltros.map((item) => {
            if (item.status) {
                item.status = false;
            }
        });
        setFiltros(tempFiltros);
    };


    return (
        <>
            <div className='container-filtros'>
                <button className='cada-filtro btn-filtros' onClick={handleActiveFilters}>Aplicar filtros</button>
                <button className='cada-filtro btn-filtros' onClick={handleCleanFilters}>Limpar filtros</button>
                {filtros.map((item) => {
                    return <button id={item.id}
                        key={item.id}
                        className={item.status ? 'cada-filtro btn-cada-filtro active' : 'cada-filtro btn-cada-filtro'}
                        onClick={handleActive}
                    // {...listaFiltros}
                    >{item.filtro}</button>
                })}
            </div>
        </>
    )
}
