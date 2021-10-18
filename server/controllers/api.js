// const ApiClient = require("./apiClient");
const axios = require("axios");
const config = require("../config");

const articleController = {};

articleController.news = async (req, res) => {
  const myKey = config.APP_KEY;

  try {
    const { data } = await axios.get(
      `http://api.mediastack.com/v1/news?access_key=${myKey}&categories=sports&languages=de&sort=published_desc`
    );
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
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
