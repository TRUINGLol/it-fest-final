import React, {useState} from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from "./style/Member.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Member(){

    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

    const [responceText,setResponceText] = useState(); 
    
    async function onSubmitHandler(e){
        e.preventDefault();

        try{
            await axios.post(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/addMember`,{name,lastName,email}).then((res)=>{
                setResponceText(res.data.message);
            })
        }
        catch(err){
            setResponceText(err.response.data.message)
        }

        setName("");
        setLastName("");
        setEmail("");
    }
    
    return(
        <div >
            <Header/>
                <div className={cl.member}>
                    <div className={cl.text}> 
                        <h1>Регистрация волонтёра</h1>
                        <h2>Оставьте свои контакты и мы обязательном свяжемся с вами!<br/>Посмотреть ближайшие проекты можно на странице {<Link to={"/Проекты"}>"Наши проекты"</Link>}</h2>
                    </div>
                    <div className={cl.form}>
                        <form onSubmit={onSubmitHandler}>
                            <input type="text" 
                            placeholder="Имя"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required/>

                            <input type="text" 
                            placeholder="Фамилия"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            required/>

                            <input type="text" 
                            placeholder="Почта"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required/>

                            <button type="submit">Учавствовать!</button>
                        </form>
                        {
                            responceText ? <p>{responceText}</p> : <p></p>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}