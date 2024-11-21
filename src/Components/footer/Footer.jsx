import React, { useState } from "react";
import cl from "./Footer.module.css";
import { Link } from "react-router-dom";
import phonePath from '../../Images/phone.png';
import emailPath from '../../Images/mail.png';
import pointPath from '../../Images/point.png';
import axios from "axios";

export default function Footer(){
    
    const [email,setEmail] = useState("");

    const [textResponce,setTextResponce] = useState();

    async function submitHandler(e){
        e.preventDefault(); 

        try{
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/addFeedback`,{email});
            if(res){
                setTextResponce(res.data.message);
                console.log(res.data.message);
            }
        }
        catch(err){
            setTextResponce(err.responce.data.message);
        }
    }
    
    return(
        <div className={cl.footer}>
            <div className={cl.main}>
                <div className={cl.card1}>
                    <h2>ЭкоБудующее</h2>
                    <p>Мы убеждены, что каждый из нас может стать частью решения. Присоединяйтесь к "ЭкоБудущему",
                         чтобы вместе создавать мир, в котором чистота и гармония с природой становятся обычным делом!</p>
                </div>
                <div className={cl.card2}>
                    <h2>Наши страницы</h2>
                    <ul>
                        <li><Link to={"/Главная"}>Главная</Link></li>
                        <li><Link to={"/Статьи"}>Экологические статьи</Link></li>
                        <li><Link to={"/Проекты"}>Наши проекты</Link></li>
                        <li><Link to={"/Новости"}>Новости</Link></li>
                        <li><a href="https://rosuchebnik.ru/metodicheskaja-pomosch/materialy/predmet-ekologiya_type-stati/">Дополнительные материалы</a></li>
                    </ul>
                </div>
                <div className={cl.card3}>
                    <h2>Обратная связь</h2>
                    <form className={cl.formF} onSubmit={submitHandler}>
                        <input type="email"
                         placeholder="Email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>

                         <button type="submit" className={cl.button}>Оставить заявку</button>
                         {
                            textResponce ? <p>{textResponce}</p> : <p></p>
                         }
                    </form>
                </div>
            </div>
            <div className={cl.contact}>
                <div>
                    <img src={phonePath} alt="phone"/>
                    <p>+7-(111)-111-11-11</p>
                </div>
                <div>
                    <img src={emailPath} alt="email"/>
                    <p>eckoFuture@index.com</p>
                </div>
                <div>
                    <img src={pointPath} alt="pointAdress"/>
                    <p>1097 Pearl Street</p>
                </div>
            </div>
        </div>
    );
}