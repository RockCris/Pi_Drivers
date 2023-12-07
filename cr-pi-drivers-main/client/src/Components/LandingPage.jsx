import React from 'react';
import { Link } from 'react-router-dom';
    
const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <img src="https://depor.com/resizer/a5cJMFD2wXboFrYLsMeoZyiEOfY=/640x0/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/W4BF3I6J2ZFNXLGXKJRX5SCG64.jpg" alt="Background" />
      <Link to="/home">
        <button>Go to Home Page</button>
      </Link>    </div>
  );
};

export default LandingPage;
