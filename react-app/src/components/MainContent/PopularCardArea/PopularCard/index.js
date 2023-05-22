import './PopularCard.css'
import PopularCardImage from '../PopularCardImage';
import PostPreview from '../../../Magazine/PostPreview';
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const PopularCard = ({event}) => {

    if(!event) return null;

    return(
        <div
            className="post-content-card"
            to={`/events/${event.id}`}
        >
            <div className="post-content-container"
            >
                <PopularCardImage event={event} />
            </div>  
            <div className="post-content-container text">
                <PostPreview event={event} type={'popular'} />
                    {/* <h1
                        className='post-primary-text'
                    >
                        {event.title}
                    </h1> */}
            </div>
        </div>
    )

}

export default PopularCard
