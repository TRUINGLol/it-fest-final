import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./AvailableRoute";

//Объект отвечающий за обработку маршрутов сайта (используется react-router-dom)

/**
 * @returns {HTML} Маршруты по которым пользователь может переходить
 */
export default function AppRouter(){
    return (
        <Routes>
            {
                PublicRoutes.map((route)=>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            {
                PrivateRoutes.map((route)=>
                    <Route key={route.path} path={route.path} element={route.element}/>)
            }
            <Route key={"route-main"} path="/" element={<Navigate to={'/Главная'}/>}/>
            <Route key={"route-notFound"} path="/*" element={<Navigate to={'/404'}/>}/>
        </Routes>
    );
}