const express = require("express");
// const database = require("../Database/Database.js");
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use(cors());


const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT,(err)=>{
    if(err){
        console.log(`Произошла ошибка сервера:${err}\nПопробуйте еще раз, позже`);
    }
    console.log(`Сервер успешно запущен, порт:${PORT}`);
});