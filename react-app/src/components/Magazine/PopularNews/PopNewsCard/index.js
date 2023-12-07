import "./PopNewsCard.css";
import { NavLink } from "react-router-dom";

const PopNewsCard = ({ post, number }) => {
  if (!post) return null;
  return (
    <div className="popular-news-card">
      <div className="pop-news-container">
        <div className="number">{number}</div>
        <div className="popular-news-content">
          <NavLink className="pop-news" to={`/posts/${post.id}`}>
            {post.title}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PopNewsCard;
