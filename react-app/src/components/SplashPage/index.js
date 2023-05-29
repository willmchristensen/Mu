import './SplashPage.css'
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllEvents } from '../../store/event';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const SplashPage = () => {
    // --state--------------------------------------------------------------
    const events = useSelector(state => state.event.events);
    const eventsArray = Object.values(events);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);
    const [postId, setPostId] = useState(null);

    let images = allPosts.map(i => {
        if(!i.imageUrl){
            return null
        }else{
            return i.imageUrl
        }
    });
    // ---randomimage-------------------------------------------------------
    const randomImage = (images) => {
        const validImages = images.filter((image) => {
            const img = new Image();
            img.src = image;
            return img.complete && img.naturalWidth !== 0;
        });
        if (validImages.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * validImages.length);
        return validImages[randomIndex];
    };

    useEffect(() => {
        let intervalId;
        const updateBackgroundImage = () => {
            const img = randomImage(images);
            document.getElementById('splash-background').style.backgroundImage = `url(${img})`;
            const post = allPosts.find((p) => p.imageUrl === img);
            if (post) {
                setPostId(post.id);
            } else {
                setPostId(null);
            }
        };
        updateBackgroundImage();
        intervalId = setInterval(updateBackgroundImage, 15000);
        return () => clearInterval(intervalId);
    }, [images]);

    // ---------------------------------------------------------------
    useEffect(()=>{
        dispatch(getAllPosts())
        dispatch(getAllEvents())
    },[]);

    if(!posts || !events) return null

    return (
         <NavLink
            className='splash'
            to={postId ? `/posts/${postId}/information` : '/'}
        >
            <div className="splash-page-container" id="splash-background">
                <h1 className="splash-header"></h1>
            </div>
        </NavLink>
    )
}

export default SplashPage;
