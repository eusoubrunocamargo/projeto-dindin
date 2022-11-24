import { useState } from 'react';
import './styles.css';

function SignIn() {

  const [signUp, setSignUp] = useState({
    nome: '',
    email: '',
    senha: '',
    checksenha: ''
  });

  const handleNome = (event) => {
    const nome = event.target.value;
    setSignUp({ ...signUp, nome });
  };

  const handleEmail = (event) => {
    const email = event.target.value;
    setSignUp({ ...signUp, email });
  };

  const handleSenha = (event) => {
    const senha = event.target.value;
    setSignUp({ ...signUp, senha });
  };

  const handleCheckSenha = (event) => {
    const checksenha = event.target.value;
    setSignUp({ ...signUp, checksenha });
  };

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    const mydata = {
      nome: signUp.nome,
      email: signUp.email,
      senha: signUp.senha,
      checksenha: signUp.checksenha
    };
    console.log(mydata);
  };

  return (
    <div className='container-geral'>
      <form onSubmit={handleSubmitSignUp} className='container-form'>
        <h1>Cadastre-se</h1>
        <input onChange={handleNome} type='text' placeholder='Nome'></input>
        <input onChange={handleEmail} type='text' placeholder='E-mail'></input>
        <input onChange={handleSenha} type='text' placeholder='Senha'></input>
        <input onChange={handleCheckSenha} type='text' placeholder='Confirme sua senha'></input>
        <button>Cadastrar</button>
        <span>Já tem cadastro? Faça login!</span>
      </form>
    </div >
  );
}

export default SignIn;
