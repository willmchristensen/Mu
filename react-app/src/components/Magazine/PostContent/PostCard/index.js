import './PostCard.css'
import PostCardImage from '../PostCardImage'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import PostPreview from '../../PostPreview'
const PostCard = ({post}) => {

    if(!post) return null;

    return(
        <NavLink
            className="post-content-card"
            to={`/posts/${post.id}`}
        >
            <div className="post-content-container"
            >
                <PostCardImage
                    image={post.imageUrl}
                >
                </PostCardImage>
            </div>
            <div className="post-content-container text">
                <PostPreview post={post} type={"exchange"}/>
            </div>
        </NavLink>
    )

}

export default PostCard
