import "./PostContent.css";
import PostCard from "./PostCard";

const PostContent = ({ posts }) => {
  if (!posts) return null;
  return (
    <div className="posts-container">
      {posts.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
};

export default PostContent;
