import './EventDetails.css'
import {useParams} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOneEvent } from '../../store/event';

const EventDetails = () => {

    const {eventId} = useParams();
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.singleEvent);
    const artists = event.artists ? Object.values(event.artists) : [];
    const attendees = event.attendees ? Object.values(event.attendees) : [];

    useEffect(()=>{
        dispatch(getOneEvent(eventId))
    },[dispatch, eventId])

    // let date = new Date(event.date);
    // console.log(event)
    // const options = { weekday: 'short', day: 'numeric', month: 'long' }
    // let today = date.toLocaleDateString('en-US', options);
    // let [weekday, month, day] = today.split(' ');
    // let formattedDate = `${weekday} ${day} ${month}`;
    if(!event) return null;

    return (
        <div className="event-details-container">
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