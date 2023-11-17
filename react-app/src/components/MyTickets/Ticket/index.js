import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react";
import { useDispatch } from "react-redux";
import { deleteTicket,getUserTickets } from "../../../store/ticket";
import './Ticket.css'
function Ticket({ event, userId }) {
    // const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const handleDelete = async (eventId) => {
        await dispatch(deleteTicket(eventId))
        await dispatch(getUserTickets(userId))
    }
    return (
        <div className="ticket-container">
            <div className="my-ticket-title-container">
                <NavLink
                    class='big-title'
                    to={`events/${event.id}`}
                >
                    <h3>{event.title}</h3>
                </NavLink >
            </div>
            <div className="button-container">
                <button 
                    className="oval-button-area" 
                    onClick={() => handleDelete(event.id)}>
                    Delete ticket
                </button>
            </div>
        </div>
    )
}
export default Ticket;