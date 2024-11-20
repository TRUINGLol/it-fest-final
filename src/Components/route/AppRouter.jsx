import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./AvailableRoute";
import Login from "../../Pages/Login";
import { useAuth } from "../context/AuthContext";
import AdminPanel from "../../Pages/AdminPanel";

//Объект отвечающий за обработку маршрутов сайта (используется react-router-dom)

/**
 * @returns {HTML} Маршруты по которым пользователь может переходить
 */
export default function AppRouter(){
    
    const {isAuth} = useAuth();

    useEffect(()=>{
        console.log(isAuth);
    },[isAuth]);
    
    return (
        <Routes>
            {
                PublicRoutes.map((route)=>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            {
                PrivateRoutes.map((route)=>
                    <Route key={route.path}
                    path={route.path}
                    element={isAuth?route.element:null}/>)
            }
            {
                isAuth ? <Route key={"route-admin"} path="/admin" element={<AdminPanel/>}/> : null 
            }
            <Route key={"route-login"} path="/Логин" element={<Login/>} />
            <Route key={"route-main"} path="/" element={<Navigate to={'/Главная'}/>}/>
            <Route key={"route-notFound"} path="/*" element={<Navigate to={'/404'}/>}/>
        </Routes>
    );
}