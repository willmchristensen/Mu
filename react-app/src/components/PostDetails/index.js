import './PostDetails.css'
import {useParams, useHistory, NavLink} from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getOnePost, getAllPosts } from '../../store/post';
import { deletePost, editOnePost} from '../../store/post';
// import { deletepost, editOnepost } from '../../store/post';
import OpenModalButton from '../OpenModalButton';
// import EditpostPage from '../EditpostPage';
import EditPostPage from '../EditPostPage';
import PageHeader from '../PageHeader';
import LargeImageCard from '../Magazine/LatestNews/LargeNewsCard/LargeImageCard';
import NewsContentCard from '../Magazine/LatestNews/NewsCardComponents/NewsContentCard';
import PopularNews from '../Magazine/PopularNews';
import ShareButtons from '../ShareButtons';
// import Footer from '../Footer';


const PostDetails = () => {

    const {postId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const post = useSelector(state => state.post.singlePost);
    const posts = useSelector(state=> state.post.posts);
    const allPosts = Object.values(posts)
    // const artists = post.artists ? Object.values(post.artists) : [];
    // const attendees = post.attendees ? Object.values(post.attendees) : [];

    useEffect(()=>{
        dispatch(getOnePost(postId))
        dispatch(getAllPosts())
    },[dispatch, postId])

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(post.id))
        history.push('/magazine')
    }
    const firstTwo = (post?.title?.split(' ')[0] + ' ' + post?.title?.split(' ')[1]);
    const first = (post?.title?.split(' ')[0]);
    const moreThanTwoWords = (post?.title?.split(' ')[0] && post?.title?.split(' ')[1]);
    const postTitle =  moreThanTwoWords ?  firstTwo : first;
    if(!post ||!post.title) return null;

    return (
        <>
            <PageHeader header={postTitle} subheader={post.description} />
            <div className="post-details-container">
                <div className="post-details-content-container">
                    <ShareButtons />
                    <div className="post-details">
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <LargeImageCard post={post} />
                        <div className="post-details-description">
                            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet molestias, tempora ad saepe doloremque accusamus perferendis animi dicta cum! Delectus quisquam veniam beatae officia labore ipsum. Quis, asperiores exercitationem?</span><span>Voluptatibus illum corporis natus veniam. Eum, eius! Sit perspiciatis nulla, quibusdam, laboriosam, eaque dignissimos unde recusandae similique rem eligendi eos cumque doloremque reprehenderit itaque ullam praesentium voluptates veritatis. Quis, non?</span><span>Odio quae illum, numquam error earum eveniet quam iure inventore, et ipsum a porro eos repudiandae veniam cumque? Odio ullam maiores dolorem voluptate distinctio perspiciatis earum recusandae sunt expedita! Autem.</span><span>Ducimus recusandae, fugiat omnis voluptatem eum eveniet deserunt veritatis perspiciatis repellendus facere provident repellat aperiam. Iste quaerat molestias rerum deleniti sit aliquid, nisi consequuntur maxime magni aperiam earum vero architecto!</span><span>Dignissimos in esse velit non obcaecati voluptas, explicabo quod consequatur quia ratione molestiae sunt labore facilis dolorem laboriosam corporis iste iure odio officiis tenetur deserunt illo? Magni totam eos at?</span><span>Blanditiis assumenda tenetur molestiae quia ab quisquam labore tempora consequatur debitis, voluptatum recusandae sequi, nobis, a perferendis quas accusamus nesciunt. Fugit magni beatae doloremque accusamus dolorum. Quae officia praesentium molestias.</span><span>Porro, dicta! Aliquid voluptatem cumque eum rem quia vel aspernatur dignissimos nostrum tempore impedit vitae deleniti modi quo vero a corrupti, sequi dicta. Perspiciatis numquam quo consequatur veritatis aperiam. Nemo.</span><span>Sint, quod repellat? Sed quidem voluptatum, excepturi voluptatem deleniti molestiae alias corrupti fugiat laudantium harum reprehenderit quis eveniet est cumque vel quae minus dolorem minima hic ut animi facere mollitia?</span><span>Nesciunt iusto amet hic, praesentium inventore quis omnis doloremque iste quos ea tempore vero delectus quisquam blanditiis. Repellendus deserunt dolore consequuntur nobis, officiis aliquid officia itaque cumque doloribus! Dicta, obcaecati.</span></p>
                        </div>
                    </div>
                    <div className="post-owner-buttons">
                        { sessionUser && post.userId === sessionUser.id &&
                            <>
                                <button
                                    className='oval-button'
                                    onClick={handleDelete}
                                >delete</button>
                                <NavLink
                                    className='oval-button'
                                    to={`/posts/${post.id}/edit`}
                                >
                                    Edit post
                                </NavLink>
                                {/* <OpenModalButton
                                    buttonText="Edit post"
                                    modalComponent={<EditPostPage post={post}/>}
                                /> */}
                            </>
                        }
                    </div>
                </div>
                <div className="post-details-news-container">
                    {
                        allPosts.map(p => {
                            return (
                                <NewsContentCard post={p} />
                            )
                        })
                    }
                </div>
                <PopularNews posts={allPosts}/>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default PostDetails
