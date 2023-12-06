import './MusicDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOnePost } from '../../store/post';
import { deletePost} from '../../store/post';
import ShareButtons from '../ShareButtons';
import BandcampPlayer from '../BandcampPlayer';


const MusicDetails = () => {

    const {musicId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const post = useSelector(state => state.post.singlePost);

    useEffect(()=>{
        dispatch(getOnePost(musicId))
    },[dispatch, musicId])
    
    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(post.id))
        history.push('/music')
    }

    return (
        <>
            <div className="music-details-container">
                <div className="music-details-content-container">
                    {/* <ShareButtons /> */}
                    <div className="music-details">
                        <h1>{post?.title}</h1>
                        <p>{post?.description}</p>
                        {post?.musicUrl &&  <BandcampPlayer url={post.musicUrl}/> }
                        <div className="music-details-description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero unde architecto voluptatem amet ipsam nulla aliquid optio consequatur deleniti? Iste esse consequatur iure commodi nulla amet natus cumque quam error dolores sit deserunt doloribus repudiandae itaque quibusdam minus iusto id repellat ipsam odio voluptas, impedit modi doloremque. Alias, magnam fugiat!</p>
                        </div>
                    </div>
                    <div className="music-owner-buttons">
                        { sessionUser && post?.userId === sessionUser?.id &&
                            <>
                                <button
                                    className='oval-button'
                                    onClick={handleDelete}
                                >delete</button>
                                <NavLink
                                    className='oval-button'
                                    to={`/music/${post?.id}/edit`}
                                >
                                    Edit music
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicDetails;
