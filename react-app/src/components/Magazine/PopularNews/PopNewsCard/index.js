import './PopNewsCard.css';

const PopNewsCard = ({post, number}) => {
    return (
        <div className="popular-news-card">
            <div className="number">
                {number}
            </div>
            <div className="popular-news-content">
                {post.title}
            </div>
        </div>
    )
}

export default PopNewsCard;