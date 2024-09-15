import { Link } from "react-router-dom";

export default function FooterAbout() {
  return (
    <div className="col-width-25 custom-common-column">
      <div className="footer-widget footer-about mb-30">
        <div className="footer-logo logo-width-1">
          <a href="index.html">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2020 HasThemes |{" "}
            <a target="_blank" href="https://hasthemes.com/">
              Built with <span>Medizin</span> by HasThemes
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
