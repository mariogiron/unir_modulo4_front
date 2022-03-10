import { NavLink } from "react-router-dom";

const Menu = () => {
    return <nav className="menu">
        <ul>
            <NavLink to={'/'}>
                <li>Lista de Posts</li>
            </NavLink>
            <NavLink to={'/new'}>
                <li>Nuevo Post</li>
            </NavLink>
        </ul>
    </nav>
}

export default Menu;