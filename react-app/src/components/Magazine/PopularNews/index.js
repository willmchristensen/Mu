import './PopularNews.css';
import PopNewsCard from './PopNewsCard';
import ContentHeader from '../../ContentHeader';
const PopularNews = ({posts}) => {
    return(
        <div className="popular-news-container">
            <ContentHeader content={'Popular News'} />
            <div className="popular-news-cards-container">
                {
                    posts.slice(0,5).map(p => {
                        return (
                            <PopNewsCard post={p} number={posts.indexOf(p) + 1}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularNews;