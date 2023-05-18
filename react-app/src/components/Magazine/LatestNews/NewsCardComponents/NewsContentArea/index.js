import './NewsContentArea.css';
import NewsContentCard from '../NewsContentCard';

const NewsContentArea = ({posts}) => {
    return (
        <div className="news-content-area-container">
             <div className="news-content-cards-container">
                {
                    posts.map(p => {
                        return (
                            <NewsContentCard post={p}/>
                        )
                    })
                }
                <button className="oval-button">
                    view more news
                </button>
            </div>
        </div>
    )
}

export default NewsContentArea;