import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import footerlogo from '../assets/Sl40.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Info */}
                <div className="footer-brand">
                    <img src={footerlogo} className="footer-logo" alt="" />
                    <p>
                        Dive into a world of knowledge, stories, and imagination. Your
                        gateway to books, authors, and communities that matter.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/package">Packages</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Legal Notices</h3>
                    <ul>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h3>Contact</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Automation powered with RLogics Solutions, UK and MVP developed by <a href="https://vcraftyucompany.com/" target="_blank"> Vcraftyu Company</a>, India.
            </div>
        </footer>
    );
};

export default Footer;
