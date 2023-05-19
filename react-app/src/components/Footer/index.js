import './Footer.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import NavItem from '../NavBar/NavItem';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <button>
                    logo
                </button>
            </div>
            <div className="footer-nav-section">
                <div className="footer-nav">
                    <div className="footer-nav-title">
                        <span>
                            Discover
                        </span>
                    </div>
                    <nav>
                        <NavItem  url={'/about'} text={'About'} />
                        <NavItem  url={'/tickets'} text={'Tickets'} />
                        <NavItem  url={'/resale'} text={'Resale'} />
                        <NavItem  url={'/advertise'} text={'Advertise'} />
                        <NavItem  url={'/jobs'} text={'Jobs'} />
                    </nav>
                </div>
                <div className="footer-nav">
                    <div className="footer-nav-title">
                        <span>
                            Get RA apps
                        </span>
                    </div>
                    <nav>
                        <NavItem  url={'/ra-guide'} text={'Ra Guide'} />
                        <NavItem  url={'/ra-scanner'} text={'RA Scanner'} />
                    </nav>
                </div>
            </div>
            <div className="footer-promoter">
                <h3>Are you a promoter?</h3>
                <button className="oval-button negative">
                    Submit event
                </button>
            </div>
            <div className="footer-footer">
                <div className="footer-footer-section-one">
                    <div className="footer-footer-section-one-left">
                        <div className="footer-footer-flag">
                            <button><i class="fas fa-flag-usa"></i></button>
                        </div>
                        <div className="footer-footer-location">
                            <span>California</span>
                        </div>
                        <div className="footer-footer-language">
                            <span>Language: </span>
                            <span>English</span>
                        </div>
                    </div>
                    <div className="footer-footer-section-one-right">
                        <NavItem  url={'/privacy'} text={'Privacy'} />
                        <NavItem  url={'/terms'} text={'Terms'} />
                        <NavItem  url={'/cookies'} text={'Cookies'} />
                        <NavItem  url={'/sitemap'} text={'Sitemap'} />
                </div>
                </div>
                <div className="footer-footer-section-two">
                    <div className="footer-footer-section-two-left">
                        <p>C icon + © 2023 Resident Advisor Ltd. All rights reserved. </p>
                    </div>
                    <div className="footer-footer-section-two-right">
                        <div className="footer-share-buttons">
                            <button className="share-button circle-button">
                                <i class="fab fa-facebook"></i>
                            </button>
                            <button className="share-button circle-button">
                                <i class="fab fa-twitter"></i>   
                            </button>
                            <button className="share-button circle-button">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                            <button className="share-button circle-button">
                                <i class="fab fa-spotify"></i>
                            </button>
                            <button className="share-button circle-button">
                                <i class="fas fa-music"></i>
                            </button>
                            <button className="share-button circle-button">
                                <i class="fab fa-soundcloud"></i>
                            </button>
                            <button className="share-button circle-button">
                                <i class="fab fa-youtube"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;