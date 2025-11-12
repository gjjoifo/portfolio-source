import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css"

function Card({imgSrc, title, description, buttonText, link}) {
    return (
    <NavLink to={link} className={styles["card-container"]}>
        <img src={process.env.PUBLIC_URL + imgSrc} alt="card image" className={styles["card-image"]}/>
        <h1 className={styles["card-title"]}>{title}</h1>
        <p className={styles["card-description"]}>{description}</p>
        
    </NavLink>)
}

export default Card;