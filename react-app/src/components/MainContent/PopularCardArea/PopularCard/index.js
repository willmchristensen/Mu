import './PopularCard.css'
import PopularCardImage from '../PopularCardImage';
import EventPreview from '../../EventPreview';
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const PopularCard = ({event}) => {

    if(!event) return null;

    return(
        <div
            className="post-content-card"
            to={`/events/${event.id}`}
        >
            <PopularCardImage event={event} />
            <div className="post-content-container text">
            <EventPreview event={event} type={'popular'} /> 
            </div>
        </div>
    )

}

export default PopularCard
