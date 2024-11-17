const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// Головна сторінка
router.get('/', BlogController.getAll);

// Сторінка деталі
router.get('/item/:id', BlogController.getItem);

// Сторінка для створення нового запису
router.get('/new', BlogController.showCreateForm);

// Додавання нового запису
router.post('/new', BlogController.createPost);

// Сторінка Privacy Policy
router.get('/privacy', BlogController.privacyPolicy);

// Сторінка "Про розробника"
router.get('/about', BlogController.about);

module.exports = router;
