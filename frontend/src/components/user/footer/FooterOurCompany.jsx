import { Link } from "react-router-dom";

export default function FooterOurCompany() {
  return (
    <div className="col-width-22 custom-common-column">
      <div className="footer-widget mb-40">
        <h3 className="footer-title">Our Company</h3>
        <div className="footer-info-list">
          <ul>
            <li>
              <a href="about-us.html"> About Us</a>
            </li>
            <li>
              <a href="terms-of-service.html"> Terms of Service </a>
            </li>
            <li>
              <a href="privacy-policy.html"> Privacy Policy</a>
            </li>
            <li>
              <a href="blog.html"> Our Blogs</a>
            </li>
            <li>
              <a href="contact-us.html"> Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
