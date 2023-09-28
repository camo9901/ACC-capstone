import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* colum2 */}
            <div className="col">
              <h4>About fake store</h4>
              <ul className="list-unstyled">
                <li>Company info</li>
                <li>News</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Policies</li>
              </ul>
            </div>
            {/* colum3 */}
            <div className="col">
              <h4>Help & Contact</h4>
              <ul className="list-unstyled">
                <li>Seller Contact</li>
                <li>Contact us</li>
                <li>Returns </li>
                <li>Fake Store Money Back Guarantee</li>
                <li>Announcements</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row-2">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} The Fake Store | All right
              reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
