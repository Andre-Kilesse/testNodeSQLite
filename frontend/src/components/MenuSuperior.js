import { Link } from "react-router-dom"

const MenuSuperior = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <article className="container">
                <Link to='/' className="navbar-brand">Controle Pessoal de livros</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Inclusão</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/manut' className="nav-link">Manuntenção</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/resumo' className="nav-link">Controle</Link>
                    </li>
                </ul>
            </article>
        </nav>
    )
}
export default MenuSuperior