import './NewsContentCard.css'
import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const NewsContentCard = ({post}) => {

    if(!post) return null;

    return(
        <NavLink
            className="content"
            to={`/posts/${post.id}`}
        >
            <div className="content-container"
            >
                <ImageCard
                    image={post.imageUrl}
                >
                </ImageCard>
            </div>  
            <div className="content-container text">
                    <h1
                        className='primary-text'
                    >
                        {post.title}
                    </h1>
                {/* <p
                    className='support-text'
                >
                        {seed.question.details}
                </p> */}
            </div>
        </NavLink>
    )

}

export default NewsContentCard
