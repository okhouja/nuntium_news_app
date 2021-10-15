const ApiClient = require("./apiClient");
const APP_KEY = require("../config");
const axios = require("axios");
const config = require("./config");
const APP_URL = `http://api.mediastack.com/v1/news?access_key=${APP_KEY}`;

const news = async () => {
  const myKey = config.APP_KEY;
};
