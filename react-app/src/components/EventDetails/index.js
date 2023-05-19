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
                                <span>{event.date}</span>
                            </div>
                            <div className="event-details-subheader-section">
                                <span>Promoters</span>
                                <button className="subheader-button">
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
                        <span>Genre</span>
                        <button className="square-button">
                            event.genre
                        </button>
                        <div className="lineup-details">
                            <div className="lineup-details-section">
                                <div className="event-description">
                                    <p>{event.description}</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel architecto porro aperiam officiis pariatur cupiditate ducimus nemo? Iste quibusdam explicabo ea ullam quasi culpa rem sed sapiente quia fugiat!
                                    </p>
                                    <p>Cupiditate molestiae, obcaecati beatae unde pariatur atque temporibus inventore eum provident fugit deserunt facilis quae repellendus. Placeat reprehenderit nulla vitae aspernatur eius est debitis voluptas non! Magni placeat itaque molestiae.</p>
                                    <p>Tenetur mollitia odit quia molestiae est id quibusdam eius. Explicabo, veniam eaque consectetur, deleniti dolorum placeat sit sequi similique officia laboriosam nam esse atque dignissimos possimus eum rerum ad unde.</p>
                                    <p>Placeat qui commodi, voluptates veritatis delectus fugit repudiandae cum sed assumenda ad? At aliquam, sit quis consectetur voluptatibus, obcaecati beatae ex rerum similique possimus tempore nobis ab omnis sed ducimus.</p>
                                    <p>Accusamus at rem commodi necessitatibus. Sit, porro nostrum. Praesentium sit dolores, assumenda tempore, sint et architecto earum iure unde delectus corrupti nostrum quibusdam quia nisi laborum esse ratione rerum temporibus.</p>
                                </div>
                                <div className="event-quad-footer">
                                    <div className="event-quad-footer-item">
                                        <span>Event admin</span>
                                        <button className="subheader-button">
                                            Update this event
                                        </button>
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
                                        <button className="subheader-button">Contact the promoter</button>
                                    </div>
                                </div>
                                <div className="about-resale">
                                    <h2>About resale</h2>
                                    <p>
                                        The event is at event.ticketStatus and the  
                                        <span>
                                            <button className="subheader-button">
                                                 resale que is event.resaleStatus.
                                            </button>
                                        </span>
                                    </p>
                                    
                                    <p>
                                        Check back to purchase tickets.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem optio harum voluptatem vero enim.
                                    </p>
                                </div>
                            </div>
                            <div className="event-image-xl">
                                <ExtraLargeImage src={event.imageUrl} />
                            </div>
                        </div>
                        <div className="event-advertisements">
                            {/* TODO: add event host profiles */}
                            <div className="event-advertisements-header">
                                <h3>/ MORE ON {event.title}</h3>
                                <div className="promoter-buttons flex-row">
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