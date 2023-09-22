const ADD_TICKET = 'cart/add';
const LOAD_TICKET = 'cart/load'
const addOne = (data) => ({
    type:ADD_TICKET,
    payload: data
});
const load = (data) => ({
    type: LOAD_TICKET,
    payload: data
});
export const addOneTicket = (data) => (dispatch, getState) => {
    dispatch(addOne(data));
    const updatedState = getState().cart;
    saveStateToLocalStorage(updatedState);
};
export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (error) {
        console.error('Error saving state to local storage:', error);
    }
};
export const loadTickets = () => async (dispatch) =>{
    const storedState = loadStateFromLocalStorage();
    if(storedState) { 
        dispatch(load(storedState))
    }
};

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error('Error loading state from local storage:', error);
        return undefined;
    }
};
const initialState = {
    tickets: {}
}
const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TICKET: {
            const newState = {
                ...state,
                tickets: {
                    ...state.tickets
                }
            }
            newState.tickets[action.payload.id] = action.payload;
            return newState
        }
        case LOAD_TICKET:
            return action.payload;
        default: 
            return state;
    }
}
export default cartReducer;