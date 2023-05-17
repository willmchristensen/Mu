import './Magazine.css';
import PostContent from './PostContent';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
const Magazine = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);

    useEffect(()=>{
        dispatch(getAllPosts())
    },[dispatch])

    return (
        <div className="magazine-container">
            <div className="magazine-page-one">
                <h1>Magazine</h1>
                <h2>Interviews, films, news and more from the industry.</h2>
                <LatestNews posts={allPosts}/>
                <PopularNews posts={allPosts.reverse()}/>
            </div>
            <div className="latest-features">
                <h2>/ Latest Features</h2>
                <PostContent posts={allPosts}/>
            </div>
        </div>
    )

}

export default Magazine;