import './NewsContentArea.css';
import NewsContentCard from '../NewsContentCard';
import AreaButton from '../../../AreaButton';
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
            </div>
            <AreaButton area={'news'} />
        </div>
    )
}

export default NewsContentArea;