import normalize from './normalizer'
const DELETE_TICKET = "tickets/delete"
const BUY_TICKETS = "tickets/buy";
// const EDIT_TICKET = "tickets/edit"
// const LOAD = "tickets/load";
const LOAD_ONE = "tickets/load_one";
// const CREATE_TICKET = "tickets/new";
const LOAD_USER_TICKETS = 'tickets/load_user_tickets';

const loadOne = (data) => ({
    type: LOAD_ONE,
    payload: data,
});
const removeTicket = (ticketId) => ({
    type: DELETE_TICKET,
    ticketId
});
const loadUserTickets = (data) => ({
    type: LOAD_USER_TICKETS,
    payload: data
});
const buyTickets = (data) => ({
    type: BUY_TICKETS,
    payload: data
});
export const getUserTickets = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/tickets/user/${user_id}/tickets`);
    if (response.ok) {
        const data = await response.json();
        console.log('------------------------------data', data);
        dispatch(loadUserTickets(data.events))
        return data
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
};

export const getOneTicket = (id) => async (dispatch) => {
    const response = await fetch(`/api/tickets/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOne(data.ticket))
        return data
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
};

export const deleteTicket = (ticketId) => async (dispatch) => {
    const response = await fetch(`/api/tickets/${ticketId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (response.ok) {
        dispatch(removeTicket(ticketId));
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const purchaseTickets = (eventIds) => async (dispatch) => {
    for(let i = 0; i < eventIds.length; i++){
        let eventId = eventIds[i];
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
    }
}

const initialState = {
    userTickets: {},
    singleTicket: {}
};

const TicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ONE: {
            const newState = {
                ...state,
                singleTicket: {
                    ...state.singleTicket,
                }
            }
            newState.singleTicket = {
                ...action.payload,
            }
            return newState;
        }
        case DELETE_TICKET: {
            const newState = {
                ...state,
                userTickets: { ...state.userTickets }
            }
            delete newState.userTickets[action.ticketId]
            return newState
        }
        case LOAD_USER_TICKETS: {
            const newState = { ...state, userTickets: { ...state.userTickets } }
            newState.userTickets = { ...action.payload }
            return newState;
        }
        default:
            return state;
    }
};
export default TicketReducer;
