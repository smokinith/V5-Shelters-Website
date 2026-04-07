import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_f672d55b-f9ed-48a5-b215-7fb2ae41af56/artifacts/ytn8lai5_V5%20Logo%20PNG.png" 
              alt="V5 Shelters" 
              className="footer-logo" 
            />
            <p className="footer-tagline">
              Building Dreams, Creating Homes - Your trusted partner for affordable row villas in Bangalore.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/why-us">Why V5 Shelters</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>#501, Terrace Floor, Shiv Kailash Apartment, 9th Main Road, Near Shiv Kutir Apartments, CM Layout, HSR Layout Extension, Yellukunte, Bengaluru 560068</span>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:sales@v5shelters.com">sales@v5shelters.com</a>
              </li>
              <li>
                <Phone size={18} />
                <span>+91-XXXXXXX</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
            <p className="footer-website">
              <a href="https://www.v5shelters.com" target="_blank" rel="noopener noreferrer">
                www.v5shelters.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} V5 Shelters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;