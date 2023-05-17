import './SquarePostCardArea.css'
import PostCard from "./SquarePostCard"

const SquarePostCards = ({posts}) => {
    return(
        
        <div className="square-posts-container">
            {
                posts.map(post => {
                    return (
                        <PostCard post={post}/>
                    )
                })
            }
        </div>
    )

}

export default SquarePostCards
