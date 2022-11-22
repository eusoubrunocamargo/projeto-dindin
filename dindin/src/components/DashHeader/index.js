import '../DashHeader/styles.css'

export default function DashHeader() {

    return (
        <>
            <header className='container-header'>
                <div className='container-logo'>
                    <h1>Logomarca</h1>
                </div>
                <div className='container-menu'>
                    <ul className='menu'>
                        <li>Usuário</li>
                        <li>Sair</li>
                    </ul>
                </div>
            </header>
        </>
    )
}
