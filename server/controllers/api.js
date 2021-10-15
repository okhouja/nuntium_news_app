// const ApiClient = require("./apiClient");
const APP_KEY = require("../config");
const axios = require("axios");
const config = require("../../server/config");
const APP_URL = `http://api.mediastack.com/v1/news?access_key=${APP_KEY}`;

const articleController = {};

articleController.news = async (req, res) => {
  const myKey = config.APP_KEY;
  const headers = {
    access_key: myKey,
  };
  try {
    const { data } = await axios.get({ APP_URL }, { headers });
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    res.status(res.status).json({ message: err.message });
  }
};

// articleController.getArticle = async (req, res) => {
//   try {
//     const article = await article.find();
//     res.status(200).json(article);
//   } catch (err) {
//     res.status(err.status).json({ message: err.message });
//   }
// };

module.exports = articleController;
