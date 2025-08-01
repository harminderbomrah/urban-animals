import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="ua-footer">
    <div className="ua-footer__newsletter">
      <h3>Subscribe to newsletter.</h3>
      <form className="ua-footer__form" onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <div className="ua-footer__links">
      <a href="#portfolio">Portfolio</a>
      <a href="#about">About</a>
      <a href="#shop">Shop</a>
      <a href="#contact">Contact</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
    <div className="ua-footer__copyright">
      ALL RIGHTS RESERVED © Urban Animals 2025
    </div>
  </footer>
);

export default Footer;
