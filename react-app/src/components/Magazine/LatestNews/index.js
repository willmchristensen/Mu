import './LatestNews.css'
import LargeNewsCard from './LargeNewsCard'
import NewsContentArea from './NewsCardComponents/NewsContentArea'
const LatestNews = ({posts}) => {

    if(!posts) return null

    const singlePost = posts.slice(3,4)[0];

    return (
        <div className="latest-news-container">
            <h1 className='content-header'>
                <span className="slash">
                    /
                </span> 
                Latest News
            </h1>
            <div className="large-news-card-container">
                <LargeNewsCard post={singlePost}/> 
            </div>
            <NewsContentArea posts={posts} />
        </div>
    )

}
export default LatestNews;