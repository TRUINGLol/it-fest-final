import React from "react";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({element,isAuth}){
    if(!isAuth){
        return <Navigate to="/Логин" replace/>;
    }
    return element;
}