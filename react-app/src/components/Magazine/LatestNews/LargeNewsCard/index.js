import './LargeNewsCard.css';
import LargeImageCard from './LargeImageCard';

const LargeNewsCard = ({post}) => {
    if(!post) return null;
    return (
        <div className="large-news-card">
            <LargeImageCard image={post.imageUrl}/>
            <h1>{post.title}</h1>
        </div>
    )
}

export default LargeNewsCard;