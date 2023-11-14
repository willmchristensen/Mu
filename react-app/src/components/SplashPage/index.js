import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './SplashPage.css';

const SplashPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    const allPosts = Object.values(posts);
    const[postId,setPostId] = useState(null);

    const [forceRerender, setForceRerender] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllPosts());
            updateBackgroundImage();
        };

        fetchData();

        const intervalId = setInterval(() => {
            updateBackgroundImage();
        }, 10000);

        return () => clearInterval(intervalId);
    }, [dispatch, forceRerender]);

    const updateBackgroundImage = () => {
        const images = allPosts
            .filter((post) => post.imageUrl)
            .map((post) => post.imageUrl);

        const validImages = images.filter((image) => {
            const img = new Image();
            img.src = image;
            return img.complete && img.naturalWidth !== 0;
        });

        if (validImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * validImages.length);
            const randomImage = validImages[randomIndex];

            document.getElementById('splash-background').style.backgroundImage = `url(${randomImage})`;

            const postWithImage = allPosts.find((post) => post.imageUrl === randomImage);
            if (postWithImage) {
                setPostId(postWithImage.id)
            } else {
                setPostId(null)
            }
        } else {
            setForceRerender((prev) => !prev);
        }
    };

    return (
        <NavLink
            className="splash"
            to={postId ? `/posts/${postId}` : '/'}
        >
            <div className="splash-page-container" id="splash-background">
            </div>
        </NavLink>
    );
};

export default SplashPage;
