import '../EditUser/styles.css';
import { useState } from 'react';

export default function EditUser(props) {

    const [stringInput, setStringInput] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarsenha: '',
    });

    const handleChangeNome = (event) => {
        setStringInput({ ...stringInput, nome: event.target.value })
    };

    const handleChangeEmail = (event) => {
        setStringInput({ ...stringInput, email: event.target.value })
    };

    const handleChangeSenha = (event) => {
        setStringInput({ ...stringInput, senha: event.target.value })
    };

    const handleChangeConfirmarSenha = (event) => {
        setStringInput({ ...stringInput, confirmarsenha: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = {
            nome: stringInput.nome,
            email: stringInput.email,
            senha: stringInput.senha,
            confirmarsenha: stringInput.confirmarsenha,
        };
        console.log(formData);
        props.setOpenEditUser(false);
    };


    return (
        <>
            <div className='modal-add-registro'>

                <div className='container-add-registro'>

                    <div className='titulo-btn-fechar'>
                        <h3>Editar Perfil</h3>
                        <button onClick={() => {
                            props.setOpenEditUser(false);
                        }}>X</button>
                    </div>

                    <form className='form-add-registro' onSubmit={handleSubmit}>

                        <div className='container-itens-registro'>
                            <label htmlFor='editar-nome'>Nome</label><br />
                            <input onChange={handleChangeNome} type='text' id='editar-nome' /><br />
                        </div>

                        <div className='container-itens-registro'>
                            <label htmlFor='editar-email'>E-mail</label><br />
                            <input onChange={handleChangeEmail} type='text' id='editar-email' /><br />
                        </div>

                        <div className='container-itens-registro'>
                            <label htmlFor='editar-senha'>Senha</label><br />
                            <input onChange={handleChangeSenha} type='text' id='editar-senha' /><br />
                        </div>

                        <div className='container-itens-registro'>
                            <label htmlFor='editar-confirmar-senha'>Confirmar Senha</label><br />
                            <input onChange={handleChangeConfirmarSenha} type='text' id='editar-confirmar-senha' /><br />
                        </div>

                        <div className='btn-enviar-add-registro'>
                            <button type='submit'>Confirmar</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}




