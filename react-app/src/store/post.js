import normalize from './normalizer'

// const LOAD_ONE = "posts/load_one";
const LOAD = "posts/load";

const load = (data) => ({
    type: LOAD,
    payload: data,
});
// const loadOne = (data) => ({
//     type: LOAD_ONE,
//     payload: data,
// });

export const getAllPosts = () => async (dispatch) => {
    const response = await fetch("/api/posts")
    if (response.ok) {
        const data = await response.json();
        const allPosts = normalize(data.posts);
        dispatch(load(allPosts))
        return response
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

// export const getOneEvent = (id) => async (dispatch) => {
//     const response = await fetch(`/api/posts/${id}`)
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(loadOne(data.event))
//         return data
//     } else {
//         return [
//             "An error occurred. Please try again."
//         ];
//     }
// }

const initialState = {
    posts: {},
    singlePost: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                posts : {
                    ...action.payload
                }
            }
        }
        // case LOAD_ONE: {
        //     const newState = {
        //         ...state, 
        //         singleEvent: {
        //             ...state.singleEvent,
        //             artists:{...state.singleEvent.artists},
        //             attendees:{...state.singleEvent.attendees}
        //         }
        //     }
        //     newState.singleEvent = {
        //         ...action.payload, 
        //         artists: { ...action.payload.artists },
        //         attendees: { ...action.payload.attendees } 
        //     }
        //     return newState;
        // }
        default:
            return state;
    }
};
export default postReducer;