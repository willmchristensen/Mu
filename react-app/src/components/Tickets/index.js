import './tickets.css';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink, useHistory, useParams, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getOneTicket } from '../../store/ticket'; 
import {getOneEvent} from '../../store/event'
import { addOneTicket, loadTickets, clearCart } from '../../store/cart';
const Tickets = () => {
    const { eventId } = useParams();
    const dispatch = useDispatch();
    const ticket = useSelector(state => state.ticket.singleTicket);
    const event = useSelector(state=> state.event.singleEvent);
    const tickets = useSelector(state=> state.cart.tickets);
    const user = useSelector(state => state.session.user);
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
          } else {
            console.error('Failed to purchase ticket');
          }
        } catch (error) {
          console.error('Error purchasing ticket', error);
        }
    };
    const handleAddToCart = (ticket) => {
      dispatch(addOneTicket(ticket))
    }
    useEffect(()=>{
      dispatch(getOneTicket(eventId))
      dispatch(getOneEvent(eventId))
      dispatch(loadTickets());
    },[eventId])

    // FIXME: cart does not clear with user change
    useEffect(() => {
      localStorage.clear();
      dispatch(clearCart());
    },[user])

    return (
        <div className="tickets-container">
            <h1>tickets</h1>
            <h3>price:</h3>
            <h4>{ticket.price}</h4>
            <h3>event:</h3>
            <span>{event.description}</span>
            <button onClick={handlePurchase}>buy me</button>
            <button onClick={e => handleAddToCart(ticket)}>add to cart</button>
            <div className="cart">
              <h1>cart</h1>
              {tickets && Object.values(tickets).map((t) => (
                    <div key={t.id}>
                        <p>{t.title}</p>
                        <p>{t.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tickets;