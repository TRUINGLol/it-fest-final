import React from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from "./style/Articles.module.css";
import ArticlesCard from "../Components/articlesCard/ArticlesCard";

export default function Articles(){
    
    const files = [
        {title:"Глобализация и экология",description:"Характерным и во многом определяющим развитие современной цивилизации процессом является глобализация, под которой, как правило, понимают...",filePath:"../Articles/Глобализация_И_Экология.pdf"},
        {title:"Компонентный cостав ресурсных видов", description:"Изучен компонентный состав летучих соединений в листьях и цветках...", filePath:"../Articles/Компонентный_Состав_Ресурсных_Видов.pdf"},
        {title:"Национальный проект 'ЭКОЛОГИЯ'", description:"Проанализированы данные по национальному проекту «Экология», финансирование в первый год выполнения...", filePath:"../Articles/НАЦИОНАЛЬНЫЙ_ПРОЕКТ_«ЭКОЛОГИЯ».pdf"},
        {title:"Развитие арбускулярной микоризы", description:"Исследовано развитие структур Glomus fasciculatum в корнях сорго с целью получения инокулюма...", filePath:"../Articles/РАЗВИТИЕ_АРБУСКУЛЯРНОЙ_МИКОРИЗЫ.pdf"},
        {title:"Распространения и экология кузнечика", description:"На основании многолетних исследований прямокрылых (Insecta, Orthoptera),проведенных в Тамбовской, Пензенской и Курскойобластях...", filePath:"../Articles/РАСПЕРОСТРАНЕНИЯ_И_ЭКОЛОГИЯ_КУЗНЕЧИКА.pdf"},
        {title:"Экология", description:"Thladiantha dubia Bunge – восточноазиатский вид, многолетняя травянистая лазящая лиана, которая в естественных условиях произрастает...", filePath:"../Articles/РАСПРОСТРАНЕНИЕ_ЭКОЛОГИЯ_БИОХИМИЧЕСКИЕ_ОСОБЕННОСТИ.pdf"}
    ];
    
    return(
        <div>
            <Header/>
            <div className={cl.articles}>
                <h2>Экологические статьи</h2>
                <div className={cl.articl}>
                    {
                        files.map((f)=>
                            <ArticlesCard title={f.title} description={f.description} fileURL={f.filePath}/>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
}