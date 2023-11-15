import './Footer.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import FooterPortraitButtons from './FooterButtons';
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
                <div className="main-footer-container">
                    <div className="footer-content">
                        <h2 className="footer-title">
                            Will
                        </h2>
                        <span className='footer-subtitle'>
                            Fullstack Developer
                        </span>
                    </div>
                    <div className="footer-content">
                        <FooterPortraitButtons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
