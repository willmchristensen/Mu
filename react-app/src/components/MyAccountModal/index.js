import './MyAccountModal.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import {NavLink, useHistory} from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { useDispatch } from "react-redux";
import {login} from '../../store/session'


const MyAccountModal = ({user, logout}) => {

    const {closeModal} = useModal();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/register')
        closeModal()
    }
    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password')).then(closeModal())
      }
    return (
        <div className="modal-wrapper">
             {
                user ? 
                    <div className="my-account-user-dropdown">
                            <button
                                className='x'
                                onClick={closeModal}
                            >
                                <i class="fas fa-times"></i>
                            </button>
                    <div className="user-dropdown-container">
                        <NavLink
                            className='lineup-button'
                            to={'my-tickets'}
                        >
                            <span className='lineup-button-text'>{user.username}</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'my-tickets'}
                        >
                            <span className='lineup-button-text'>My Tickets</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'user/following'}
                        >
                            <span className='lineup-button-text'>Following</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'my-tickets'}
                        >
                            <span className='lineup-button-text'>Inbox</span>
                        </NavLink>
                        <NavLink
                            className='lineup-button'
                            to={'my-tickets'}
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
                    <LoginFormModal></LoginFormModal>
                </div>
                <button onClick={demoLogin}>Demo User</button>
                <div className="vl"></div>
                <div className="sign-up">
                    <div className="sign-up-top-row">
                        <h2 className='sign-up-title'>New to Mu? Sign up</h2>
                        <button
                            className='x'
                            onClick={closeModal}
                        >
                            <i class="fas fa-times"></i>
                        </button>
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
