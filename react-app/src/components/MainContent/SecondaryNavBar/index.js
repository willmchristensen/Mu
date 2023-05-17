import './SecondaryNavBar.css'
import NavItem from './NavItem'
import { useSelector } from 'react-redux';

const SecondaryNavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
        <div className="secondary-nav-container white-background">
            <nav className="nav">
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
                    <NavItem
                        url={"/overview"}
                        text={"Overview"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/events"}
                        text={"events"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/for-you"}
                        text={"For you"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/just-announced"}
                        text={"Just announced"}
                    >
                    </NavItem>
                </div>
                <div className="nav-section-two">
                    <i class="fas fa-filter"></i>
                    Filter by:
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
        </div>
    )

}

export default SecondaryNavBar
