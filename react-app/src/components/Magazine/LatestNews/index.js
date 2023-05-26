import './LatestNews.css'
import LargeNewsCard from './LargeNewsCard'
import NewsContentArea from './NewsCardComponents/NewsContentArea'
import ContentHeader from '../../ContentHeader'
import PopularNews from '../PopularNews'
const LatestNews = ({posts}) => {

    if(!posts) return null

    const singlePost = posts.slice(3,4)[0];

    return (
        <div className="latest-news-container">
            <div className="latest-popular">
                <div className="latest-news-header">
                    <ContentHeader content={'Latest news'} />
                    <LargeNewsCard post={singlePost}/>
                </div>
                <PopularNews posts={posts.reverse()}/>
            </div>
            <NewsContentArea posts={posts} />
        </div>
    )

}
export default LatestNews;
