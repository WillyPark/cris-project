import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {
    const { setLang, language } = useContext(LanguageContext);
    const [mostrar, setMostrar] = useState(false)
    const [desaparecer, setDesaparecer] = useState(true)

    const onChangeLanguage = (e) => {
        const value = e.target.value;

        if (value == "eng" || value == "esp") {
            setLang(value);
        }

        e.target.value = "language";
    }

    const menuResponsive = () => {
        setMostrar(!mostrar);
        setDesaparecer(!desaparecer);
    }

    const quitarMenu = () => {
        setMostrar(false);
        setDesaparecer(true);
    }

    return (
        <nav className="navbar">
            <ul className="navbar__submenu contenedor">
                <NavLink
                    to="/contact"
                    className="navbar__submenu-item navbar__submenu-item--blanco"
                >
                    {language.navBar.subMenu[0]}
                </NavLink>

                <NavLink
                    to="/regions"
                    className={({ isActive }) => `navbar__submenu-item activo-claro ${isActive ? "activo-oscuro" : ""}`}
                    onClick={quitarMenu}
                >
                    {language.navBar.subMenu[1]}
                </NavLink>

                <li className="activo-claro">
                    <select className="navbar__submenu-language" onChange={onChangeLanguage} name="language" id="language" defaultValue="language">
                        <option style={{ display: "none" }} disabled value="language">{language.navBar.language}</option>
                        <option value="eng">English</option>
                        <option value="esp">Español</option>
                    </select>
                </li>
            </ul>

            <div className="navbar__menu-fondo">
                <div className="contenedor navbar__menu-contenedor">
                    <NavLink to="/" className="navbar__logo-contenedor" onClick={quitarMenu}>
                        <img className="navbar__logo" src="./img/logo.webp" alt="Logo"></img>
                        <span className="navbar__logo-texto">Senior CRA</span>
                    </NavLink>

                    <div className="navbar__menu-responsive" onClick={menuResponsive}>
                        <img src="./icons/barras.svg" alt="Menu Responsive" />
                    </div>

                    <ul className={`navbar__menu ${mostrar ? "mostrar" : ""} ${desaparecer ? "desaparecer" : ""}`}>
                        {
                            language.navBar.menu.map((element, i) => {
                                return <li key={i} onClick={quitarMenu}>
                                    <NavLink
                                        to={element[0]}
                                        className={({ isActive }) => `navbar__menu-item ${isActive ? "activo" : ""}`}
                                    >
                                        {element[1]}
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
