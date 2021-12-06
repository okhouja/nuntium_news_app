import { React, useEffect, useState } from "react";
import axios from "axios";
import myKey from "../../context/config";
import { useHistory } from "react-router-dom";
const API_KEY = myKey.news.apiKey;

const Trending = () => {
  const history = useHistory();

  const [trend, setTrend] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&languages=en&sort=published_desc`
      )
      .then((data) =>
        setTrend(data.data.data.filter((item) => item.image).slice(0, 4))
      )
      .catch((err) => console.log(`Your had an ${err}`));
  }, []);
  console.log(trend);

  const showNews = trend.map((value, i) => {
    const { image, author, title, source, published_at } = value;
    return (
      <div key={i}>
        <div className="trendFather">
          <div className="imgTrendFather">
            <img className="imgTrend" src={image} alt={title} />
          </div>
          <div className="midTrendFather">
            <p>{published_at}</p>
            <div className="sourceFather">
              <p>Source: </p> <p> {source}</p>
            </div>
          </div>
          <h1
            className="trendTitle"
            onClick={() => {
              history.push({ pathname: "/linkscollection", state: { value } });
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="trendingContainer">{showNews}</div>
    </div>
  );
};
export default Trending;
