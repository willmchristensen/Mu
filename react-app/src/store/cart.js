const ADD_TICKET = 'cart/add';
const LOAD_CART = 'cart/load';
const CLEAR_CART = 'cart/clear';
const REMOVE_TICKET = 'cart/remove';
const addOne = (data) => ({
    type: ADD_TICKET,
    payload: data
});
const load = (data) => ({
    type: LOAD_CART,
    payload: data
});
const deleteCart = () => ({
    type: CLEAR_CART,
});
const removeOne = (data) => ({
    type: REMOVE_TICKET,
    payload: data
});
export const clearCart = () => (dispatch) => {
    dispatch(deleteCart())
    localStorage.removeItem('cartState')
    let cart = localStorage.getItem('cartState');
    console.log(cart)
};
export const addOneTicket = (data) => (dispatch, getState) => {
    console.log('addoneticket')
    const currentState = getState();
    const existingTickets = Object.values(currentState.cart.tickets);
    console.log('existingTickets', existingTickets);
    if (Object.values(existingTickets).length > 0) {
        console.log('cart is not empty')
        const isTicketInCart = existingTickets?.some(ticket => ticket.id === data.id);

        if (!isTicketInCart) {
            dispatch(addOne(data));
            const updatedState = getState().cart;
            saveStateToLocalStorage(updatedState);
        }
    } else {
        console.log('cart is empty')
        dispatch(addOne(data));
        const updatedState = getState().cart;
        saveStateToLocalStorage(updatedState);
    }
};
export const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        console.log('STATE IN SAVE TO LOCAL STORAGE', serializedState);
        localStorage.setItem('cartState', serializedState);
    } catch (error) {
        console.error('Error saving state to local storage:', error);
    }
};
export const loadStateFromLocalStorage = () => (dispatch) => {
    try {
        const serializedState = localStorage.getItem('cartState');
        const parsedState = JSON.parse(serializedState);
        if (parsedState) {
            dispatch(load(parsedState))
        } else {
            dispatch(load({}))
        }
    } catch (error) {
        console.error('Error loading state from local storage:', error);
        return undefined;
    }
};
export const removeItemFromCart = (itemId) => (dispatch) => {
    try {
        const serializedState = localStorage.getItem('cartState');
        const parsedState = JSON.parse(serializedState);
        delete parsedState.tickets[itemId]
        const newSerializedState = JSON.stringify(parsedState);
        localStorage.setItem('cartState', newSerializedState);
        dispatch(removeOne(itemId));
    } catch (error) {
        console.error('Error loading state from local storage:', error);
        return undefined;
    }
};
const initialState = {
    tickets: {}
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case CLEAR_CART: {
            return {
                tickets: {},
            };
        }
        case LOAD_CART: {
            const newState = {
                ...state,
                tickets: {
                    ...state.tickets
                }
            }
            newState.tickets = { ...action.payload.tickets }
            return newState;
        }
        case REMOVE_TICKET: {
            const newState = {
                ...state,
                tickets: {
                    ...state.tickets
                }
            };
            delete newState.tickets[action.payload];
            return newState;
        }
        default:
            return state;
    }
}
export default cartReducer;