import normalize from './normalizer'

const LOAD_ONE = "events/load_one";
const LOAD = "events/load";

const load = (data) => ({
    type: LOAD,
    payload: data,
});
const loadOne = (data) => ({
    type: LOAD_ONE,
    payload: data,
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

const initialState = {
    events: {},
    singleEvent: {}
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                events : {
                    ...action.payload
                }
            }
        }
        case LOAD_ONE: {
            const newState = {
                ...state, 
                singleEvent: {
                    ...state.singleEvent,
                    artists:{...state.singleEvent.artists},
                    attendees:{...state.singleEvent.attendees}
                }
            }
            newState.singleEvent = {
                ...action.payload, 
                artists: { ...action.payload.artists },
                attendees: { ...action.payload.attendees } 
            }
            return newState;
        }
        // case POST_QUESTION: {
        //     const post_newState = { ...state, questions: {...state.questions} };
        //     post_newState.questions[action.details.id] = action.details;
        //     return post_newState;
        // }
        // case EDIT_QUESTION: {
        //     const newState = { ...state, questions: { ...state.questions } };
        //     newState.questions[action.details.id] = action.details
        //     return newState
        // }
        // case DELETE_QUESTION: {
        //     const newState = {...state, questions: { ...state.questions }}
        //     delete newState.questions[action.questionId]
        //     return newState
        // }
        default:
            return state;
    }
};
export default eventReducer;