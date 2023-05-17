import './ContentCard.css'
import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const ContentCard = ({event}) => {

    return(
        <NavLink
            className="content"
            to={`/events/${event.id}`}
        >
            <div className="content-container"
            >
                <ImageCard
                    image={event.imageUrl}
                >
                </ImageCard>
            </div>  
            <div className="content-container text">
                    <h1
                        className='primary-text'
                    >
                        {event.description}
                    </h1>
                    <p className='location'>
                        <i class="fas fa-map-pin"></i>
                        {event.location}
                    </p>
                {/* <p
                    className='support-text'
                >
                        {seed.question.details}
                </p> */}
            </div>
        </NavLink>
    )

}

export default ContentCard
