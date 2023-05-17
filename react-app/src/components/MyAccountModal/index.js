import './MyAccountModal.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import {NavLink} from 'react-router-dom';

const MyAccountModal = () => {

    return (
        <div className="modal-wrapper">
            <div className="my-account-modal-container">
                <div className="x">
                    <button>
                        x
                    </button>
                </div>
                <div className="log-in">
                    <LoginFormModal></LoginFormModal>
                </div>
                <div className="vl"></div>
                <div className="sign-up">
                    <h2 className='sign-up-title title'>New to Mu? Sign up</h2>
                    <NavLink
                        to='/register'
                    >
                        breh
                    </NavLink>
                </div>
            </div>
        </div>
    )

}

export default MyAccountModal;