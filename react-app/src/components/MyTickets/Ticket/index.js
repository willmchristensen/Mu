import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react";
import { useDispatch } from "react-redux";
import { deleteTicket,getUserTickets } from "../../../store/ticket";
function Ticket({ event, userId }) {
    // const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const handleDelete = async (eventId) => {
        await dispatch(deleteTicket(eventId))
        await dispatch(getUserTickets(userId))
    }
    return (
        <>
            <NavLink
                class='big-title'
                to={`events/${event.id}`}
            >
                <h1>{event.title}</h1>
            </NavLink >
            <button onClick={() => handleDelete(event.id)}>Delete ticket</button>
        </>
    )
}
export default Ticket;