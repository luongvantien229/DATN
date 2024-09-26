import { Link } from "react-router-dom";

export default function FooterCustomerService() {
  return (
    <div className="col-width-22 custom-common-column">
      <div className="footer-widget mb-40">
        <h3 className="footer-title">Customer Service</h3>
        <div className="footer-info-list">
          <ul>
            <li>
              <a href="#"> Shipping Options</a>
            </li>
            <li>
              <a href="wishlist.html"> My Wishlist </a>
            </li>
            <li>
              <a href="my-account.html"> My Account </a>
            </li>
            <li>
              <a href="return-policy.html"> Return Policy </a>
            </li>
            <li>
              <a href="#"> Shopping FAQs </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
