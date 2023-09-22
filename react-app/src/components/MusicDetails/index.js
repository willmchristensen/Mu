import './MusicDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getAllPosts } from '../../store/post';
import { deletePost} from '../../store/post';
// import EditpostPage from '../EditpostPage';
import ShareButtons from '../ShareButtons';
import BandcampPlayer from '../BandcampPlayer';
// import Footer from '../Footer';


const MusicDetails = () => {

    const {musicId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // const post = useSelector(state => state.post.singlePost);
    const posts = useSelector(state=> state.post.posts);
    const allPosts = Object.values(posts)
    const post = allPosts.find(p => p.id === parseInt(musicId))
    console.log('------------------------------ POST IN MUSIC DETAILS', post, musicId);
    // FIXME: grabbing correct music id but not grabbing correct post with specified id
    useEffect(()=>{
        // dispatch(getOnePost(musicId))
        dispatch(getAllPosts())
    },[dispatch, musicId])
    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(post.id))
        history.push('/music')
    }
    // TODO: music slice of title etc
    // const firstTwo = (post?.title?.split(' ')[0] + ' ' + post?.title?.split(' ')[1]);
    // const first = (post?.title?.split(' ')[0]);
    // const moreThanTwoWords = (post?.title?.split(' ')[0] && post?.title?.split(' ')[1]);
    // const postTitle =  moreThanTwoWords ?  firstTwo : first;

    // if(!post ||!post.title) return null;

    return (
        <>
        {/* TODO: change to music title for pageheader */}
            {/* <PageHeader header={postTitle} subheader={post.description} /> */}
            <div className="music-details-container">
                <div className="music-details-content-container">
                    <ShareButtons />
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
                                {/* <OpenModalButton
                                    buttonText="Edit post"
                                    modalComponent={<EditPostPage post={post}/>}
                                /> */}
                            </>
                        }
                    </div>
                </div>
                {/* TODO: change to all music */}
                <div className="music-details-news-container">
                    {/* {
                        allPosts.map(p => {
                            return (
                                <NewsContentCard post={p} />
                            )
                        })
                    } */}
                </div>
                {/* TODO: additional content that music details offers */}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default MusicDetails;
