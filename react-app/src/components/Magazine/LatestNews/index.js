import './LatestNews.css'
import NewsContentCard from './NewsCardComponents/NewsContentCard'
import LargeNewsCard from './LargeNewsCard'

const LatestNews = ({posts}) => {

    if(!posts) return null

    const singlePost = posts.slice(3,4)[0];
    console.log('------------------------------sin',singlePost);

    return (
        <div className="latest-news-container">
            <div className="large-news-card-container">
                <h1>/ Latest News</h1>
                <LargeNewsCard post={singlePost}/> 
            </div>
            <div className="-container">
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
export default LatestNews;