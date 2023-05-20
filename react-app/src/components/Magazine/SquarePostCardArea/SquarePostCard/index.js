import './SquarePostCard.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import SquareImageCard from '../SquareImageCard/index'
import PostPreview from '../../PostPreview'
const SquarePostCardArea = ({post}) => {

    if(!post) return null;

    return(
        <NavLink
            className="square-post-content-card"
            to={`/posts/${post.id}`}
        >
            {/* <div className="square-post-content-container"
            > */}
                <SquareImageCard
                    image={post.imageUrl}
                >
                </SquareImageCard>
            {/* </div>   */}
            <div className="square-post-content-container text">
                <PostPreview post={post} type={'square'}/>
            </div>
        </NavLink>
    )

}

export default SquarePostCardArea
