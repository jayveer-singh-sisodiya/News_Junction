import React, { Component } from "react";

class NewsItem extends Component {


  render() {
    const { title, discription, imgUrl, newsUrl } = this.props;

    // Add console log for debugging
    console.log("NewsItem Props:", { title, discription, imgUrl, newsUrl });

    return (
      <div className="my-3">
        <div className="card">
          {imgUrl && <img src={imgUrl} className="card-img-top" alt={title || "News image"} />}
          <div className="card-body">
            <h5 className="card-title">{title || "No title available"}</h5>
            <p className="card-text">
              {discription? discription.slice(0, 100) + "..." : discription }
            </p>
            {newsUrl && (
              <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm card-footer">
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
