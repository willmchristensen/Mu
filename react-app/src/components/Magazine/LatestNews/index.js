import "./LatestNews.css";
import LargeNewsCard from "./LargeNewsCard";
import NewsContentArea from "./NewsCardComponents/NewsContentArea";
import ContentHeader from "../../ContentHeader";
import PopularNews from "../PopularNews";
const LatestNews = ({ posts }) => {
  if (!posts) return null;

  const rand = Math.floor(Math.random() * posts.length);
  const singlePost = posts[rand];
  return (
    <div className="latest-news-container">
      <div className="latest-popular">
        <div className="latest-news-header">
          <ContentHeader content={"Latest news"} />
          <LargeNewsCard post={singlePost} />
        </div>
        <PopularNews posts={posts.reverse()} />
      </div>
      <NewsContentArea posts={posts} />
    </div>
  );
};
export default LatestNews;
