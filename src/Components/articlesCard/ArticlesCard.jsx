import React from "react";
import cl from "./ArticlesCard.module.css";

export default function ArticlesCard({title, description, fileURL}){
    
    function onDownloadHandler(){
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    return(
        <div className={cl.card}>
            <div className  ={cl.text}>
                <h2>«{title}»</h2>
                <p>{description}</p>
            </div>
            <div className={cl.button}>
                <button onClick={onDownloadHandler}>Скачать</button>
            </div>
        </div>
    );
}