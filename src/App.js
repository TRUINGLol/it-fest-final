import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./Components/route/AppRouter";
import './Pages/style/Style.css';
import { AuthProvider } from "./Components/context/AuthContext";

export default function App(){
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </BrowserRouter>
  );
}