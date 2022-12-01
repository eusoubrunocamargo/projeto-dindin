// import '../ModalDeleteRegistro/styles.css'

// export default function ModalDelete() {



//     return (
//         <>
//             <div>Teste...</div>

//         </>
//     )
// }

import '../ModalDeleteRegistro/styles.css'

export default function ModalDelete() {



    return (
        <>
            <div className='container-modal-deletar'>

                <div className='txt-modal'>
                    <h4>Apagar?</h4>
                </div>

                <div className='container-btn-sim-nao'>
                    <button className='btn-deletar-sim'>Sim</button>
                    <button className='btn-deletar-nao'>Não</button>
                </div>

            </div>

        </>
    )
}