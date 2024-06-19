import React, { useState, useCallback, useMemo, useEffect } from "react";
import useCustomHook from "../../hooks/useCustomHook";
import Loader from "../Loader/Loader";
import NewsItem from "./NewsItem";


function News({ pageSize, country, category, apiKey }) {
  const [nextPage, setNextPage] = useState(1);
  const { news, isLoading, error } = useCustomHook(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}&category=${category}`
  );

  useEffect(() => {
    document.title = `${
      category.charAt(0).toUpperCase() + category.slice(1)
    } News`;
  }, [category]);

  const handlePagination = useCallback((e) => {
    const { id } = e.target;
    switch (id) {
      case "next":
        setNextPage((previousPage) => previousPage + 1);
        break;
      case "previous":
        setNextPage((previousPage) => previousPage - 1);
        break;
      default:
        break;
    }
  }, []);

  const renderNewsItems = useMemo(() => {
    return news.map(({ title, description, urlToImage, url, publishedAt }) => (
      <div className="col-md-4" key={url}>
        <NewsItem
          title={title ? title.slice(0, 44) : "No title available"}
          description={
            description ? description.slice(0, 87) : "No description available"
          }
          imageUrl={
            urlToImage ||
            "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          }
          url={url}
          publishedDate={new Date(publishedAt).toGMTString()}
        />
      </div>
    ));
  }, [news]);

  return (
    <div className="container my-3">
      <h2 className="text-center">NewsMonkey - Top Headlines</h2>

      {isLoading && <Loader />}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}

      {!isLoading && (
        <div>
          <div className="row">
            {news.length === 0 ? (
              <div className="alert alert-info my-2" role="alert">
                No more news available.
              </div>
            ) : (
              renderNewsItems
            )}
          </div>

          <div className="container d-flex justify-content-between my-3">
            <button
              type="button"
              className="btn btn-dark"
              id="previous"
              onClick={handlePagination}
              disabled={nextPage === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              id="next"
              disabled={news.length === 0}
              onClick={handlePagination}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
