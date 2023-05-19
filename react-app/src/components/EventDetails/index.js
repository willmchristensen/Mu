import './EventDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOneEvent } from '../../store/event';
import { deleteEvent, editOneEvent } from '../../store/event';
import OpenModalButton from '../OpenModalButton';
import EditEventPage from '../EditEventPage';
import PageHeader from '../PageHeader';
const EventDetails = () => {

    const {eventId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const event = useSelector(state => state.event.singleEvent);
    const artists = event.artists ? Object.values(event.artists) : [];
    const attendees = event.attendees ? Object.values(event.attendees) : [];

    useEffect(()=>{
        dispatch(getOneEvent(eventId))
    },[dispatch, eventId])

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deleteEvent(event.id))
        history.push('/')
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        await dispatch(editOneEvent(event.id))
        history.push('/')
    }
    <button
    onClick={handleEdit}
    >
        edit
    </button>

    if(!event) return null;

    return (
            <div className="single-event-container">
                <PageHeader header={event.title} subheader={event.description} />
                <div className="event-details-container">
                    {/* conditional rendering of delete button */}
                    {/* TODO: event date and time  */}
                    <div className="event-details">
                        {
                            sessionUser && event.ownerId === sessionUser.id && 
                            <>
                                <button
                                    className='oval-button'
                                    onClick={handleDelete}
                                >delete</button>
                                <OpenModalButton
                                    buttonText="Edit Event"
                                    modalComponent={<EditEventPage event={event}/>}
                                    className='oval-button'
                                />
                            </>
                        }
                        <div className="event-details-subheader">
                            <div className="event-details-subheader-section">
                                <span>Venue</span>
                                <button className="event-details-subheader-button">
                                    event.venue/club 
                                </button>
                            </div>
                            <div className="event-details-subheader-section">
                                <span>Venue</span>
                                <button className="event-details-subheader-button">
                                    event.venue/club 
                                </button>
                            </div>
                            <div className="event-details-subheader-section">
                                <span>{event.date}</span>
                            </div>
                            <div className="event-details-subheader-section">
                                <span>Promoters</span>
                                <button className="event-details-subheader-button">
                                    event.promoters
                                </button>
                            </div>
                            <div className="event-details-subheader-section">
                                <div className="event-attendees">
                                    <p>attending</p>
                                    {attendees.length}
                                </div>
                                <div className="interested">
                                    <button className="oval-button">
                                        interested
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <p>{event.location}</p>
                        <p>promoters</p>
                    </div>
                    <div className="event-artists">
                        <h3 className="event-artists-title">
                            / Lineup
                        </h3>
                        {
                            artists.map(a => {
                                return (
                                    <p>{a}</p>
                                )
                            })
                        }
                    </div>
                    {/* TODO: ticket pricing components */}
                    <div className="tickets">
                        <p>tickets availability text</p>
                        <div className="ticket-pricing-tiers">
                            <p>pricing tiers go here</p>
                        </div>
                        <div className="event-share">
                            <p>insert share from post details</p>
                        </div>
                    </div>
                    <div className="lineup">
                        <h1>insert header</h1>
                        <h2>insert event title</h2>
                        <p>genre</p>
                        <button>insert dynamic genre tag</button>
                        <div className="event-description">
                            <p>{event.description}</p>
                        </div>
                        <div className="event-quad-footer">
                            <div>
                                Event admin
                            </div>
                            <div>
                                Last updated
                            </div>
                            <div>
                                Cost
                            </div>
                            <div>
                                Min. age
                            </div>
                            <div>
                                Do you have a question about the event?
                                <button>Contact the promoter</button>
                            </div>
                        </div>
                        <div className="about-resale">
                            <p>
                                The event is at 'insert status' and the resale que is 'insert status'
                            </p>
                            <p>
                                Check back to purchase tickets.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem optio harum voluptatem vero enim.
                            </p>
                        </div>
                        <div className="event-advertisements">
                            <div className="event-advertisements-header">
                                <h1>/ MORE ON 'insert promoter details'</h1>
                                <div className="promoter-buttons">
                                    <button className="oval-button">
                                        follow
                                    </button>
                                    <button className="oval-button">
                                        view profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
    )
}

export default EventDetails