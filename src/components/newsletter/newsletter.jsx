import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletter">
        <div className="newsletter-form">
          <div className="newsletter-img">
            <img
              src="/img/mailing-list-img.png"
              style={{ visibility: false }}
              alt=""
            />
          </div>
          <div className="newsletter-field">
            <p>Sign up for our newsletter and get 10% off your next order.</p>
            <div className="search-bar">
              <input
                type="search"
                className="search"
                placeholder="Your Email"
              />
              <img src="/img/arrow.svg" className="arrow" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsletter;
