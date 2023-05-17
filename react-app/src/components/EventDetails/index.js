import './EventDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOneEvent } from '../../store/event';
import { deleteEvent, editOneEvent } from '../../store/event';
import OpenModalButton from '../OpenModalButton';
import EditEventPage from '../EditEventPage';
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
        <div className="event-details-container">
            {
                event.ownerId === sessionUser.id && 
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
            <div className="event-details">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
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
        </div> 
    )
}

export default EventDetails