# it-fest-final
Задание финального этапа Фестиваля информационных технологий "IT-фест". Номинация "Разработка веб-сайтов", в возрастной категории 12-17 лет.

## Запуск приложения
Наше приложение собранно с помощью create react app, это значит что для запуска dev и build сервера можно использовать WebPack.

Следуйте следующей инструкции для запуска нашего приложения

### Установите Node.js
Сделать это можно на официальном сайте: https://nodejs.org

### Установите Git
Сделать это можно на официальном сайте: https://git-scm.com/downloads

### Клонирование репозитория
Для этого в выбраннм вами пути в терминале запустите следующий код
```
git clone https://github.com/TRUINGLol/it-fest-final.git
```
### Установка зависимостей
В каталоге репозитория через терминал запустите следующий код
```
npm install
```

### Переменные окружения
Для запуска приложения совместно с SQL базой даных нужно заполнить .env файл
Создайте в корне проекта файл ".env" и заполните его по примеру из ".env.example"

### Запуск приложения
Для этого в каталоге репозитория через терминал запустите следующий код

Для запуска Dev версии
```
npm start
```

Для запуска Build версии
```
npm run build
npm install -g serve
serve -s build
```
