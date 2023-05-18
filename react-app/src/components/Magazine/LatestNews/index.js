import './LatestNews.css'
import LargeNewsCard from './LargeNewsCard'
import NewsContentArea from './NewsCardComponents/NewsContentArea'
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
            <NewsContentArea posts={posts} />
        </div>
    )

}
export default LatestNews;