import './EventDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOneEvent } from '../../store/event';
import { deleteEvent, editOneEvent } from '../../store/event';
import OpenModalButton from '../OpenModalButton';
import EditEventPage from '../EditEventPage';
import PageHeader from '../PageHeader';
import ShareButtons from '../../ShareButtons';
import ExtraLargeImage from './ExtraLargeImage';
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

    // useEffect(() => {
        
    // }, [])

    // <button
    // onClick={handleEdit}
    // >
    //     edit
    // </button>

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
                                <button className="event-details-subheader-button">
                                    TBA - {event.location}
                                </button>
                            </div>
                            <div className="event-details-subheader-section">
                                <span>Venue</span>
                                <button className="event-details-subheader-button">
                                    {/* {event.location.split(',')[0]} */}
                                    {event.location}
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
                    </div>
                    <div className="event-artists">
                        {/* <h3 className="event-artists-title">
                            / Lineup
                        </h3>
                        {
                            artists.map(a => {
                                return (
                                    <p>{a}</p>
                                )
                            })
                        } */}
                    </div>
                    {/* TODO: ticket pricing components */}
                    <div className="tickets">
                        <p>tickets availability text</p>
                        <div className="ticket-price-tiers">
                            <div className="ticket-price-tier">
                                <span>
                                    Early bird
                                </span>
                                <span>
                                    $1.11
                                </span>
                            </div>
                            <div className="ticket-price-tier">
                                <span>
                                    1st release
                                </span>
                                <span>
                                    $11.11
                                </span>
                            </div>
                            <div className="ticket-price-tier">
                                <span>
                                    2nd release
                                </span>
                                <span>
                                    $22.22
                                </span>
                            </div>
                            <div className="ticket-price-tier">
                                <span>
                                    3rd release
                                </span>
                                <span>
                                    $33.33  
                                </span>
                            </div>
                            <div className="ticket-price-tier">
                                <span>
                                    4th release
                                </span>
                                <span>
                                    $44.44
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lineup">
                        <div className="lineup-header">
                            <div className="header">
                                / LINEUP
                            </div>
                            <div className="event-share">
                                <ShareButtons orientation={'row'} />
                            </div>
                        </div>
                        <div className="lineup-artists">
                            {
                                artists.map(a => {
                                    return (
                                        <h1>{a}</h1>
                                    )
                                })
                            }
                        </div>
                        {/* TODO: genres */}
                        <button className="square-button">
                            event.genre
                        </button>
                        <div className="event-image-xl">
                            <ExtraLargeImage src={event.imageUrl} />
                        </div>
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