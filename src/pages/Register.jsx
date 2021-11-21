import React from "react";
import "../styles/Register.scss";


const Register = () => {
    return(
        <div className="register">
            <form className="register-container">
                <div className="register-title">
                    <h1>Sign Up</h1>
                </div>
                <div className="register-text">
                    <span>Crea una cuenta y accede al contenido de noticias</span>
                </div>
                <label className="register-label">Nombre
                    <input type="text" />
                </label>
                <label className="register-label">Apellido
                    <input type="text" />
                </label>
                <label className="register-label">Correo electronico
                    <input type="email" />
                </label>
                <label className="register-label">Contraseña
                    <input type="password" />
                </label>
                <div className="register-button">
                    <input type="submit" defaultValue="Sign up" />
                </div>
                <div className="register-aditional">
                    <span>¿Ya tienes una cuenta? <a href="../components/login.html">Inicia sesion</a></span>
                </div>
            </form>
        </div>

    );
}


export default Register;