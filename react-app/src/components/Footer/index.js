import './Footer.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import NavItem from '../NavBar/NavItem';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <NavLink
                        to='/'
                    >
                        <i class="fas fa-yin-yang"></i>
                    </NavLink>
                </div>
                <div className="footer-nav-section">
                    <div className="footer-nav">
                        <div className="footer-nav-title">
                            <span>
                                Discover
                            </span>
                        </div>
                        <nav className='footer-nav-bar'>
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
                        <nav className='footer-nav-bar'>
                            <NavItem  url={'/ra-guide'} text={'RA Guide'} />
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
                                <button>
                                    <i class="fas fa-flag-usa"></i>
                                </button>
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
                            <nav className="footer-nav-bar">
                                <NavItem  url={'/privacy'} text={'Privacy'} />
                                <NavItem  url={'/terms'} text={'Terms'} />
                                <NavItem  url={'/cookies'} text={'Cookies'} />
                                <NavItem  url={'/sitemap'} text={'Sitemap'} />
                            </nav>
                    </div>
                    </div>
                    <div className="footer-footer-section-two">
                        <div className="footer-footer-section-two-left">
                            <p>© 2023 Will Christensen </p>
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
        </div>
    )
}

export default Footer;
