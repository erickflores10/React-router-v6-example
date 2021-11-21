import React from "react";
import "../styles/Menu.scss";

const toggleDrop = () => {
  
  let btnDrop = document.querySelector(".drop-action");
  let actionDrop = document.querySelector(".link-dropdown-item");

  btnDrop.addEventListener("click", () => {
    actionDrop.classList.toggle("active-drop");
  });
}


const Menu = () => {

    return(
    <div className="menu">
      <div className="menu-container">
        <div className="menu-container-link">
          <a href>Inicio</a>
          <a href>Recientes</a>
          <div className="link-dropdown" >
            <a onClick={toggleDrop} className="drop-action" href>Categorias <i className="fas fa-sort-down" /></a>
            <div className="link-dropdown-item">
              <a href>Ciencia</a>
              <a href>Arte</a>
              <a href>Tecnologia</a>
              <a href>Economia</a>
              <a href>eSports</a>
            </div>
          </div>
          <a href>Destacados</a>
        </div>
        <div className="menu-container-account">
          <a href>Cerrar sesion</a>
        </div>
      </div>
    </div>
  );
  
}

export default Menu;