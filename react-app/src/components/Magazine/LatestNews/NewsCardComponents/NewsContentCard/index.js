import './NewsContentCard.css'
import ImageCard from '../ImageCard'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import PostPreview from '../../../PostPreview'
const NewsContentCard = ({post}) => {

    if(!post) return null;

    return(
        <NavLink
            className="news-content"
            to={`/posts/${post.id}`}
        >
            <ImageCard image={post.imageUrl}/>
            <PostPreview post={post} type={'news'}/>
        </NavLink>
    )

}

export default NewsContentCard
