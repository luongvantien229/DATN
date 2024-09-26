import React from "react";
import ProductDetail from "./ProductDetail";
import Information from "./Information";
export default function Index() {
  return (
    <div className="product-details-area padding-30-row-col pt-75 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="product-details-wrap">
              {/* <div className="product-details-wrap-top">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="product-details-slider-wrap">
                      <div className="pro-dec-big-img-slider">
                        <div className="single-big-img-style">
                          <div className="pro-details-big-img">
                            <a
                              className="img-popup"
                              href="assets/images/product-details/pro-details-b-large-1.jpg"
                            >
                              <img
                                src="assets/images/product-details/pro-details-large-1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="pro-details-badges product-badges-position">
                            <span className="red">Sale !</span>
                          </div>
                        </div>
                        <div className="single-big-img-style">
                          <div className="pro-details-big-img">
                            <a
                              className="img-popup"
                              href="assets/images/product-details/pro-details-b-large-2.jpg"
                            >
                              <img
                                src="assets/images/product-details/pro-details-large-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="pro-details-badges product-badges-position">
                            <span className="red">Sale !</span>
                          </div>
                        </div>
                        <div className="single-big-img-style">
                          <div className="pro-details-big-img">
                            <a
                              className="img-popup"
                              href="assets/images/product-details/pro-details-b-large-3.jpg"
                            >
                              <img
                                src="assets/images/product-details/pro-details-large-3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="pro-details-badges product-badges-position">
                            <span className="red">Sale !</span>
                          </div>
                        </div>
                        <div className="single-big-img-style">
                          <div className="pro-details-big-img">
                            <a
                              className="img-popup"
                              href="assets/images/product-details/pro-details-b-large-4.jpg"
                            >
                              <img
                                src="assets/images/product-details/pro-details-large-4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="pro-details-badges product-badges-position">
                            <span className="red">Sale !</span>
                          </div>
                        </div>
                        <div className="single-big-img-style">
                          <div className="pro-details-big-img">
                            <a
                              className="img-popup"
                              href="assets/images/product-details/pro-details-b-large-2.jpg"
                            >
                              <img
                                src="assets/images/product-details/pro-details-large-2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="pro-details-badges product-badges-position">
                            <span className="red">Sale !</span>
                          </div>
                        </div>
                      </div>
                      <div className="product-dec-slider-small product-dec-small-style1">
                        <div className="product-dec-small active">
                          <img
                            src="assets/images/product-details/pro-details-small-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="product-dec-small">
                          <img
                            src="assets/images/product-details/pro-details-small-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="product-dec-small">
                          <img
                            src="assets/images/product-details/pro-details-small-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="product-dec-small">
                          <img
                            src="assets/images/product-details/pro-details-small-4.jpg"
                            alt=""
                          />
                        </div>
                        <div className="product-dec-small">
                          <img
                            src="assets/images/product-details/pro-details-small-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="product-details-content pro-details-content-pl">
                      <div className="pro-details-category">
                        <ul>
                          <li>
                            <a href="shop-filter.html">
                              Home Medical Supplies{" "}
                            </a>{" "}
                            /{" "}
                          </li>
                          <li>
                            <a href="shop-filter.html">Pharmacy </a>
                          </li>
                        </ul>
                      </div>
                      <h1> Anti-septic Dry Hand Gel</h1>
                      <div className="pro-details-brand-review">
                        <div className="pro-details-brand">
                          <span>
                            {" "}
                            Brands: <a href="shop.html">BioZen</a>
                          </span>
                        </div>
                        <div className="pro-details-rating-wrap">
                          <span>5.00</span>
                          <div className="pro-details-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <a href="#"> (2 reviews)</a>
                        </div>
                      </div>
                      <div className="pro-details-price-short-description">
                        <div className="pro-details-price">
                          <span className="new-price">$19.00 - $29.00</span>
                          <span className="old-price">$19.00 - $35.00</span>
                        </div>
                        <div className="pro-details-short-description">
                          <p>
                            Kills 99.99% of germs without water. With Aloe Vera
                            Extract.
                          </p>
                        </div>
                      </div>
                      <div className="pro-details-color-wrap">
                        <span>Color</span>
                        <div className="pro-details-color-list pro-details-color-mrg tooltip-style-3">
                          <ul>
                            <li>
                              <a aria-label="Green" className="green" href="#">
                                green
                              </a>
                            </li>
                            <li>
                              <a aria-label="Pink" className="pink" href="#">
                                pink
                              </a>
                            </li>
                            <li>
                              <a
                                aria-label="Powder blue"
                                className="powder-blue"
                                href="#"
                              >
                                powder-blue
                              </a>
                            </li>
                            <li>
                              <a aria-label="Purple" className="purple" href="#">
                                purple
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="pro-details-quality-stock-area">
                        <span>Quantity</span>
                        <div className="pro-details-quality-stock-wrap">
                          <div className="product-quality">
                            <input
                              className="cart-plus-minus-box input-text qty text"
                              name="qtybutton"
                              value="1"
                            />
                          </div>
                          <div className="pro-details-stock">
                            <span>
                              <i className="fas fa-check-circle"></i> 6 in stock
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pro-details-action-wrap">
                        <div className="pro-details-add-to-cart">
                          <button>Add to cart</button>
                        </div>
                        <div className="pro-details-action tooltip-style-4">
                          <button aria-label="Add To Wishlist">
                            <i className="fad fa-heart"></i>{" "}
                          </button>
                          <button aria-label="Add To Compare">
                            <i className="far fa-signal"></i>{" "}
                          </button>
                        </div>
                      </div>
                      <div className="product-details-meta">
                        <ul>
                          <li>
                            <span>Sku:</span> SF1133569600-1{" "}
                          </li>
                          <li>
                            <span>Tags: </span> <a href="#">covid19</a> /{" "}
                            <a href="#">homecare</a> / <a href="#">Pharmacy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-details-social tooltip-style-4">
                        <a aria-label="Facebook" className="facebook" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a aria-label="Twitter" className="twitter" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a aria-label="Linkedin" className="linkedin" href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a aria-label="Tumblr" className="tumblr" href="#">
                          <i className="fab fa-tumblr-square"></i>
                        </a>
                        <a aria-label="Email" className="envelope" href="#">
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <ProductDetail />
              {/* <div className="product-details-wrap-bottom">
                <div className="product-details-description">
                  <div className="entry-product-section-heading">
                    <h2>Description</h2>
                  </div>
                  <p>
                    Original range of anti bacterial hand gel has an advanced
                    formula that works in seconds to kill 99% of harmful
                    bacteria and leaves your hands feeling clean and smelling
                    lovely. Dermatologically tested and approved. Alcohol
                    Denat., Aqua, Propylene Glycol, Carbomer, Triethanolamine,
                    Parfum, Benzyl Benzoate, Linalool, Active Ingredients
                    Ethanol 57.6%
                  </p>
                  <p>
                    This product is uniquely formulated to be non-drying and
                    non-irritating to skin, even with multiple daily use
                    Emollient-rich formulation helps prevent skin break down and
                    has shown to improve hand hygiene compliance when included
                    as part of a multi-dimensional program
                  </p>
                  <ul>
                    <li>Dermatologically approved</li>
                    <li>Kills 99% of bacteria fast</li>
                    <li>Quick drying formulation</li>
                    <li>
                      Leaves hands slightly scented and reassurance for the
                      entire family
                    </li>
                  </ul>
                  <p>
                    Kills 99.99% of germs without water. With Aloe Vera Extract.
                    Helps leave hands feeling soft and refreshed. Rinse free and
                    non sticky. Dermatologically tested. <br /> Directions:
                    Squeeze 1/2 teaspoon amount instant hand sanitizer in your
                    palm then briskly rub hands together thoroughly until dry.
                  </p>
                </div>
                <div className="pro-details-additional-information pro-details-mrg-tb">
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
                </div>
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
                        <p>
                          Very good and fast delivery during the week. Thank
                          you!
                        </p>
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
                        <p>
                          Very good and fast delivery during the week. Thank
                          you!
                        </p>
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
                        Your email address will not be published. Required
                        fields are marked{" "}
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
                              Save my name, email, and website in this browser
                              for the next time I comment.
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
              </div> */}
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
