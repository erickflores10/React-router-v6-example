import React from "react";
import "../styles/Header.scss";
import { Fragment } from "react";


const Header = () => {
    /*const[menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }*/
    

    //Problema con el delay del transition en css con toggle. REPARAR.

    const activeMenu = () => {
        let btnMenu = document.querySelector(".fa-bars");
        let bgMenu = document.querySelector(".menu");
        let toggleMenu = document.querySelector(".menu-container");
    
        btnMenu.addEventListener('click', () => {
            bgMenu.classList.toggle("menu-background");
            toggleMenu.classList.toggle("menu-active");
        });
    }
    return(
        <Fragment>
            <header className="header">
                <nav className="header-left">
                    <i className="fas fa-bars" onClick={activeMenu} />
                    <h2>Website</h2>
                    <a href="/">Inicio</a>
                    <a href="/">Recientes</a>
                    <a href="/">Categorias<i className="fas fa-sort-down" /></a>
                    <a href="/">Destacados</a>
                </nav>
                <nav className="header-right">
                    <a href="/">Inicia sesion</a>
                    <a href="/">Registrar</a>
                </nav>
            </header>
            {/*{menu && <Menu />}*/}
        </Fragment>
    );
}

export default Header;