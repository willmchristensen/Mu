import "./PopularCardArea.css";
import PopularCard from "./PopularCard";

const PopularCardArea = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return <PopularCard event={event} />;
      })}
    </>
  );
};

export default PopularCardArea;
