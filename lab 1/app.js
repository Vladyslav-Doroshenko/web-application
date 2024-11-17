const express = require('express');
const app = express();
const blogRoutes = require('./routes/blog');
const expressLayouts = require('express-ejs-layouts');

// Налаштування EJS і макетів
app.set('view engine', 'ejs');
app.use(expressLayouts); // Увімкнення макетів
app.set('layout', 'layouts/layout'); // Встановлення стандартного макета

// Статичні файли
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Маршрути
app.use('/', blogRoutes);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});
