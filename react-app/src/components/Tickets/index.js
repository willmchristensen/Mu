import './tickets.css';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getOneTicket } from '../../store/ticket'; 
import {getOneEvent} from '../../store/event'
import { addOneTicket, loadTickets, clearCart } from '../../store/cart';
import LightLoginFormModal from '../LightLoginFormModal';
import SignUpForm from '../SignUpForm';
import usePrevious from './usePrevious';
const Tickets = () => {
    const [remove, setRemove] = useState(false);
    const { eventId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const ticket = useSelector(state => state.ticket.singleTicket);
    const event = useSelector(state=> state.event.singleEvent);
    const tickets = useSelector(state=> state.cart.tickets);
    const user = useSelector(state => state.session.user);
    const previousUser = usePrevious(user);
    const today = new Date();
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).toUpperCase();
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
            history.push('/success');
          } else {
            console.error('Failed to purchase ticket');
          }
        } catch (error) {
          console.error('Error purchasing ticket', error);
        }
    };
    const handleAddToCart = (ticket) => {
      console.log('------------------------------ticket', ticket);
      dispatch(addOneTicket(ticket))
    }
    const handleRemove = () => {
      if(remove){
        setRemove(false)
      }else{
        setRemove(true)
      }
    }
    useEffect(()=>{
      dispatch(getOneTicket(eventId))
      dispatch(getOneEvent(eventId))
      dispatch(loadTickets());
    },[eventId])

    // FIXME: cart clears with change page
    // useEffect(() => {
    //   if(user !== previousUser){
    //     localStorage.clear();
    //     dispatch(clearCart());
    //   }
    // },[user, previousUser]);

    return (
        <div className="shop-details-container">
          {
            !user && 
            <div className="shop-details-new-user-container">
              <LightLoginFormModal />
              <SignUpForm />
            </div>
          }
          <div className="tickets-container">
            <div className="tickets-wrapper">
              <div className="basket-header">
                <h2 className='basket'>Basket</h2>
                {/* FIXME: EDIT CART: currently not-allowed */}
                <button onClick={handleRemove}                   className="oval-button-edit"
                >Remove / Add Ticket</button>
              </div>
              {
                !remove &&
                <div className="ticket-details">
                  <div className="ticket-details-top-row">
                    <h4 className='today-formatted'>{formattedDate}</h4>
                    <div className="ticket-details-buttons">
                    </div>
                  </div>
                  <span className='ticket-title'><h2>{event.title}</h2></span>
                  {/* TODO: pin icon */}
                  <div className="ticket-title-two-container">
                    <span className='ticket-title-two'>{event.location}</span>
                  </div>
                  <span className='ticket-tier-details-one'>1 x 1st Release <span>${ticket.price}</span></span>
                </div>
              }
                <span className='ticket-tier-details-two'>Total USD <span>${!remove ? ticket.price : 0}</span></span>
              {user && !remove && 
                <button className="oval-button red" onClick={handlePurchase}>buy me</button>
              }
              {/* <button onClick={e => handleAddToCart(ticket)}>add to cart</button> */}
            </div>
          </div>
        </div>
    )
}

export default Tickets;