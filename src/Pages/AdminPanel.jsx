import React, {useEffect, useState} from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from "./style/AdminPanel.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/context/AuthContext";

export default function AdminPanel(){
    
    const [newsTitle,setNewsTitle] = useState("");
    const [newsDescription,setNewsDescription] = useState("");
    const [newsDate,setNewsDate] = useState("");
    const [newsContent,setNewsContent] = useState("");

    const [prjTitle,setPrjTitle] = useState("");
    const [prjDescription,setPrjDescription] = useState("");
    const [prjContent,setPrjContent] = useState("");

    const [feedback,setFeedback] = useState([{}]);
    const [members,setMembers] = useState([{}]);

    const [answerTextNews,setAnswerTextNews] = useState();
    const [answerTextPrj,setTextPrj] = useState();

    const nav = useNavigate();

    const {logout} = useAuth();

    async function onNewsSubmit(e){
        e.preventDefault();

        try{
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/createNews`,{newsTitle,newsDescription,newsDate,newsContent});
            if(res){
                setAnswerTextNews(res.data.message);
                console.log(res.data.message);
            }
        }
        catch(err){
            setAnswerTextNews(err.response.data.message);
        }

        setNewsTitle("");
        setNewsDescription("");
        setNewsDate("");
        setNewsContent("");
    }

    async function onProjectSubmit(e){
        e.preventDefault(); 

        try{
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/createPrj`,{prjTitle,prjDescription,prjContent});
            if(res){
                setTextPrj(res.data.message);
                console.log(res.data.message);
            }
        }
        catch(err){
            setTextPrj(err.response.data.message);
        }

        setPrjTitle("");
        setPrjDescription("");
        setPrjContent("");
    }

    function logoutHandler(){
        nav("/Главная");
        logout();
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/feedback`).then((res)=>{
            setFeedback(res.data);
        });

        axios.get(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/members`).then((res)=>{
            setMembers(res.data);
        })
    },[]);
    
    return(
        <div>
            <Header/>
                <div className={cl.panel}>
                    <div className={cl.feedback}>
                        <h2>Обращение за обратной связью</h2>
                        {
                            feedback.map((e)=>
                                <p>{e.id}-{e.email}<br/></p>
                            )
                        }
                    </div>
                    <div className={cl.members}>
                        <h2>Заявки на волонтерство</h2>
                        {
                            members.map((v)=>
                                <p>Имя-{v.name}||Фамилия-{v.last_name}||почта-{v.email}</p>
                            )
                        }
                    </div>
                    <div className={cl.news}>
                        <h2>Добавить новость</h2>
                        <form className={cl.formN} onSubmit={onNewsSubmit}>
                            <div>
                                <input type="text" 
                                    placeholder="Название"
                                    value={newsTitle}
                                    onChange={(e)=>setNewsTitle(e.target.value)}
                                    required/>
                                
                                <input type="text"
                                    placeholder="Описание"
                                    value={newsDescription}
                                    onChange={(e)=>setNewsDescription(e.target.value)}
                                    required/>

                                <input type="text"
                                    placeholder="Дата (YYYY-MM-DD)"
                                    value={newsDate}
                                    onChange={(e)=>setNewsDate(e.target.value)}
                                    required/>

                                <input type="text"
                                    placeholder="Контент"
                                    value={newsContent}
                                    onChange={(e)=>setNewsContent(e.target.value)}
                                    required/>
                            </div>
                            <button type="submit">Создать новость</button>
                        </form>
                        {
                            answerTextNews ? <p>{answerTextNews}</p> : <p></p>
                        }
                    </div>
                    <div className={cl.prj}>
                        <h2>Добавить проект</h2>
                        <form onSubmit={onProjectSubmit}>
                            <div>
                                <input type="text"
                                    placeholder="Название"
                                    value={prjTitle}
                                    onChange={(e)=>setPrjTitle(e.target.value)}
                                    required/>
                                
                                <input type="text"
                                    placeholder="Описание"
                                    value={prjDescription}
                                    onChange={(e)=>setPrjDescription(e.target.value)}
                                    required/>
                                
                                <input type="text"
                                    placeholder="Контент"
                                    value={prjContent}
                                    onChange={(e)=>setPrjContent(e.target.value)}
                                    required/>
                            </div>
                            <button type="submit">Создать проект</button>
                        </form>
                        {
                            answerTextPrj ? <p>{answerTextPrj}</p> : <p></p>
                        }
                    </div>
                    <div className={cl.logout}>
                        <button className={cl.buttonL} onClick={logoutHandler}>Выйти</button>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}