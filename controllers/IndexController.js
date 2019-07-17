const IndexController = {
  index: (req, res, next) => {
    res.render('index', { title: 'Express' });
  }
};

module.exports = IndexController;
