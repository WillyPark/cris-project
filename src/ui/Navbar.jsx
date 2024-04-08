import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__submenu contenedor">
                <li>Contact for new Clients</li>
                <li className="activo-claro">Regions</li>
                <li className="activo-claro">Languages</li>
            </ul>

            <div className="navbar__menu-fondo">
                <div className="contenedor navbar__menu-contenedor">
                    <NavLink to="/" className="navbar__logo-contenedor">
                        <img className="navbar__logo" src="./img/logo.webp" alt="Logo"></img>
                        <span className="navbar__logo-texto">CRAs back-Up</span>
                    </NavLink>

                    <ul className="navbar__menu">
                        <li>
                            <NavLink
                                to="monitoring-model"
                                className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                            >
                                Monitoring Model
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="services"
                                className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                            >
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="profesionals"
                                className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                            >
                                Profesionals
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                            >
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
