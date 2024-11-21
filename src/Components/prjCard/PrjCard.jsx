import React from "react";
import cl from "./PrjCard.module.css";
import { useNavigate } from "react-router-dom";

export default function PrjCard({button=true, id=0, title, content}){
    
    const nav = useNavigate();

    function onProjectRedirect(){
        nav(`/Проект/${id}/${title}`);
    }
    
    return(
        <div className={cl.card}>
            <div className={cl.cardData}>
                <h2>«{title}»</h2>
                <p>{content}</p>
            </div>
            {
                button ? <div className={cl.buttonDiv}><button onClick={onProjectRedirect} className={cl.button}>Подробнее</button></div> : null 
            }
        </div>
    );
}