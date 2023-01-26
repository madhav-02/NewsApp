import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, time} = this.props;
    return (
        <div className="my-3">
            <div className="card border-dark" >
                <img src={!imageUrl ? "https://c.ndtvimg.com/2022-12/i5bcj6mo_elon-musk-650_625x300_13_December_22.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <footer className="blockquote-footer my-3">
                    <small>
                    <cite title="Source Title"> {!author?"Unknown":author}</cite>
                    </small>
                    <p className="card-text"><small className="text-muted">Last Updated: {!time?"":time.slice(0,10)}</small></p>
                  </footer>
                </div>
            </div>

            {/* <h1>Hello</h1>
            <h2>wordl</h2> */}
        </div>
    )
  }
}
