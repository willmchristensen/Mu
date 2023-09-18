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
    const ticket = useSelector(state => state.ticket.singleTicket);
    const event = useSelector(state=> state.event.singleEvent);
    const handlePurchase = async () => {
        try {
            const response = await fetch(`/api/tickets/buy/${eventId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            if (response.ok) {
              console.log('Ticket purchased successfully');
              // Optionally, you can perform any additional actions here.
            } else {
              console.error('Failed to purchase ticket');
              // Handle the error as needed.
            }
          } catch (error) {
            console.error('Error purchasing ticket', error);
            // Handle network or other errors.
          }
    };
    useEffect(()=>{
        dispatch(getOneTicket(eventId))
        dispatch(getOneEvent(eventId))
    },[])
    return (
        <div className="tickets-container">
            <h1>tickets</h1>
            <h3>price:</h3>
            <h4>{ticket.price}</h4>
            <h3>event:</h3>
            <span>{event.description}</span>
            <button onClick={handlePurchase}>buy me</button>
        </div>
    )
}

export default Tickets;