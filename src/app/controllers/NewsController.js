class NewsController {
  // [GET] / news
  index(req, res) {
    res.render("news");
  }

  // [GET] / news/:slug
  show(req, res) {
    res.json("Show detail!!!");
  }
}

module.exports = new NewsController();
