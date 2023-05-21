import './SquarePostCard.css'
import SquareImageCard from '../SquareImageCard/index'
import PostPreview from '../../PostPreview'
const SquarePostCardArea = ({post}) => {

    if(!post) return null;

    return(
        <div
            className="square-post-content-card"
        >
            <SquareImageCard
                post={post}
            >
            </SquareImageCard>
            <div className="square-post-content-container text">
                <PostPreview post={post} type={'square'}/>
            </div>
        </div>
    )

}

export default SquarePostCardArea
