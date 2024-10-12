import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <form className="footer-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div className="footer-section">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <p>USD $</p>
            <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>

          <div className="footer-section">
            <h3>mettā muse</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="/instagram-icon.png" alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src="/linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="footer-payments">
            <h3>mettā muse ACCEPTS</h3>
            <div className="payment-icons">
              <img src="/gpay-icon.png" alt="Google Pay" />
              <img src="/mastercard-icon.png" alt="Mastercard" />
              <img src="/paypal-icon.png" alt="PayPal" />
              <img src="/amex-icon.png" alt="American Express" />
              <img src="/apple-pay-icon.png" alt="Apple Pay" />
              <img src="/opay-icon.png" alt="OPay" />
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;