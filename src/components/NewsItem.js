import React, { Component } from "react";
import np from "./img/np.png";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, publishedAt, name } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>
            {name}
          </span>
          <img
            src={urlToImage ? urlToImage : np}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <p className="card-text">
              <small className="text-danger">
                By: {author?author:"Unknown"} <br />
                At: {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
