import './NavBar.css'
import NavItem from './NavItem'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OpenModalButton from '../OpenModalButton';
import ProfileButton from './ProfileButton'

const NavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
        <div className="nav-container white-background">
            <nav className="nav">
                <div className="nav-section-two">
                    <div className="logo">
                        <NavLink
                            to='/'
                        >
                            <i class="fas fa-yin-yang"></i>
                        </NavLink>
                    </div>
                </div>
                <div className="nav-section">
                    <NavItem
                        url={"/events"}
                        text={"Events"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/music"}
                        text={"Music"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/magazine"}
                        text={"Magazine"}
                    >
                    </NavItem>
                    <NavItem
                        url={"/festivals"}
                        text={"Festivals"}
                    >
                    </NavItem>
                </div>
                <div className="nav-section-two">
                    {isLoaded && (
                        <ProfileButton user={sessionUser} />
                    )}
                </div>
            </nav>
        </div>
    )

}

export default NavBar
