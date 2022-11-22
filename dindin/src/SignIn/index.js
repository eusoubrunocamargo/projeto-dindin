import './styles.css';

function SignIn() {

  return (
    <div className='container-geral'>
      <form className='container-form'>
        <h1>Cadastre-se</h1>
        <input type='text' placeholder='Nome'></input>
        <input type='text' placeholder='E-mail'></input>
        <input type='text' placeholder='Senha'></input>
        <input type='text' placeholder='Confirme sua senha'></input>
        <button>Cadastrar</button>
        <span>Já tem cadastro? Faça login!</span>
      </form>
    </div >
  );
}

export default SignIn;
