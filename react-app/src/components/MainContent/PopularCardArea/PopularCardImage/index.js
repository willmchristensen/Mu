import './PopularCardImage.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const PopularCardImage = ({event}) => {

    return (
        <NavLink 
            className="popular-image-container"
            to={`/events/${event.id}`}
        >
            <img 
                src={event.imageUrl} 
                alt="basic-alt" 
                className='post-image'
            />
        </NavLink> 
    )

}

export default PopularCardImage