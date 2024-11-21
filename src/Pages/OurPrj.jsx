import React, { useEffect, useState } from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import PrjCard from "../Components/prjCard/PrjCard";
import axios from "axios";
import cl from "./style/OurPrj.module.css";

export default function OurPrj(){
    
    const [projects,setProjects] = useState([{}]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/prjs`).then((res)=>{
            setProjects(res.data);
            console.log(res.data);
        });
    },[]);

    console.log(projects[0].title);
    
    return(
        <div>
            <Header/>
                <div className={cl.our}>
                    <div className={cl.bg}>
                        <h2>Наши проекты</h2>
                    </div>
                    <div className={cl.main}>
                        {
                            projects.map((prj)=>
                                <PrjCard id={prj.id} title={prj.title} content={prj.short_description}/>
                            )
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}