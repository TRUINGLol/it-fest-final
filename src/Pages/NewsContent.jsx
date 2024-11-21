import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import axios from "axios";
import cl from "./style/NewsContent.module.css";

export default function NewsContent(){

    const [newsContent,setNewsContent] = useState([{}]);
    
    const {id,title} = useParams();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/news/${id}`).then((res)=>{
            setNewsContent(res.data[0]);
            
        });
    },[]);

    const date = new Date(newsContent.publication_date);
    console.log(date);

    return(
        <div>
            <Header/>
                <div className={cl.content}>
                    <div className={cl.bg}>
                        <h3>{title}</h3>
                    </div>
                    <div className={cl.main}>
                        {
                            <p className={cl.date}>дата публикации:{`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`}</p>
                        }
                        {
                            <p>{newsContent.content}</p>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}