import './SecondaryNavBar.css'
import SecondaryNavItem from './SecondaryNavItem';
import { useSelector } from 'react-redux';

const SecondaryNavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
            <nav className="secondary-nav-container">
                {/* <div className="nav-section-two">
                    <div className="logo">
                        <NavLink
                            to='/'
                        >
                            <i class="fas fa-yin-yang"></i>
                        </NavLink>
                    </div>
                </div> */}
                <div className="nav-section">
                    <SecondaryNavItem
                        url={"/overview"}
                        text={"Overview"}
                    >
                    </SecondaryNavItem>
                    <SecondaryNavItem
                        url={"/events"}
                        text={"events"}
                    >
                    </SecondaryNavItem>
                    <SecondaryNavItem
                        url={"/for-you"}
                        text={"For you"}
                    >
                    </SecondaryNavItem>
                    <SecondaryNavItem
                        url={"/just-announced"}
                        text={"Just announced"}
                    >
                    </SecondaryNavItem>
                </div>
                <div className="nav-section-two">
                    <i class="fas fa-filter"></i>
                    <span className='filter-by-text'>Filter by:</span>
                    <button className="oval-button">
                        Genre
                    </button>
                    <button className="oval-button">
                        Date
                    </button>
                    <button className="oval-button">
                        California
                    </button>
                </div>
            </nav>
    )

}

export default SecondaryNavBar
