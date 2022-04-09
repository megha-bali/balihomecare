import React from 'react';
const Footer = (props) => {
  return (
    <>
      <footer className="footer">
        <div className="copyright">
          &copy; Copyright 2022 Bali home care services
        </div>
        <div className="resources">
          <p>
            Images: <a href="pinterest.com">pinterest.com</a>,&nbsp;
            <a href="unsplash.com">unsplash.com</a>
          </p>
          <p>
            Content:&nbsp;
            <a href="https://en.wikipedia.org/wiki/Home_care">
              https://en.wikipedia.org/wiki/Home_care
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
