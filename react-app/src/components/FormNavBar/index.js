import './FormNavBar.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const FormNavBar = ({pages}) => {
    return (
        <div className='form-nav-bar'>
            <div className="form-nav-wrapper">
                <div className='form-nav-container'>
                    {
                        pages.map(page => {
                            return (
                                <div className="form-nav-item">
                                    <div className='form-nav-item-number'>{pages.indexOf(page) + 1}</div>
                                    <NavLink
                                        className='form-nav-link'
                                        to={`form/${page}`}
                                    >{page}</NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FormNavBar;
