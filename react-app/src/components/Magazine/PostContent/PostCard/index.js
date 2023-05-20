import './PostCard.css'
import PostCardImage from '../PostCardImage'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import PostPreview from '../../PostPreview'
const PostCard = ({post}) => {

    if(!post) return null;

    return(
        <div
            className="post-content-card"
        >
            <NavLink
                className="post-content-container"
                to={`/posts/${post.id}`}
            >
                <PostCardImage
                    image={post.imageUrl}
                >
                </PostCardImage>
            </NavLink>
            <div className="post-content-container text">
                <PostPreview post={post} type={"exchange"}/>
            </div>
        </div>
    )

}

export default PostCard
