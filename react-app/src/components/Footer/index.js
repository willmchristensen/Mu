import './Footer.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <button>
                    logo
                </button>
            </div>
            <div className="footer-nav-titles">
                <span>
                    title
                </span>
                <span>
                    title
                </span>
            </div>
            <div className="footer-nav">
                <nav>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                    <NavLink to="/content">content</NavLink>
                </nav>
            </div>
            <div className="footer-promoter">
                <h3>Are you a promoter?</h3>
                <button className="oval-button">
                    Submit event
                </button>
            </div>
            <div className="footer-footer">
                <div className="footer-footer-section-one">
                    <div className="footer-footer-section-one-left">
                        <div className="footer-footer-flag">
                            <button>flag icon goes here</button>
                        </div>
                        <div className="footer-footer-location">
                            <span>dynamic location goes here</span>
                        </div>
                        <div className="footer-footer-language">
                            <span>Language</span>
                            <span>dynamic lang here</span>
                        </div>
                    </div>
                    <div className="footer-footer-section-one-right">
                        <NavLink to="/content">content</NavLink>
                        <NavLink to="/content">content</NavLink>
                        <NavLink to="/content">content</NavLink>
                        <NavLink to="/content">content</NavLink>
                    </div>
                </div>
                <div className="footer-footer-section-two">
                    <div className="footer-footer-section-two-left">
                        <p>C icon + © 2023 Resident Advisor Ltd. All rights reserved. </p>
                    </div>
                    <div className="footer-footer-section-two-right">
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                        <NavLink to="/content">icon</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;