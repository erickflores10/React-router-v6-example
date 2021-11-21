import React from "react";
import "../styles/Card.scss";


const Card = () => {
    return(
        <div className="card">
            <img src="../images/200x125.png" />
            <div className="card-title">
                <h4><a href="">Debo tener como maximo 50 caracteres</a></h4>
            </div>
            <div className="card-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis mauris pellentesque magna sodales fringilla.</p>
            </div>
            <div className="card-socials">
                <div className="card-socials-left">
                    <i className="fas fa-thumbs-up"></i>
                    <i className="fas fa-comment-alt"></i>
                </div>
                <div className="card-socials-right">
                    <i className="far fa-eye"></i>
                </div>
            </div>
        </div>
    );
}

export default Card;