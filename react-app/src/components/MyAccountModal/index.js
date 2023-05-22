import './MyAccountModal.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import {NavLink} from 'react-router-dom';
import { useModal } from '../../context/Modal';

const MyAccountModal = () => {

    const {closeModal} = useModal();

    return (
        <div className="modal-wrapper">
            <div className="x">
                <button
                    onClick={closeModal}
                >
                    x
                </button>
            </div>
            <div className="my-account-modal-container">
                <div className="log-in">
                    <LoginFormModal></LoginFormModal>
                </div>
                <div className="vl"></div>
                <div className="sign-up">
                    <div className="sign-up-top-row">
                        <h2 className='sign-up-title title'>New to Mu? Sign up</h2>
                    </div>
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
