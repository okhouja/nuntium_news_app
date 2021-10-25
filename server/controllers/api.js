// const ApiClient = require("./apiClient");
const axios = require("axios");
const Article = require("../models/articleModel");
const config = require("../config");

const myKey = config.APP_KEY;
const articleCont = {};

articleCont.news = async (req, res) => {
  await axios
    .get(
      `http://api.mediastack.com/v1/news?access_key=${myKey}&categories=sports&languages=en&sort=published_desc`
    )
    .then((articles) => {
      res.status(200).json(articles.data);
    })
    .catch((err) => {
      res.status(401).json({ message: err.message });
    });
};

// articleController.getArticle = async (req, res) => {
//   try {
//     const article = await article.find();
//     res.status(200).json(article);
//   } catch (err) {
//     res.status(err.status).json({ message: err.message });
//   }
// };

module.exports = articleCont;
