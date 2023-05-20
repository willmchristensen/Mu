import './LatestNews.css'
import LargeNewsCard from './LargeNewsCard'
import NewsContentArea from './NewsCardComponents/NewsContentArea'
import ContentHeader from '../../ContentHeader'
const LatestNews = ({posts}) => {

    if(!posts) return null

    const singlePost = posts.slice(3,4)[0];

    return (
        <div className="latest-news-container">
            <ContentHeader content={'Latest news'} />
            <div className="large-news-card-container">
                <LargeNewsCard post={singlePost}/> 
            </div>
            <NewsContentArea posts={posts} />
        </div>
    )

}
export default LatestNews;