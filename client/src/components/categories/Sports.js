import { React, useEffect, useState, useContext } from "react";
import myKey from "../../context/config";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../context/index";

const Sports = () => {
  const contextObj = useContext(StoreContext);

  const [sports, setSports] = useState([]);
  const API_KEY = myKey.news.apiKey;

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&categories=sports&languages=en&sort=published_desc`
      )
      .then((data) =>
        setSports(data.data.data.filter((item) => item.image).slice(0, 6))
      )
      .catch((err) => console.log(`Your had an ${err}`));
  }, []);
  console.log(sports);


  const sportNews = sports.map((value, i) => {
    const { author, title, image, url, description, source, published_at } =
      value;
    return (
      <div>
        <div key={i}>
          <div className={i === 0 ? "sportswrapperActive" : "sportswrapper"}>
            <img
              className={i === 0 ? "imgActive" : "businessimg"}
              src={image}
              alt={title}
              width="200px"
              height="250px"
            />
            <div className="sportsOthers">
              <h3
                className={
                  (i === 0 && contextObj.store === "light"
                    ? "generalTitleActive"
                    : "generalTitleActiveDark",
                  contextObj.store === "light"
                    ? "generalTitle"
                    : "sportTitleDark")
                }
                onClick={() => {
                  if (i === 0 || i) {
                    history.push({
                      pathname: "/linkscollection",
                      state: { value },
                    });
                  }
                }}
              >
                {title}
              </h3>
              <p
                className={
                  (i === 0 && contextObj.store === "lighjt"
                    ? "generalPublishActive"
                    : "generalPublishActiveDark",
                  contextObj.store === "light"
                    ? "generalPublish"
                    : "generalPublishDark")
                }
              >
                {published_at}
              </p>

              <p
                className={
                  (i === 0 && contextObj.store === "light"
                    ? "generalDescriptionActive"
                    : "generalDescriptionActiveDark",
                  contextObj.store === "lighjt"
                    ? "generalDescription"
                    : "generalDescriptionDark")
                }
              >
                {description}
              </p>

              <div
                className={
                  i === 0 ? "businessContainerActive" : "businessContainer"
                }
              >
                <div
                  className={
                    i === 0
                      ? "businessAuthorFatherActive"
                      : "businessAuthorFather"
                  }
                >
                  <p
                    className={
                      (i === 0 && contextObj.store === "light"
                        ? "businessAuthorWordActive"
                        : "businessAuthorWordActiveDark",
                      contextObj.store === "light"
                        ? "businessAuthorWord"
                        : "businessAuthorWordDark")
                    }
                  >
                    Author:{" "}
                  </p>
                  <p
                    className={
                      (i === 0 && contextObj.store === "light"
                        ? "businessAuthorActive"
                        : "businessAuthorActive",
                      contextObj.store === "light"
                        ? "businessAuthor"
                        : "businessAuthorDarks")
                    }
                  >
                    {" "}
                    {author}
                  </p>
                </div>
                <div
                  className={
                    i === 0
                      ? "businessAuthorFatherActive"
                      : "businessAuthorFather"
                  }
                >
                  <p
                    className={
                      (i === 0 && contextObj.store === "light"
                        ? "businessAuthorWordActive"
                        : "businessAuthorWordActiveDark",
                      contextObj.store === "light"
                        ? "businessAuthorWord"
                        : "businessAuthorWordDark")
                    }
                  >
                    Source:{" "}
                  </p>
                  <p
                    className={
                      (i === 0 && contextObj.store === "light"
                        ? "businessAuthorActive"
                        : "businessAuthorActiveDark",
                      contextObj.store === "light"
                        ? "businessAuthor"
                        : "businessAuthordark")
                    }
                  >
                    {" "}
                    {source}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div
        onClick={() =>
          history.push({
            pathname: "/newscollection",
            state: { category: "sports" },
          })
        }
        id="sports"
        className={contextObj.store === "dark" ? "generalDark" : "general"}
      >
        SPORTS
      </div>

      <div className="SportsFather">{sportNews}</div>
    </div>
  );
};
export default Sports;
