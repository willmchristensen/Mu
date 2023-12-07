import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./MainContent.css";
import ContentCard from "./CardComponents/ContentCard";
import { getAllEvents } from "../../store/event";
import PopularCardArea from "./PopularCardArea";
import ContentHeader from "../ContentHeader";

const MainContent = () => {
  // state---------
  const events = useSelector((state) => state.event.events);
  const eventsArray = Object.values(events);
  let recentEvents = eventsArray.slice(0, 4);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  // guard clauses---
  if (!eventsArray.length) return null;

  // date------
  let date = new Date();
  const options = { weekday: "short", day: "numeric", month: "long" };
  let today = date.toLocaleDateString("en-US", options);
  let [weekday, month, day] = today.split(" ");
  let formattedDate = `${weekday} ${day} ${month}`;

  return (
    <div className="main-content-container">
      <div className="location-container">
        <div className="location-header">
          <h1 className="events-location-header">Location</h1>
        </div>
      </div>
      {/* <SecondaryNavBar/> */}
      <div className="popular-container">
        <div className="main-content">
          <div className="popular-header-container">
            <div className="popular-content-header">
              <ContentHeader content={"Popular"} />
            </div>
            <div className="popular-content-button">
              {sessionUser && (
                <NavLink className="oval-button-area" to={"/events/new"}>
                  create event
                </NavLink>
              )}
            </div>
          </div>
          <div className="popular-content">
            <PopularCardArea events={recentEvents} />
          </div>
          {/* TODO:
                        sections of content separated by days??! dont have much data tho
                        make a slash similar to RA
                    */}
          <div className="main-content-area">
            <div className="content-header">
              <h2>{formattedDate}</h2>
            </div>
            {eventsArray.map((event) => {
              return <ContentCard event={event}></ContentCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
