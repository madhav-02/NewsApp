import React, { Component } from 'react'

export default class Newsitem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        <div className="my-3">
            <div className="card" >
                <img src={!imageUrl ? "https://c.ndtvimg.com/2022-12/i5bcj6mo_elon-musk-650_625x300_13_December_22.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>

            {/* <h1>Hello</h1>
            <h2>wordl</h2> */}
        </div>
    )
  }
}
