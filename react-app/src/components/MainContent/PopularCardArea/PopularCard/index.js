import "./PopularCard.css";
import PopularCardImage from "../PopularCardImage";
import EventPreview from "../../EventPreview";

const PopularCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="popular-content-card" to={`/events/${event.id}`}>
      <PopularCardImage event={event} />
      <div className="post-content-container text">
        <EventPreview event={event} type={"popular"} />
      </div>
    </div>
  );
};

export default PopularCard;
