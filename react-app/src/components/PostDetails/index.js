import './PostDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOnePost } from '../../store/post';
import { deletePost, editOnePost} from '../../store/post';
// import { deletepost, editOnepost } from '../../store/post';
import OpenModalButton from '../OpenModalButton';
// import EditpostPage from '../EditpostPage';
import EditPostPage from '../EditPostPage';
const PostDetails = () => {

    const {postId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const post = useSelector(state => state.post.singlePost);
    // const artists = post.artists ? Object.values(post.artists) : [];
    // const attendees = post.attendees ? Object.values(post.attendees) : [];

    useEffect(()=>{
        dispatch(getOnePost(postId))
    },[dispatch, postId])

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(post.id))
        history.push('/')
    }

    if(!post) return null;

    return (
        <div className="post-details-container">
            { sessionUser && post.userId === sessionUser.id &&
                <>
                    <button
                        className='oval-button'
                        onClick={handleDelete}
                    >delete</button>
                    <OpenModalButton
                        buttonText="Edit post"
                        modalComponent={<EditPostPage post={post}/>}
                        className='oval-button'
                    />
                </>
            }
            <div className="post-details">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </div>
            {/* <div className="post-artists">
                <h3 className="post-artists-title">
                    / Lineup
                </h3>
                {
                    artists.map(a => {
                        return (
                            <p>{a}</p>
                        )
                    })
                }
            </div> */}
        </div>
    )
}

export default PostDetails
