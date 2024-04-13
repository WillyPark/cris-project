import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {
    const { setLang, language } = useContext(LanguageContext);

    const onChangeLanguage = (e) => {
        const value = e.target.value;

        if (value == "eng" || value == "esp") {
            setLang(value);
        }
    }

    return (
        <nav className="navbar">
            <ul className="navbar__submenu contenedor">
                {
                    <li>{language.navBar.subMenu[0]}</li>
                }
                {
                    <li className="activo-claro">{language.navBar.subMenu[1]}</li>
                }
                <li className="activo-claro">
                    <select onChange={onChangeLanguage} name="language" id="language">
                        <option value="eng">English</option>
                        <option value="esp">Español</option>
                    </select>
                </li>
            </ul>

            <div className="navbar__menu-fondo">
                <div className="contenedor navbar__menu-contenedor">
                    <NavLink to="/" className="navbar__logo-contenedor">
                        <img className="navbar__logo" src="./img/logo.webp" alt="Logo"></img>
                        <span className="navbar__logo-texto">CRAs back-Up</span>
                    </NavLink>
                    <ul className="navbar__menu">
                        {
                            language.navBar.menu.map((element, i) => {
                                return <li key={i}>
                                    <NavLink
                                        to={element[0]}
                                        className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                                    >
                                        {element[1]}
                                    </NavLink>
                                </li>
                            })
                        }
                        {/* 
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
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
