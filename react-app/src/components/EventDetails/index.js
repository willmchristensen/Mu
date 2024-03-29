import "./EventDetails.css";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneEvent } from "../../store/event";
import { deleteEvent } from "../../store/event";
import { getOneTicket } from "../../store/ticket";
import { addOneTicket } from "../../store/cart";
import PageHeader from "../PageHeader";
import ExtraLargeImage from "./ExtraLargeImage";
import ContentHeader from "../ContentHeader";

const EventDetails = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.event.singleEvent);
  const ticket = useSelector((state) => state.ticket.singleTicket);
  const options = { day: "numeric", month: "long", year: "numeric" };
  let date = new Date(event?.createdAt)?.toLocaleDateString("en-US", options);
  let [month, day, year] = date.split(" ");
  let formattedDate = `${day} ${month} ${year}`;
  const time = event?.createdAt?.substring(11, 16);
  const artists = event?.artists ? Object.values(event.artists) : [];
  const attendees = event?.attendees ? Object.values(event.attendees) : [];

  const handlePurchase = (ticket) => {
    console.log("handle purchase is dispatching addOneTicket", ticket);
    dispatch(addOneTicket(ticket));
  };

  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getOneTicket(eventId));
  }, [dispatch, eventId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteEvent(event.id));
    history.push("/events");
  };

  if (!event) return null;

  return (
    <div className="single-event-container">
      <PageHeader header={event.title} subheader={event.description} />
      <div className="event-details-container">
        <div className="event-details">
          {sessionUser && event.ownerId === sessionUser.id && (
            <div className="event-buttons-container">
              <button className="oval-button" onClick={handleDelete}>
                Delete
              </button>
              <NavLink className="oval-button" to={`/events/${event.id}/edit`}>
                Edit
              </NavLink>
            </div>
          )}
          <div className="location">
            <i class="fas fa-flag-usa"></i>
            <span>Location</span>
            <i class="fas fa-circle"></i>
            <span>Events</span>
          </div>
          <div className="event-details-titles">
            <h2>{event.title}:</h2>
            <h2>{event.description}</h2>
          </div>
          <div className="event-details-subheader">
            <div className="event-details-subheader-section">
              <span>Venue</span>
              <button className="subheader-button">
                TBA - {event.location}
              </button>
            </div>
            <div className="event-details-subheader-section">
              <span>Venue</span>
              <button className="subheader-button">
                {/* {event.location.split(',')[0]} */}
                {event.location}
              </button>
            </div>
            <div className="event-details-subheader-section">
              <span>Date</span>
              <button className="subheader-button">{formattedDate}</button>
              <span>
                {time} - {time}
              </span>
            </div>
            <div className="event-details-subheader-section">
              <span>Promoters</span>
              <button className="subheader-button">event.promoters</button>
            </div>
            <div className="event-details-subheader-section">
              <div className="event-attendees">
                <p>Interested</p>
                <div className="attendees-length-container">
                  <span className="attendees-length">{attendees.length}</span>
                  <div className="interested">
                    <button className="oval-button-not-allowed-red">
                      <i class="fas fa-user-plus"></i>
                      Interested
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tickets">
          <div className="ticket-price-tiers">
            <ContentHeader content={"RA TICKETS"} />
            <span className="ticket-info">
              <span>
                Ticket including RA fee
                <span className="errors">(?)</span>
              </span>
              <span>USD</span>
            </span>
            <div className="ticket-price-tier">
              <span className="ticket-price-tier-info">1st release</span>
              <span className="ticket-price-tier-info">${ticket.price}</span>
            </div>
          </div>
          <div className="ticket-buttons">
            <NavLink
              className="oval-button red"
              to={`/shop/cart`}
              onClick={() => handlePurchase(ticket)}
            >
              <i class="fas fa-ticket-alt"></i>
              <span className="buy-tickets">Buy Tickets</span>
            </NavLink>
          </div>
        </div>
        <div className="lineup">
          <div className="lineup-header">
            <ContentHeader content={"LINEUP"} />
          </div>
          <div className="lineup-artists">
            {artists.map((a) => {
              return (
                <NavLink className="lineup-button" to={`/events/${event.id}`}>
                  <span className="lineup-button-text">{a}</span>
                </NavLink>
              );
            })}
          </div>
          <span>Genre</span>
          <button className="square-button">event.genre</button>
          <div className="lineup-details">
            <div className="lineup-details-section">
              <div className="event-description">
                <p>{event.description}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  vel architecto porro aperiam officiis pariatur cupiditate
                  ducimus nemo? Iste quibusdam explicabo ea ullam quasi culpa
                  rem sed sapiente quia fugiat!
                </p>
                <p>
                  Cupiditate molestiae, obcaecati beatae unde pariatur atque
                  temporibus inventore eum provident fugit deserunt facilis quae
                  repellendus. Placeat reprehenderit nulla vitae aspernatur eius
                  est debitis voluptas non! Magni placeat itaque molestiae.
                </p>
              </div>
              <div className="event-quad-footer">
                <div className="event-quad-footer-item">
                  <span>Event admin</span>
                  {sessionUser && event.ownerId === sessionUser.id && (
                    <>
                      <NavLink
                        className="subheader-button"
                        to={`/events/${event.id}/edit`}
                      >
                        Update this event
                      </NavLink>
                    </>
                  )}
                </div>
                <div className="event-quad-footer-item">
                  <span>Last updated</span>
                  <span>2 months ago</span>
                </div>
                <div className="event-quad-footer-item">
                  <span>Cost</span>
                  <span>30-50</span>
                </div>
                <div className="event-quad-footer-item">
                  <span>Min. age</span>
                  <span>21+</span>
                </div>
                <div className="event-quad-footer-item">
                  <span>Do you have a question about the event?</span>
                  <a className="subheader-button">Contact the promoter</a>
                </div>
              </div>
              <div className="about-resale">
                <h2>About resale</h2>
                <p>
                  The event is at event.ticketStatus and the
                  <span>
                    <a className="subheader-button">
                      resale que is event.resaleStatus.
                    </a>
                  </span>
                </p>

                <p>Check back to purchase tickets.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  rem optio harum voluptatem vero enim.
                </p>
              </div>
            </div>
            <div className="event-image-xl">
              <ExtraLargeImage src={event.imageUrl} />
            </div>
          </div>
          <div className="event-advertisements">
            <div className="event-advertisements-header">
              <h3>/ MORE ON {event.title}</h3>
              <div className="promoter-buttons flex-row">
                <button className="oval-button-not-allowed-red">follow</button>
                <button className="oval-button-not-allowed-red">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
