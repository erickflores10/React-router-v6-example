import React from "react";
import "../styles/Login.scss";


const Login = () => {
    return(
        <div className="form">
            <form className="form-container">
                <div className="form-title">
                    <h1>Login</h1>
                </div>
                <div className="form-text">
                    <span>Bienvenido de nuevo! Accede a tu cuenta</span>
                </div>
                <label className="form-label">Usuario
                    <input type="text" name="username" />
                </label>
                <label className="form-label">Contraseña
                    <input type="password" name="password" placeholder="**********************" />
                </label>
                <div className="form-button">
                    <input type="submit" defaultValue="Login" />
                </div>
                <div className="form-aditional">
                    <span>¿No tienes una cuenta? <a href="../components/signup.html">Registrate</a></span>
                </div>
            </form>
        </div>
    )
}

export default Login;