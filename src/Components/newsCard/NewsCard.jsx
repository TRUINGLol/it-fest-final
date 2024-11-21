import React from "react";
import cl from "../newsCard/NewsCard.module.css";
import { useNavigate } from "react-router-dom";

export default function NewsCard({title, description,id}){
    
    const nav = useNavigate();

    function onNewsRedirect(){
        nav(`/Новость/${id}/${title}`)
    }
    
    return(
        <div className={cl.card}>
            <div className={cl.main}>
                <h3>«{title}»</h3>
                <p>{description}...</p>
            </div>
            <div className={cl.but}>
                <button onClick={onNewsRedirect}>Читать</button>
            </div>
        </div>
    );
}