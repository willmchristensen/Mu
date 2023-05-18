import './LargeNewsCard.css';
import LargeImageCard from './LargeImageCard';
import PostPreview from '../../PostPreview';
const LargeNewsCard = ({post}) => {
    if(!post) return null;
    return (
        <div className="large-news-card">
            <LargeImageCard image={post.imageUrl}/>
            <PostPreview post={post} type={'large'}/>
        </div>
    )
}

export default LargeNewsCard;