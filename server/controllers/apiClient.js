const axios = require("axios");

async function makeRequest() {
  let res = await axios.get("https://api.github.com/users/janbodnar");

  let nOfFollowers = res.data.followers;
  let location = res.data.location;

  console.log(`# of followers: ${nOfFollowers}`);
  console.log(`Location: ${location}`);
}

module.exports = makeRequest;