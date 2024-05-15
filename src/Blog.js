import React from "react";
import data from "./data";
import Card from "./Card"

const Blog = () => {
  return(
    <>
      <h2
        className='text-center text-info mt-3'
        >Blog Page
      </h2> 
      <section className="py-4 py-lg-5 container">
        <div className="row justify-content-center">

            {data.cardData.map((item,index)=>{
              return(
                <Card img={item.img} title={item.title} link={`/details/${item.id}`} />
                
                )
                
              })}

        </div>

      </section>
    </>
  )

}

export default Blog;