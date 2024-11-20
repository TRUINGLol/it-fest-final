import React from "react";
import cl from "./PrjCard.module.css";

export default function PrjCard({button=true, title, content}){
    return(
        <div className={cl.card}>
            <h2>«{title}»</h2>
            <p>{content}</p>
            {
                button ? <div className={cl.buttonDiv}><button className={cl.button}>Подробнее</button></div> : null
            }
        </div>
    );
}