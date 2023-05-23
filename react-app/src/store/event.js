import normalize from './normalizer'

const LOAD_ONE = "events/load_one";
const LOAD = "events/load";
const POST_EVENT = "events/new";
const DELETE_EVENT = "events/delete"
const EDIT_EVENT = "events/edit"
const editEvent = (details) => ({
    type: EDIT_EVENT,
    details
})

const load = (data) => ({
    type: LOAD,
    payload: data,
});
const loadOne = (data) => ({
    type: LOAD_ONE,
    payload: data,
});
const postEvent = (details) => ({
    type: POST_EVENT,
    payload: details
});
const removeEvent = (eventId) => ({
    type: DELETE_EVENT,
    eventId
});
export const getAllEvents = () => async (dispatch) => {
    const response = await fetch("/api/events")
    if (response.ok) {
        const data = await response.json();
        const allEvents = normalize(data.events);
        dispatch(load(allEvents))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const getOneEvent = (id) => async (dispatch) => {
    const response = await fetch(`/api/events/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOne(data.event))
        return data
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const createEvent = (details) => async (dispatch) => {
    // console.log('--------------details in CREATE EVENT THUNK--------------', details)
    const response = await fetch("/api/events/new", {
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
        // console.log('RESPONSE OK: this is response.json:', data)
        dispatch(postEvent(data.event));
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

export const editOneEvent = (payload) => async (dispatch) => {
    // console.log('payload in Edit Thunk', payload);
    const { item, eventId } = payload;
    const response = await fetch(`/api/events/${eventId}`, {
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
        dispatch(editEvent(data.event));
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

export const deleteEvent = (eventId) => async (dispatch) => {
    const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (response.ok) {
        dispatch(removeEvent(eventId));
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

const initialState = {
    events: {},
    singleEvent: {}
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                events: {
                    ...action.payload
                }
            }
        }
        case LOAD_ONE: {
            const newState = { ...state }
            newState.singleEvent = {
                ...action.payload,
                artists: { ...action.payload.artists },
                attendees: { ...action.payload.attendees }
            }
            return newState;
        }
        case POST_EVENT: {
            // console.log('------------------------------ACTION', action);
            const newState = { ...state, events: { ...action.payload } };
            newState.events[action.payload.id] = action.payload;
            return newState;
        }
        case EDIT_EVENT: {
            const newState = { ...state, events: { ...state.events } };
            newState.events[action.details.id] = action.details
            return newState
        }
        case DELETE_EVENT: {
            const newState = {
                ...state,
                events: { ...state.events }
            }
            delete newState.events[action.eventId]
            return newState
        }
        default:
            return state;
    }
};
export default eventReducer;
