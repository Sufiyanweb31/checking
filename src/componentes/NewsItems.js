import React from 'react'

const NewsItems =(props) => {
 
    let {title, description, imageUrl, newsurl, date, author, source} = props;
    return (
      <>
        <div className="card">
          <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/220921124533-demonstrators-iran-amini.jpg?q=w_800,c_fill":imageUrl} className="card-img-top" style={{width: '100%', height: '300px', objectFit: 'cover',}} alt={title}/>
          <div className="card-body news-cards">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank " className="btn btn-sm btn-primary">Read More</a>
          </div>
          <span className="position-absolute top-0 my-badge start-100 translate-middle badge rounded-pill bg-danger"> {source} </span>
        </div>
      </>
    )
}

export default NewsItems