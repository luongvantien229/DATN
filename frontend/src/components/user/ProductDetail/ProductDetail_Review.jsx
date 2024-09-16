import React from "react";

export default function ProductDetail_Review() {
  return (
    <div className="pro-details-review-wrap">
      <div className="entry-product-section-heading">
        <h2> Reviews(2)</h2>
      </div>
      <div className="pro-details-review">
        <p>
          <span>5.00</span> average based on 2 ratings.
        </p>
        <div className="single-pro-details-review">
          <div className="review-img">
            <img src="assets/images/client/client-1.jpg" alt="" />
          </div>
          <div className="review-content">
            <div className="review-name-rating">
              <div className="review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="review-name">
                <h6>Edna Watson</h6>
              </div>
            </div>
            <p>Very good and fast delivery during the week. Thank you!</p>
            <div className="review-date-btn">
              <div className="review-date">
                <span> April 16, 2020 at 3:08 am </span>
              </div>
              <div className="review-btn">
                <a href="#">Reply</a>
              </div>
            </div>
          </div>
        </div>
        <div className="single-pro-details-review">
          <div className="review-img">
            <img src="assets/images/client/client-2.jpg" alt="" />
          </div>
          <div className="review-content">
            <div className="review-name-rating">
              <div className="review-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="review-name">
                <h6>Edna Watson</h6>
              </div>
            </div>
            <p>Very good and fast delivery during the week. Thank you!</p>
            <div className="review-date-btn">
              <div className="review-date">
                <span> April 16, 2020 at 3:08 am </span>
              </div>
              <div className="review-btn">
                <a href="#">Reply</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ratting-form-wrapper">
          <h3>Add a review </h3>
          <p>
            Your email address will not be published. Required fields are marked{" "}
          </p>
          <div className="comment-form-rating-wrap">
            <span>Your rating: *</span>
            <div className="comment-form-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="rating-form-style">
            <form action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <input type="text" placeholder="Name *" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="email" placeholder="Email *" />
                </div>
                <div className="col-lg-12 col-md-12">
                  <textarea placeholder="Your review"></textarea>
                </div>
              </div>
              <div className="cookies-consent">
                <input type="checkbox" value="yes" />
                <p>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <div className="form-submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
