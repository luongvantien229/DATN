import React from "react";
import BlogItem from "./blogItem";
import Pagination from "../pagination";

export default function Index() {
  return (
    <div className="blog-area pt-75 pb-75">
      <div className="container">
        <div className="row grid">
            {[...Array(6)].map((_, index) => (
                <BlogItem key={index} />
            ))}
        </div>
        <Pagination />  
      </div>
    </div>
  );
}
