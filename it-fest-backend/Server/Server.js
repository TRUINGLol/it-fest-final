const express = require("express");
const database = require("../Database/Database.js");
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/it-fest/news",(request,responce)=>{
    database.query("SELECT * FROM news",(err,res)=>{
        if(err){
            console.error("Ошибка: "+err.stack);
            return responce.status(500).json({error:"Ошибка при получении данных из БД\nПопробуйте снова или обратитесь в службу поддержки"});
        }
        responce.json(res);
    });
});

app.get("/it-fest/news/:id",(request,responce)=>{
    const newsID = request.params["id"];
    database.query(`SELECT news_content.content FROM news_content INNER JOIN news ON news.id = news_content.news_id
         WHERE news_id=${newsID}`,(err,res)=>{
            if(err){
                console.error("Ошибка: "+err.stack);
                return responce.status(500).json({error:"Ошибка при получении данных из БД\nПопробуйте снова или обратитесь в службу поддержки"});
            }
            responce.json(res);
         });
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT,(err)=>{
    if(err){
        console.log(`Произошла ошибка сервера:${err}\nПопробуйте еще раз, позже`);
    }
    console.log(`Сервер успешно запущен, порт:${PORT}`);
});