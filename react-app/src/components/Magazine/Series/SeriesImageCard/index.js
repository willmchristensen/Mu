import "./SeriesImageCard.css";

const SeriesImageCard = ({ image }) => {
  const handleImageError = (e) => {
    e.target.src =
      "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  };
  return (
    <div className="series-image-container">
      <img src={image} alt="basic-alt" onError={handleImageError} />
    </div>
  );
};

export default SeriesImageCard;
