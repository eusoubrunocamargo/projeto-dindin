import { useState } from 'react';
import './styles.css';

function Main() {

  const [myLogin, setMyLogin] = useState({
    email: '',
    pass: '',
  })

  const handleLogin = (event) => {
    event.preventDefault();
    const loginEmailPass = {
      email: myLogin.email,
      pass: myLogin.pass
    };
    console.log(loginEmailPass);
  };

  const handleLoginEmail = (event) => {
    const myemail = event.target.value;
    setMyLogin({ ...myLogin, email: myemail });
  };

  const handleLoginPass = (event) => {
    const mypass = event.target.value;
    setMyLogin({ ...myLogin, pass: mypass });
  };

  return (
    <div className='container-geral'>
      <div className='container-main'>
        <div className='left-side'>
          <h1>Controle suas finanças, sem planilha chata.</h1>
          <span>Organizar suas finanças nunca foi tão fácil com o DINDIN.
            Você tem tudo num único lugar e em um clique de distância.
          </span>
          <button className='btn-sign-up'>Cadastre-se</button>
        </div>
        <div className='right-side'>
          <form onSubmit={handleLogin} className='container-form'>
            <h1>Login</h1>
            <input onChange={handleLoginEmail} type='text' placeholder='E-mail'></input>
            <input onChange={handleLoginPass} type='text' placeholder='Password'></input>
            <button >Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
