import React from "react";
import cl from "./Header.module.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom"; 

export default function Header(){
    return (
        <div className={cl.header}>
            <div className={cl.logo}>
                <Link to={"/Главная"}><img src={logo} alt="logo" /></Link>
            </div>
            <div className={cl.navD}>
                <ul className={cl.nav}>
                    <li className={cl.mLink}><Link to={"/Главная"}>Главная</Link></li>
                    <li className={cl.nLink}><Link to={"/Новости"}>Новости</Link></li>  
                    <li className={cl.pLink}><Link to={"/Проекты"}>Наши проекты</Link></li>
                    <li className={cl.sLink}><Link to={"/Статьи"}>Экологические статьи</Link></li>
                    <li className={[cl.sLink,cl.lLink].join(' ')}><Link to={"/Логин"}>Войти</Link></li>
                </ul>
            </div>
        </div>
    );
}