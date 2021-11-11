// const ApiClient = require("./apiClient");
const axios = require("axios");
// const Article = require("../models/articleModelOld");
const config = require("../config");

const myKey = config.APP_KEY;
const News_Key = config.News_Key;
const apiCtrl = {};

// GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=c07cb602ab714e5f8585bce753719ec3

apiCtrl.news = async (req, res) => {
  await axios
    .get(
      `https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=${News_Key}`
    )
    .then((articles) => {
      res.status(200).json(articles.data);
    })
    .catch((err) => {
      res.status(401).json({ message: err.message });
    });
};

// apiCtrl.news = async (req, res) => {
//   await axios
//     .get(
//       `http://api.mediastack.com/v1/news?access_key=${myKey}&categories=sports&languages=en&sort=published_desc`
//     )
//     .then((articles) => {
//       res.status(200).json(articles.data);
//     })
//     .catch((err) => {
//       res.status(401).json({ message: err.message });
//     });
// };

// articleController.getArticle = async (req, res) => {
//   try {
//     const article = await article.find();
//     res.status(200).json(article);
//   } catch (err) {
//     res.status(err.status).json({ message: err.message });
//   }
// };

module.exports = apiCtrl;
