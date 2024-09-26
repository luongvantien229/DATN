import { Link } from "react-router-dom";

export default function HeaderBottomMenu() {
  return (
    <div className="main-menu main-menu-padding-1 main-menu-lh-1 d-none d-lg-block hover-boder">
              <nav>
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="position-static">
                    <a href="#">
                      Collection <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Medical Accessories
                        </a>
                        <ul>
                          <li>
                            <a href="product-details.html">
                              Ice Cold Water Therapy
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Oxygen Breathing Machine
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Stainless Steel Kidney Tray
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Stainless Steel Scissors
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Face Mask
                        </a>
                        <ul>
                          <li>
                            <a href="product-details.html">
                              Surgical Face Mask
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Search Lab N95 Face Mask
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">N95 Face Mask</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Hospital Equipment
                        </a>
                        <ul>
                          <li>
                            <a href="product-details.html">Hospital Ward Bed</a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Lightweight Transport Chair
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Men V-Neck Scrub Top
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Essentials Pocket Scrub
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Manual Oxygen Device
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <a href="product-details.html">
                            <img
                              src="assets/images/banner/menu-banner.jpg"
                              alt=""
                            />
                          </a>
                          <div className="menu-banner-content">
                            <h4>Personal</h4>
                            <h3>
                              Temperature <br /> Gun
                            </h3>
                            <div className="menu-banner-price">
                              <span className="new-price">$35.00</span>
                              <span className="old-price">$45.00</span>
                            </div>
                            <div className="menu-banner-btn">
                              <a href="product-details.html">Shop now</a>
                            </div>
                          </div>
                          <div className="menu-banner-discount">
                            <h3>
                              <span>22%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">
                      Blog 
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
  );
}
