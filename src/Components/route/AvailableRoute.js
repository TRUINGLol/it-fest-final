import Main from "../../Pages/Main"
import NotFound from "../../Pages/NotFound"

//Обьект отвечающий за хранение всех маршрутов сайта

//Публичные маршруты по которым может проходить каждый пользователь
export const PublicRoutes = [
    {path:'/Главная', element:<Main/>},
    {path:'/404', element:<NotFound/>}
]

//Частные маршруты по которым могут проходить ограниченный круг пользователей (админы, зарегестрированные пользователи)
export const PrivateRoutes = [
    {}
]