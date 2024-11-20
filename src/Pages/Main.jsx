import React from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import cl from "./style/Main.module.css";
import leafPath from "../Images/leaf.png";
import thumbPath from "../Images/process-thumb.jpg";
import peoplePath from "../Images/people.png";
import markPath from "../Images/mark.png";
import enginePath from "../Images/engine.png";
import awardPath from "../Images/award.png";
import PrjCard from "../Components/prjCard/PrjCard";
import energyPath from "../Images/energy.png";
import renwewablePath from "../Images/renewable.png";
import treePath from "../Images/tree.png";
import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div className={cl.main}>
            <Header/>
            <div className={cl.banner1}>
                <div className={cl.banner1Div}>
                    <p className={cl.bannerTitle}>ЭкоБудущее</p>
                    <h2>Экология в наших руках: Давайте изменим мир к лучшему!</h2>
                    <p className={cl.bannerDesc}>Наша цель — создать общество, которое бережно относится к природе и заботится о её будующем</p>
                    <div className={cl.buttons}>
                        <button className={cl.button1}><Link to={'/Проекты'}>Наши проекты</Link></button>
                        <button className={cl.button2}><a href="#about">Узнать больше</a></button>
                    </div>
                </div>
            </div>
            <div className={cl.banner2}>
                <p>Окружающая среда</p>
                <img src={leafPath} alt="leaf" width={"64px"} height={"64px"}/>
                <p>Очистка мирового океана</p>
                <img src={leafPath} alt="leaf" width={"64px"} height={"64px"}/>
                <p>Возобновляемая энергия</p>
            </div>
            <div className={cl.banner3} id="about">
                <div>
                    <img className={cl.thumb} src={thumbPath} alt="thumb"/>
                </div>
                <div className={cl.about}>
                    <h2>О нас</h2>
                    <p>"ЭкоБудущее" — это движение, основанное на идее, что каждый из нас может внести свой вклад в защиту нашей планеты.
                         Мы верим, что изменение начинается с понимания, и поэтому наша основная задача — просвещение и вовлечение общества в экологические инициативы.</p>
                    <button className={cl.buttonMember}><Link to={"/Участие"}>Стать участником</Link></button>
                </div>
            </div>
            <div className={cl.banner4}>
                <div className={cl.people}>
                    <img src={peoplePath} alt="people" width={"128px"} height={"128px"}/>
                    <p>100+<br/>Волонтеров</p>
                </div>
                <div className={cl.mark}>
                    <img src={markPath} alt="succses" width={"128px"} height={"128px"}/>
                    <p>Более 20 экологических проектов</p>
                </div>
                <div className={cl.engine}>
                    <img src={enginePath} alt="engine" width={"128px"} height={"128px"}/>
                    <p>10+ исследовательских отчетов</p>
                </div>
                <div className={cl.award}>
                    <img src={awardPath} alt="award" width={"128px"} height={"128px"}/>
                    <p>"Лучший волонтерский проект"<br/>2023</p>
                </div>
            </div>
            <div className={cl.banner5}>
                <h2>Наши проекты</h2>
                <div className={cl.cards}>
                    <PrjCard button={false} title={"Зеленный Город"} content={"Организация массовых субботников с привлечением волонтеров для высадки растений в парках, скверах и вдоль улиц. Также возможно проведение образовательных программ по уходу за растениями"}/>
                    <PrjCard button={false} title={"Зеленный Город"} content={"Организация массовых субботников с привлечением волонтеров для высадки растений в парках, скверах и вдоль улиц. Также возможно проведение образовательных программ по уходу за растениями"}/>
                    <PrjCard button={false} title={"Зеленный Город"} content={"Организация массовых субботников с привлечением волонтеров для высадки растений в парках, скверах и вдоль улиц. Также возможно проведение образовательных программ по уходу за растениями"}/>
                </div>
                <button className={cl.button5}><Link to={'/Проекты'}>Узнать больше</Link></button>
            </div>
            <div className={cl.banner6}>
                <p>В разработке</p>
                <h2>Построим Зеленное будущее Вместе</h2>
                <div>
                    <div className={cl.energy}>
                        <img src={energyPath} alt="energy" />
                        <p>Энергоэффективность</p>
                    </div>
                    <div className={cl.renwewable}>
                        <img src={renwewablePath} alt="renewable" />
                        <p>Возобновляемая энергия</p>
                    </div>
                    <div className={cl.tree}>
                        <img src={treePath} alt="tree" />
                        <p>Зеленная инфраструктура</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}