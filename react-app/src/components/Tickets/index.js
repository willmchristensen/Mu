import './tickets.css';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink, useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getOneTicket } from '../../store/ticket'; 
import {getOneEvent} from '../../store/event'
const Tickets = () => {
    const { eventId } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOneTicket(eventId))
        dispatch(getOneEvent(eventId))
    },[])
    const ticket = useSelector(state => state.ticket.singleTicket);
    const event = useSelector(state=> state.event.singleEvent);
    const artists = Object.values(event.artists)
    return (
        <div className="tickets-container">
            <h1>tickets</h1>
            <h3>price:</h3>
            <h4>{ticket.price}</h4>
            <h3>event:</h3>
            <span>{event.description}</span>
            <h3>artists: </h3>
            {
                artists.map(a=> {
                    return (
                        <span>{a} </span>
                    )
                })
            }
            <button>buy me</button>
        </div>
    )
}

export default Tickets;