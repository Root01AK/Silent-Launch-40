import React from "react";
import { Link } from "react-router";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import footerlogo from '../assets/sl-logo.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Info */}
                <div className="footer-brand">
                    <img src={footerlogo} className="footer-logo" alt="" />
                    <p>
                    Quietly launched as a user-friendly Indie Publishing Platform exclusively for students and research scholars in Derby group of institutions, UK.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">→ Home</a></li>
                        <li><a href="/package">→ Publishing Packages</a></li>
                        <li><a href="/#testimonials">→ User Testimonials</a></li>
                        <li><a href="/FreelancerHub">→ Freelancers Hub</a></li>
                        <li><Link to="/about#faqs">→ FAQs</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>New</h3>
                    <ul>
                        <li><a href="#">→ Derby Indie Publishing Community</a></li>
                        <li><a href="documents/guide-book.pdf" target="_blank" rel="noopener noreferrer">→ Publishing Guidebook</a></li>
                        <li><a href="#">→ Design Templates</a></li>
                        <li><a href="#">→ Instant Cover Page Generations</a></li>
                        <li><a href="#">→ SMART Marketing & Distribution</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Legal Notices</h3>
                    <ul>
                        <li><a href="/terms">→ Terms & Conditions</a></li>
                        <li><a href="/privacy">→ Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Automation powered with <a href="https://rlogicssolutions.com/" target="_blank">RLogics Solutions</a>, UK and MVP developed by <a href="https://vcraftyucompany.com/" target="_blank"> Vcraftyu Company</a>, India.
            </div>
        </footer>
    );
};

export default Footer;
