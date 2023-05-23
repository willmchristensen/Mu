import './NavBar.css'
import NavItem from './NavItem'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import OpenModalButton from '../OpenModalButton';
const NavBar = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    return(
        <div className="nav-container white-background">
            <nav className="nav">
                <div className="nav-section">
                    <div className="logo">
                        <NavLink
                            to='/'
                        >
                            <i class="fas fa-yin-yang"></i>
                        </NavLink>
                    </div>
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
                    {/* <NavItem
                        url={"/festivals"}
                        text={"Festivals"}
                    >
                    </NavItem> */}
                    <i class="fas fa-search"></i>
                    {/* TODO: SEARCH */}
                    {/* <OpenModalButton
                        modalComponent={}
                        buttonText={}
                        onButtonClick={}
                        onModalClose={}
                    /> */}

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
