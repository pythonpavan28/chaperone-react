import React from 'react';
import './thankyou.css'; // Import the CSS file

const Thankyou = () => {
  return (
    <div className="tu-container">
    <div className="tu-card">
      <h1 className="tu-title">Thank You!</h1>
      <p className="tu-message">
        We appreciate your purchase! Your order is being processed, and we'll notify you when it's ready for shipping.
      </p>
      <p className="tu-orderDetails">
        Need assistance? Feel free to <a href="/contact">contact us</a> for more information.
      </p>
      <button className="tu-button" onClick={() => window.location.href = '/'}>
        Back to Home
      </button>
    </div>
  </div>
  );
};

export default Thankyou;
