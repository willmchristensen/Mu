import './SecondaryNavBar.css'
import SecondaryNavItem from './SecondaryNavItem';
import { useSelector } from 'react-redux';

const SecondaryNavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
            <nav className="secondary-nav-container">
                <div className="secondary-nav-wrapper">
                    <div className="secondary-nav-section-one">

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
                    <div className="secondary-nav-section-two">
                        <div className="slash-bruh">
                        </div>
                        <i class="fas fa-filter"></i>
                        <span className='filter-by-text'>Filter by:</span>
                        <div className="oval-button-container">
                            <button className="oval-button-not-allowed-red">
                                Genre
                            </button>
                        </div>
                        <div className="oval-button-container">
                            <button className="oval-button-not-allowed-red">
                                Date
                            </button>
                        </div>
                        <div className="oval-button-container">
                            <button className="oval-button-not-allowed-red">
                                California
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
    )

}

export default SecondaryNavBar
