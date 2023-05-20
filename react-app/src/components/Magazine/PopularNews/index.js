import './PopularNews.css';
import PopNewsCard from './PopNewsCard';
const PopularNews = ({posts}) => {
    return(
        <div className="popular-news-container">
            <h1 className='content-header'>/ Popular News</h1>
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