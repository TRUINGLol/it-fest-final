import AdminPanel from "../../Pages/AdminPanel"
import Articles from "../../Pages/Articles"
import Main from "../../Pages/Main"
import News from "../../Pages/News"
import NotFound from "../../Pages/NotFound"
import OurPrj from "../../Pages/OurPrj"
import Login from "../../Pages/Login"
import Member from "../../Pages/Member"
import NewsContent from "../../Pages/NewsContent"
import OurPrjContent from "../../Pages/OurPrjContent"

//Обьект отвечающий за хранение всех маршрутов сайта

//Публичные маршруты по которым может проходить каждый пользователь
export const PublicRoutes = [
    {path:'/Главная', element:<Main/>},
    {path:'/404', element:<NotFound/>},
    {path:'/Новости', element:<News/>},
    {path:'/Проекты', element:<OurPrj/>},
    {path:'/Статьи', element:<Articles/>},
    {path:'/Участие', element:<Member/>},
    {path:'/Новость/:id/:title', element:<NewsContent/>},
    {path:'/Проект/:id/:title', element:<OurPrjContent/>}
]

//Частные маршруты по которым могут проходить ограниченный круг пользователей (админы, зарегестрированные пользователи)
export const PrivateRoutes = [
    {path:'/admin', element:<AdminPanel/>}
]