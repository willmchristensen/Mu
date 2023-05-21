import './SplashPage.css'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllEvents } from '../../store/event';

const SplashPage = () => {
    // --state--------------------------------------------------------------
    const events = useSelector(state => state.event.events);
    const eventsArray = Object.values(events);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);
    let images = allPosts.map(i => {
        if(!i.imageUrl){
            return null
        }else{
            return i.imageUrl
        }
    });
    // ---randomimage-------------------------------------------------------
    const randomImage = (images) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        if(!images[randomIndex]) { 
            return null
        }else {
            return images[randomIndex];
        }
    };
    useEffect(() => {
        let intervalId;
        const updateBackgroundImage = () => {
            const img = randomImage(images);
            document.getElementById('splash-background').style.backgroundImage = `url(${img})`;
        };
        updateBackgroundImage()
        intervalId = setInterval(updateBackgroundImage, 4000);
        return () => clearInterval(intervalId);
    }, [images]);
    useEffect(()=>{
        dispatch(getAllPosts())
        dispatch(getAllEvents())
    },[]);
    
    if(!posts || !events) return null

    return (
        <div 
            className="splash-page-container" 
            id="splash-background"
        >
            <h1 className="splash-header">bruh  </h1>
        </div>
    )
}

export default SplashPage;