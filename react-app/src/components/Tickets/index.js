import './tickets.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { loadStateFromLocalStorage, clearCart } from '../../store/cart';
import { purchaseTickets } from '../../store/ticket';
import LightLoginFormModal from '../LightLoginFormModal';
import SignUpForm from '../SignUpForm';
import TicketDetails from './TicketDetails';

const Tickets = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const ticket = useSelector(state => state.ticket.singleTicket);
  const user = useSelector(state => state.session.user);
  const cart = useSelector(state => state.cart.tickets);
  const cartItemsArray = Object.values(cart);
  const eventIds = cartItemsArray.map(t => t.event_id);
  const totalPrice = cartItemsArray.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  const today = new Date();
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options).toUpperCase();

  const handlePurchase = async () => {
    dispatch(purchaseTickets(eventIds))
    dispatch(clearCart())
    history.push('/success');
  };
  useEffect(() => {
    dispatch(loadStateFromLocalStorage())
  }, [dispatch])

  return (
    <div className="shop-details-container">
      {
        !user &&
        <div className="shop-details-new-user-container">
          <LightLoginFormModal ticket={ticket} />
          <SignUpForm />
        </div>
      }
      <div className="tickets-container">
        <div className="tickets-wrapper">
          <div className="basket-header">
            <h2 className='basket'>Basket</h2>
          </div>
          {
            cartItemsArray.map(ticket => {
              return (
                <TicketDetails ticket={ticket} formattedDate={formattedDate} />
              )
            })
          }
          <span className='ticket-tier-details-two'>Total USD <span>${totalPrice}</span></span>
          {user &&
            <button className="oval-button red" onClick={() => handlePurchase(eventIds)}>buy me</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Tickets;