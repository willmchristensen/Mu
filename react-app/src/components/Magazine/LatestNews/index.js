import './LatestNews.css'
import NewsContentCard from './NewsCardComponents/NewsContentCard'
import LargeNewsCard from './LargeNewsCard'

const LatestNews = ({posts}) => {

    if(!posts) return null

    const singlePost = posts.slice(0,1)[0];
    console.log('------------------------------sin',singlePost);

    return (
        <div className="latest-news-container">
            <div className="large-news-card-container">
                <h1>/ Latest News</h1>
                <LargeNewsCard post={singlePost}/> 
            </div>
            <div className="news-cards-container">
                {
                    posts.map(p => {
                        return (
                            <NewsContentCard post={p}/>
                        )
                    })
                }
            </div>
        </div>
    )

}
export default LatestNews;