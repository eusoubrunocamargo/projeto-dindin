import '../DashHeader/styles.css'

export default function DashHeader(props) {

    return (
        <>
            <header className='container-header'>
                <div className='container-logo'>
                    <h1>Logomarca</h1>
                </div>
                <div className='container-menu'>
                    <ul className='menu'>
                        <button onClick={() => { props.setOpenEditUser(true) }}>Usuário</button>
                        <li>Sair</li>
                    </ul>
                </div>
            </header>
        </>
    )
}
