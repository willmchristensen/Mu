import './MyAccountModal.css';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import OpenModalButton from '../OpenModalButton';
import {NavLink, useHistory} from 'react-router-dom';
import { useModal } from '../../context/Modal';

const MyAccountModal = () => {

    const {closeModal} = useModal();
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/register')
        closeModal()
    }

    return (
        <div className="modal-wrapper">
            <div className="my-account-modal-container">
                <div className="log-in">
                    <LoginFormModal></LoginFormModal>
                </div>
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
        </div>
    )

}

export default MyAccountModal;
