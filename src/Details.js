import React, {Component} from "react";
import { useParams, Link } from 'react-router-dom';
import data from "./data";

const Details = () => {
  const { id } = useParams();
  const currentId = parseInt(id, 10);
  const getData = data.cardData.find(item => item.id === currentId);

  if (!getData) {
    return <div>Blog post not found</div>;
  }

  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < data.cardData.length ? currentId + 1 : null;

    return (
      <>
        <h2
          className='text-center text-info mt-3'
          >Details Page
        </h2> 
        <Link to="/" className="btn btn-outline-secondary">
              Home
        </Link>
        <Link to="/blog" className="btn btn-primary">
              Blog
        </Link>

        <section className="py-4 py-lg-5 container">
          <div className="row justify-content-center">
            <div className="col-8">
              <img src={getData.img} className="img-fluid" />
              <h1 className="text-red-500">{getData.title}</h1>
              <p>{getData.desc}</p>
            </div>
          <div className="col-12 text-center mt-4">
            {prevId && (
              <Link to={`/details/${prevId}`} className="btn btn-outline-primary m-2">Previous</Link>
            )}
            {nextId && (
              <Link to={`/details/${nextId}`} className="btn btn-outline-primary m-2">Next</Link>
            )}
          </div>  
          </div>
        </section>
      </>
    )
  }

  export default Details