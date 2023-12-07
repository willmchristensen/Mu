import "./NewsContentCard.css";
// import ImageCard from '../ImageCard'
import NewsImageCard from "../NewsImageCard";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import PostPreview from "../../../PostPreview";
const NewsContentCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="news-content">
      <NavLink to={`/posts/${post.id}`}>
        <NewsImageCard image={post.imageUrl} />
      </NavLink>
      <PostPreview post={post} type={"news"} />
    </div>
  );
};

export default NewsContentCard;
