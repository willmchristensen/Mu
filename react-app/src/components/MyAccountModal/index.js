import './MyAccountModal.css';
import LoginFormModal from '../LoginFormModal';
import OpenModalButton from '../OpenModalButton';
import {NavLink, useHistory} from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { useDispatch } from "react-redux";


const MyAccountModal = ({user, logout}) => {

    const {closeModal} = useModal();
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/register')
        closeModal()
    }

    return (
        <div className="modal-wrapper">
                <button
                    className='x'
                    onClick={closeModal}
                >
                    <i class="fas fa-times"></i>
                </button>
             {
                user ?
                <div className="my-account-user-dropdown">
                    <div className="user-dropdown-container">
                        <NavLink
                            className='lineup-button'
                            to={'/my-account'}
                        >
                            <span className='lineup-button-text'>{user.username}</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'/my-tickets'}
                        >
                            <span className='lineup-button-text'>My Tickets</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'/user/following'}
                        >
                            <span className='lineup-button-text'>Following</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'/inbox'}
                        >
                            <span className='lineup-button-text'>Inbox</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'/account-settings'}
                        >
                            <span className='lineup-button-text'>Account Settings</span>
                        </NavLink>
                        <button
                            onClick={logout}
                            id="profile-dropdown-logout-button"
                        >Log Out</button>
                    </div>
                </div>
                :
                <div className="my-account-modal-container">
                    <div className="log-in">
                        <LoginFormModal title={'Login to your account'}/>
                    </div>
                    <div className="vl"></div>
                    <div className="sign-up">
                        <div className="sign-up-top-row">
                            <h2 className='sign-up-title'>New to Mu? Sign up</h2>
                            {/* <button
                                className='x'
                                onClick={closeModal}
                            >
                                <i class="fas fa-times"></i>
                            </button> */}
                        </div>
                        <button
                            className='oval-button inverse'
                            onClick={handleClick}
                        >
                            Register
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default MyAccountModal;
