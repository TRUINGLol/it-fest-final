import axios from "axios";
import React, {useContext,createContext,useState, useEffect} from "react";

//Контекст для управления авторизацией

const AuthContext = createContext();

export function AuthProvider({children}){
    
    const [isAuth, setIsAuth] = useState(()=>{
        return localStorage.getItem('isAuth') === 'true';
    });

    //Логика авторизации
    const login = async (username,password) => {
        try{
            const responce = await axios.post(`${process.env.REACT_APP_SERVER_BASE_ADRESS}/it-fest/login`, {
                username,
                password
            });
            if(responce.status==200){
                setIsAuth(true);
                localStorage.setItem('isAuth','true');
            }
        }
        catch(error){
            return error;
        }
    };

    //Логика выхода
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('isAuth');
    }

    //Проверка статуса при запуске сайта
    useEffect(()=>{
        const checkAuth = ()=>{
            const authStatus = localStorage.getItem('isAuth');
            setIsAuth(authStatus==='true');
        }
        checkAuth();
    },[]);
    
    
    return (
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

//Хук для использования этого контекста
export function useAuth(){
    return useContext(AuthContext);
}