import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from "./style/OurPrjContent.module.css";

export default function OurPrjContent(){

    const [prjContent, setPrjContent] = useState([]);
    
    const {id,title} = useParams();

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/prjs/${id}`).then((res)=>{
            setPrjContent(res.data[0]);
        });
    },[]);
    
    return(
        <div>
            <Header/>
                <div className={cl.content}>
                    <div className={cl.bg}>
                        <h2>{title}</h2>
                    </div>
                    <div className={cl.main}>
                        {
                            <p>{prjContent.content}</p>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}