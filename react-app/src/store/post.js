import normalize from './normalizer'
const DELETE_POST = "posts/delete"

const EDIT_POST = "posts/edit"
const editPost = (details) => ({
    type: EDIT_POST,
    details
})
export const editOnePost = (payload) => async (dispatch) => {
    // console.log('payload in Edit Thunk', payload);
    const { item, postId } = payload;
    const response = await fetch(`/api/posts/${postId}`, {
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
        dispatch(editPost(data.post));
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

const LOAD = "posts/load";
const LOAD_ONE = "posts/load_one";
const CREATE_POST = "posts/new";

const load = (data) => ({
    type: LOAD,
    payload: data,
});

const loadOne = (data) => ({
    type: LOAD_ONE,
    payload: data,
});

const makePost = (details) => ({
    type: CREATE_POST,
    payload: details
});

const removePost = (postId) => ({
    type: DELETE_POST,
    postId
});

export const deletePost = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (response.ok) {
        dispatch(removePost(postId));
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}



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

export const getOnePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(loadOne(data.post))
        return data
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

export const createPost = (details) => async (dispatch) => {
    // console.log('--------------details in CREATE Post THUNK--------------', details)
    const response = await fetch("/api/posts/new", {
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
        dispatch(makePost(data.post));
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }else { 
            return data
        }
    } else {
        return [
            "An error occurred. Please try again."
        ];
    }
}

const initialState = {
    posts: {},
    singlePost: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                posts: {
                    ...action.payload
                }
            }
        }
        case LOAD_ONE: {
            const newState = {
                ...state,
                singlePost: {
                    ...state.singlePost,
                }
            }
            newState.singlePost = {
                ...action.payload,
            }
            return newState;
        }
        case CREATE_POST: {
            const newState = { ...state, posts: { ...action.payload } };
            newState.posts[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_POST: {
            const newState = {
                ...state,
                posts: { ...state.posts }
            }
            delete newState.posts[action.postId]
            return newState
        }
        case EDIT_POST: {
            const newState = { ...state, posts: { ...state.posts } };
            newState.posts[action.details.id] = action.details
            return newState
        }
        default:
            return state;
    }
};
export default postReducer;
