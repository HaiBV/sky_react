const express = require('express');
const router = express.Router();

const HomeController = {
  index: (req, res, next) => {
    res.render('index', { title: 'Express' });
  }
};

module.exports = HomeController;
