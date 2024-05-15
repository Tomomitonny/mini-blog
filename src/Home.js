import React, {Component} from "react";
import { Link } from "react-router-dom";
import data from "./data";

const Home = () => {
 

    return (
      <>
        <h1
          className='text-center text-info mt-3'
          >React Dynamic Router
        </h1>
        <Link to="/blog" className="btn btn-light btn-lg mt-10"
          >Go to Blog
        </Link>
      </>
    )
  }

  export default Home;