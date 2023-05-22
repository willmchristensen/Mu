import './ContentCard.css'
import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import PostPreview from '../../../Magazine/PostPreview'

const ContentCard = ({event}) => {
    if(!event) return null;

    return(
        <div className='content'>
            <div className="content-containers">
                <NavLink
                    to={`/events/${event.id}`}
                >
                    <ImageCard
                        image={event.imageUrl}
                    >
                    </ImageCard>
                </NavLink>
                <PostPreview event={event} type={'main-event-content'} />
            </div>
        </div>
    )

}

export default ContentCard
