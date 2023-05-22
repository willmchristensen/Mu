import './ContentCard.css'
import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import PostPreview from '../../../Magazine/PostPreview'

const ContentCard = ({event}) => {
    // console.log(event)
    if(!event) return null;

    return(
        <div className='content'>
            <div className="content-containers">
                <div className="content-container"
                >
                    <NavLink
                        to={`/events/${event.id}`}
                    >
                        <ImageCard
                            image={event.imageUrl}
                        >
                        </ImageCard>
                    </NavLink>
                </div>  
                <div className="content-container text">
                        <PostPreview event={event} type={'main-event-content'} />
                        {/* <h2 className="content-primary-text">
                            {event.title}
                        </h2>
                        <p
                            className='primary-text'
                        >
                            {event.description}
                        </p>
                        <p className='location'>
                            <i class="fas fa-map-pin"></i>
                            {event.location}
                        </p> */}
                    {/* <p
                        className='support-text'
                    >
                            {seed.question.details}
                    </p> */}
                </div>
            </div>
        </div>
    )

}

export default ContentCard
