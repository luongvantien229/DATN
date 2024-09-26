import React from "react";
import ProductDetail_Description from "./ProductDetail_Description";
import ProductDetail_Additional from "./ProductDetail_Additional";
import ProductDetail_Review from "./ProductDetail_Review";
export default function ProductDetail_Right() {
  return (
    <div className="product-details-wrap-bottom">
      {/* <div className="product-details-description">
        <div className="entry-product-section-heading">
          <h2>Description</h2>
        </div>
        <p>
          Original range of anti bacterial hand gel has an advanced formula that
          works in seconds to kill 99% of harmful bacteria and leaves your hands
          feeling clean and smelling lovely. Dermatologically tested and
          approved. Alcohol Denat., Aqua, Propylene Glycol, Carbomer,
          Triethanolamine, Parfum, Benzyl Benzoate, Linalool, Active Ingredients
          Ethanol 57.6%
        </p>
        <p>
          This product is uniquely formulated to be non-drying and
          non-irritating to skin, even with multiple daily use Emollient-rich
          formulation helps prevent skin break down and has shown to improve
          hand hygiene compliance when included as part of a multi-dimensional
          program
        </p>
        <ul>
          <li>Dermatologically approved</li>
          <li>Kills 99% of bacteria fast</li>
          <li>Quick drying formulation</li>
          <li>
            Leaves hands slightly scented and reassurance for the entire family
          </li>
        </ul>
        <p>
          Kills 99.99% of germs without water. With Aloe Vera Extract. Helps
          leave hands feeling soft and refreshed. Rinse free and non sticky.
          Dermatologically tested. <br /> Directions: Squeeze 1/2 teaspoon
          amount instant hand sanitizer in your palm then briskly rub hands
          together thoroughly until dry.
        </p>
      </div> */}
      <ProductDetail_Description />
      {/* <div className="pro-details-additional-information pro-details-mrg-tb">
        <div className="entry-product-section-heading">
          <h2>Additional information</h2>
        </div>
        <div className="additional-information">
          <ul>
            <li>
              <span>Type Of Packing</span> Bottle
            </li>
            <li>
              <span>Color</span> Green, Pink, Powder Blue, Purple
            </li>
            <li>
              <span>Quantity Per Case</span> 100ml
            </li>
            <li>
              <span>Ethyl Alcohol</span> 70%
            </li>
            <li>
              <span>Piece In One</span> Carton
            </li>
          </ul>
        </div>
      </div> */}
      <ProductDetail_Additional />
      {/* <div className="pro-details-review-wrap">
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
              Your email address will not be published. Required fields are
              marked{" "}
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
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
                <div className="form-submit">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <ProductDetail_Review />
    </div>
  );
}
