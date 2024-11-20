const express = require("express");
const database = require("../Database/Database.js");
const bcrypt = require("bcrypt");
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

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
         WHERE news_id=?`,[newsID],(err,res)=>{
            if(err){
                console.error("Ошибка: "+err.stack);
                return responce.status(500).json({error:"Ошибка при получении данных из БД\nПопробуйте снова или обратитесь в службу поддержки"});
            }
            responce.json(res);
         });
});

app.post("/it-fest/login",(request,responce)=>{
    const username = request.body.username.username;
    const password = request.body.username.password;

    if(!username||!password){
        return responce.status(400).json({message:"Поля параметро пустые!"});
    }

    database.query(`SELECT * FROM users WHERE login = ?`,[username], (err,res)=>{
        if(err){
            return responce.status(500).json({message:"Ошибка запроса",err});
        }

        if(res.length === 0){
            return responce.status(401).json({message:"Пользователь не найден"});
        }

        const user = res[0];

        bcrypt.compare(password,user.hashPassword,(err,isMatch)=>{
            if(err){
                return responce.status(500).json({us:user});
            }
            
            if(isMatch){
                return responce.status(200).json({message:"Успешно!"})
            }
            else{
                return responce.status(401).json({message:"Неправильный пароль!"});
            }
        })
    })
});

app.get("/it-fest/feedback",(request,responce)=>{
    database.query("SELECT * FROM feedback",(err,res)=>{
        if(err){
            console.error("Ошибка: "+err.stack);
            return responce.status(500).json({error:"Ошибка приполучении данных из БД"});
        }
        responce.json(res);
    })
});

app.get("/it-fest/members",(request,responce)=>{
    database.query("SELECT * FROM volunteers",(err,res)=>{
        if(err){
            console.error("Ошибка: "+err.stack);
            return responce.status(500).json({error:"Ошибка приполучении данных из БД"});
        }
        responce.json(res);
    })
})

app.post("/it-fest/createNews",(request,responce)=>{
    const title = request.body.newsTitle;
    const description = request.body.newsDescription;
    const date = request.body.newsDate;
    const content = request.body.newsContent;

    let lastId = 0;

    database.query("INSERT INTO news(title,short_description) VALUES(?,?)",[title,description],(err,res)=>{
        if(err){
            return responce.status(500).json({message:"Ошибка запроса",err});
        }
    });
    database.query("SELECT id FROM news ORDER BY id DESC LIMIT 1",(err,res)=>{
        if(err){
            return responce.status(500).json({message:"Ошибка запроса",err});
        }
        lastId = res[0].id;
        database.query("INSERT INTO news_content(news_id,publication_date,content) VALUES(?,?,?)",[lastId,date,content],(err,res)=>{
            if(err){
                database.query("delete from news order by id desc limit 1",(err,res)=>{
                    if(err){
                        return responce.status(500).json({message:"Ошибка запроса",err});
                    }
                })
                return responce.status(500).json({message:"Ошибка запроса", err});
            }
            return responce.status(200).json({message:"Созданно успешно!"});
        })
    })
})

app.post("/it-fest/createPrj",(request,responce)=>{
    const title = request.body.prjTitle;
    const description = request.body.prjDescription;
    const content = request.body.prjContent;

    let lastId = 0;

    database.query("INSERT INTO project(title,short_description) VALUES(?,?)",[title,description],(err,res)=>{
        if(err){
            return responce.status(500).json({message:"Ошибка запроса",err});
        }
    });
    database.query("SELECT id FROM project ORDER BY id DESC LIMIT 1",(err,res)=>{
        if(err){
            return responce.status(500).json({message:"Ошибка запроса",err});
        }
        console.log(res[0]);
        lastId = res[0].id;
        database.query("INSERT INTO project_content(prj_id,content) VALUES(?,?)",[lastId,content],(err,res)=>{
            if(err){
                database.query("DELETE FROM project ORDER BY id DESC LIMIT 1",(err,res)=>{
                    if(err){
                        return responce.status(500).json({message:"Ошибка запроса",err});
                    }
                })
                return responce.status(500).json({message:"Ошибка запроса", err});
            }
            return responce.status(200).json({message:"Созданно успешно!"});
        })
    })
})

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT,(err)=>{
    if(err){
        console.log(`Произошла ошибка сервера:${err}\nПопробуйте еще раз, позже`);
    }
    console.log(`Сервер успешно запущен, порт:${PORT}`);
});