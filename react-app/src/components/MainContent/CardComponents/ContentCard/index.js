import "./ContentCard.css";
import ImageCard from "../ImageCard";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import EventPreview from "../../EventPreview";

const ContentCard = ({ event }) => {
  if (!event) return null;

  return (
    <div className="content">
      <div className="content-containers">
        <NavLink to={`/events/${event.id}`} className="event-image-link">
          <ImageCard image={event.imageUrl} />
        </NavLink>
        <EventPreview event={event} type={"main-event-content"} />
      </div>
    </div>
  );
};

export default ContentCard;
