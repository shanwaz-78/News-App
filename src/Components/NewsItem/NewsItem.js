import React from "react";

function NewsItem({ title, description, imageUrl, url, publishedDate }) {
  return (
    <div
      className="col-md-4 mb-4 my-3 d-flex justify-content-center align-items-center"
      style={{ width: "19rem", cursor: "pointer", padding: "10px" }}
    >
      <div className="card h-100">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Loading..."
          loading="lazy"
          decoding="async"
          width={160}
          height={160}
          onError={(e) => {
            e.target.src = 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-auto btn btn-sm btn-primary bg-dark"
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">Last Updated: {publishedDate}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
