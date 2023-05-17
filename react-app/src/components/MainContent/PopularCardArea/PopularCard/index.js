import './PopularCard.css'
import PopularCardImage from '../PopularCardImage';
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const PopularCard = ({event}) => {

    if(!event) return null;

    return(
        <NavLink
            className="post-content-card"
            to={`/events/${event.id}`}
        >
            <div className="post-content-container"
            >
                <PopularCardImage image={event.imageUrl}/>
            </div>  
            <div className="post-content-container text">
                    <h1
                        className='post-primary-text'
                    >
                        {event.title}
                    </h1>
            </div>
        </NavLink>
    )

}

export default PopularCard
