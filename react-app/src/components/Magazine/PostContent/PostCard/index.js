import './PostCard.css'
import PostCardImage from '../PostCardImage'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

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
                    <h1
                        className='regular-post-primary-text'
                    >
                        {post.title}
                    </h1>
            </div>
        </NavLink>
    )

}

export default PostCard
