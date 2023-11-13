import './SplashPage.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
const SplashPage = () => {
    console.log('------------------------------COMPONENT RENDERS');
    // --state--------------------------------------------------------------
    const events = useSelector(state => state.event.events);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);
    
    const [postId, setPostId] = useState(null);
    let images = allPosts.map(i => {
        if (!i.imageUrl) {
            return null
        } else {
            return i.imageUrl
        }
    });

    console.log('------------------------------1:images:', images);
    // ---randomimage-------------------------------------------------------
    const randomImage = (images) => {
        const validImages = images.filter((image) => {
            const img = new Image();
            img.src = image;
            return img.complete && img.naturalWidth !== 0;
        });
        console.log('------------------------------2:validImages', validImages);
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
            console.log('------------------------------3:randomImage', img);
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

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch]);

    console.log('------------------------------4:allPosts', allPosts);

    if (!posts || !events || !images || !allPosts) return null

    return (
        <NavLink
            className='splash'
            to={postId ? `/posts/${postId}` : '/'}
        >
            <div className="splash-page-container" id="splash-background">
            </div>
        </NavLink>
    )
}

export default SplashPage;
