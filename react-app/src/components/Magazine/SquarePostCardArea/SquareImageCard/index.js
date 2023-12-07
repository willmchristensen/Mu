import "./SquareImageCard.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SquareImageCard = ({ post }) => {
  const handleImageError = (e) => {
    e.target.src =
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  };
  return (
    <NavLink className="square-post-image-container" to={`/posts/${post.id}`}>
      <img src={post.imageUrl} alt="basic-alt" onError={handleImageError} />
    </NavLink>
  );
};

export default SquareImageCard;
