/** Database.js - объект отвечающий за подключение к БД **/

// Импортируем библиотеку mysql2 для работы с MySQL
const mysql = require('mysql2');

// Устанавливаем переменные окружения из файла .env, чтобы обеспечить безопасное хранение конфиденциальной информации
require('dotenv').config({path:__dirname+'/./../../.env'})

// Создаём пул соединений с базой данных MySQL
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,       // Хост базы данных
    user: process.env.DATABASE_USER,       // Имя пользователя для подключения к базе данных
    password: process.env.DATABASE_PASSWORD,// Пароль для подключения к базе данных
    database: process.env.DATABASE_NAME    // Имя базы данных
});

// Экспортируем пул соединений, чтобы его можно было использовать в других модулях
module.exports = pool;