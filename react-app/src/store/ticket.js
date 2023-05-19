import normalize from './normalizer'
const DELETE_TICKET = "tickets/delete"

const EDIT_TICKET = "tickets/edit"
const editTicket = (details) => ({
    type: EDIT_TICKET,
    details
})
export const editOneTicket = (payload) => async (dispatch) => {
    console.log('payload in Edit Thunk', payload);
    const { item, ticketId } = payload;
    const response = await fetch(`/api/tickets/${ticketId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            item
        ),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(editTicket(data.ticket));
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

const LOAD = "tickets/load";
const LOAD_ONE = "tickets/load_one";
const CREATE_TICKET = "tickets/new";

const load = (data) => ({
    type: LOAD,
    payload: data,
});

const loadOne = (data) => ({
    type: LOAD_ONE,
    payload: data,
});

const makeTicket = (details) => ({
    type: CREATE_TICKET,
    payload: details
});

const removeTicket = (ticketId) => ({
    type: DELETE_TICKET,
    ticketId
});

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



export const getAllTickets = () => async (dispatch) => {
    const response = await fetch("/api/tickets")
    if (response.ok) {
        const data = await response.json();
        const alltickets = normalize(data.tickets);
        dispatch(load(alltickets))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

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
}

export const createTicket = (details) => async (dispatch) => {
    console.log('--------------details in CREATE Ticket THUNK--------------', details)
    const response = await fetch("/api/tickets/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: details
        body: JSON.stringify(
            details
        ),
    });
    if (response.ok) {
        const data = await response.json();
        console.log('RESPONSE OK: this is response.json:', data)
        dispatch(makeTicket(data.ticket));
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

const initialState = {
    tickets: {},
    singleTicket: {}
};

const TicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                tickets: {
                    ...action.payload
                }
            }
        }
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
        case CREATE_TICKET: {
            const newState = { ...state, tickets: { ...action.payload } };
            newState.tickets[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_TICKET: {
            const newState = {
                ...state,
                tickets: { ...state.tickets }
            }
            delete newState.tickets[action.ticketId]
            return newState
        }
        case EDIT_TICKET: {
            const newState = { ...state, tickets: { ...state.tickets } };
            newState.tickets[action.details.id] = action.details
            return newState
        }
        default:
            return state;
    }
};
export default TicketReducer;
