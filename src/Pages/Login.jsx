import React, { useEffect,useState } from "react";
import { useAuth } from "../Components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from './style/Login.module.css';

export default function Login(){
    
    const {login} = useAuth();
    const {isAuth} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorText,setErrorText] = useState('');

    const nav = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const res = await login({username, password});
        if(res){
            setErrorText(res.response.data.message);
            console.log(res.response.data.message);
        }
        setUsername('');
        setPassword('');
    }

    useEffect(()=>{
        if(isAuth){
            nav('/admin');
        }
    },[isAuth,nav]);

    return(
        <div>
            <Header/>
            <div className={cl.login}>
                <div>
                    <form className={cl.formT} onSubmit={handleSubmit}>
                        <h2>Добро пожаловать!</h2>
                        <div className={cl.inputs}>
                            <input className={cl.inputL}  type="text"
                                placeholder="Логин"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                required/>

                            <input className={cl.inputL} type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required/>
                        </div>
                        <button className={cl.buttonI} type="submit">Войти</button>
                        {
                            errorText ? <p>{errorText}</p> : <p></p>
                        }
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}