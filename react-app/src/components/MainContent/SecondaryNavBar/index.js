import './SecondaryNavBar.css'
import SecondaryNavItem from './SecondaryNavItem';
import { useSelector } from 'react-redux';

const SecondaryNavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
            <nav className="secondary-nav-container">
                <div className="secondary-nav-wrapper">
                    <div className="secondary-nav-section">
                        
                            <SecondaryNavItem
                                url={"/overview"}
                                text={"Overview"}
                            />
                            <SecondaryNavItem
                                url={"/events"}
                                text={"Events"}
                            />
                            <SecondaryNavItem
                                url={"/for-you"}
                                text={"For you"}
                            />
                            <SecondaryNavItem
                                url={"/just-announced"}
                                text={"Just announced"}
                            />
                    </div>
                    <div className="secondary-nav-section">
                        <div className="slash-bruh">
                        </div>
                        <i class="fas fa-filter"></i>
                        <span className='filter-by-text'>Filter by:</span>
                        <div className="oval-button-container">
                            <button className="oval-button">
                                Genre
                            </button>
                        </div>
                        <div className="oval-button-container">
                            <button className="oval-button">
                                Date
                            </button>
                        </div>
                        <div className="oval-button-container">
                            <button className="oval-button">
                                California
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    )

}

export default SecondaryNavBar
