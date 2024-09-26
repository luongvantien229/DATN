import React from "react";

export default function BlogItem() {
  return (
    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item wow tmFadeInUp">
            <div className="blog-wrap-2 mb-30">
              <div className="blog-img-2">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-1.jpg" alt="" />
                </a>
                <div className="blog-tag-2">
                  <a href="blog-details.html">Hot News</a>
                </div>
              </div>
              <div className="blog-content-2">
                <div className="blog-meta-2">
                  <ul>
                    <li>
                      <i className="far fa-calendar"></i> April 21, 2020
                    </li>
                    <li>
                      <i className="far fa-eye"></i> 453 views
                    </li>
                  </ul>
                </div>
                <h3>
                  <a href="blog-details.html">
                    Coronavirus latest: at a glance
                  </a>
                </h3>
                <div className="blog-btn">
                  <a href="blog-details.html">
                    Read more <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
  );
}
