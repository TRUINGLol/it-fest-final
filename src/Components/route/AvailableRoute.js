import AdminPanel from "../../Pages/AdminPanel"
import Articles from "../../Pages/Articles"
import Main from "../../Pages/Main"
import News from "../../Pages/News"
import NotFound from "../../Pages/NotFound"
import OurPrj from "../../Pages/OurPrj"
import Login from "../../Pages/Login"
import Member from "../../Pages/Member"

//Обьект отвечающий за хранение всех маршрутов сайта

//Публичные маршруты по которым может проходить каждый пользователь
export const PublicRoutes = [
    {path:'/Главная', element:<Main/>},
    {path:'/404', element:<NotFound/>},
    {path:'/Новости', element:<News/>},
    {path:'/Проекты', element:<OurPrj/>},
    {path:'/Статьи', element:<Articles/>},
    {path:'/Участие', element:<Member/>}
]

//Частные маршруты по которым могут проходить ограниченный круг пользователей (админы, зарегестрированные пользователи)
export const PrivateRoutes = [
    {path:'/admin', element:<AdminPanel/>}
]