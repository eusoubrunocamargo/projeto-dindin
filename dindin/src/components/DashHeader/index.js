import '../DashHeader/styles.css';
import Logo from '../../assets/logo.svg';
import Logout from '../../assets/logout.svg';
import User from '../../assets/user.svg';

export default function DashHeader(props) {

    return (
        <>
            <header className='container-header'>
                <div className='container-logo'>
                    <img src={Logo} alt='Logo'></img>
                    <span>DinDin</span>
                </div>
                <div className='container-menu'>
                    <ul className='menu'>
                        <button className='btn-user' onClick={() => { props.setOpenEditUser(true) }}><img src={User} alt='User' />Usuário</button>
                        <li><img src={Logout} alt='Logout'></img></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
