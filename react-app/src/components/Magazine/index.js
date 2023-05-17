import './Magazine.css';
import PostContent from './PostContent';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';

const Magazine = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);

    useEffect(()=>{
        dispatch(getAllPosts())
    },[dispatch])

    return (
        <div className="magazine-container">
            <h1>Magazine</h1>
            <h2>Interviews, films, news and more from the industry.</h2>
            <PostContent posts={allPosts}/>
        </div>
    )

}

export default Magazine;