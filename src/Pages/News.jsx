import React, { useEffect, useState } from "react";
import cl from "./style/News.module.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import NewsCard from "../Components/newsCard/NewsCard";
import axios from "axios";

export default function News(){
    
    const [news,setNews] = useState([{}]);

    useEffect(()=>{
        try{
            axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/news`).then((res)=>{
                setNews(res.data);
            });
        }
        catch(err){
            console.error(err);
        }
    },[])
    
    return(
        <div>
            <Header/>
                <div className={cl.news}>
                    <div className={cl.bgImg}>
                        <h2>Наши новости</h2>
                    </div>
                    <div className={cl.main}>
                        {
                            news.map((n)=>
                                <NewsCard id={n.id} title={n.title} description={n.short_description}/>
                            )
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}