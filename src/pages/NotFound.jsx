import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
    return(
        <div className="error-page">
            <div className="error-page-container">
                <div className="error-page-image"></div>
                <div className="error-page-text">
                    <h1>404</h1>
                    <h2>page not found</h2>
                    <p>Oops! No encontramos la pagina que estas buscando, el enlace pobablemente este roto o ha sido removida</p>
                </div>
                <div className="error-page-button">
                    <a href="/">Volver al inicio</a>
                    <a href="/"><i className="fas fa-arrow-left"></i> Regresar</a>
                </div>
            </div>
        </div>
    );
}

export default NotFound;