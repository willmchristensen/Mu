import './TicketDetails.css';
import { useSelector,useDispatch } from 'react-redux';
import { getAllEvents, getOneEvent } from '../../../store/event';
import { useEffect } from 'react';

function TicketDetails({formattedDate,ticket}){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllEvents())
  },[dispatch])
  const events = useSelector(state => state.event.events);
  const eventsArray = Object.values(events);
  const event = eventsArray.find(e => e.id === ticket.event_id);
  if(!ticket || !event) return null;
  return(
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
    )
}
export default TicketDetails;