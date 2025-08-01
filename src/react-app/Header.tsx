import { useEffect, useState, useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll.current;
      
      // Only hide header after scrolling down 100px
      if (currentScroll > 100) {
        setIsScrolled(true);
        setIsVisible(!scrollingDown);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`ua-header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
      <nav className="ua-header__nav">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#cart" className="ua-header__cart">0 items in cart</a>
      </nav>
      <h1 className="ua-header__title">Urban Animals</h1>
    </header>
  );
};

export default Header;
