import './Magazine.css';
import PostContent from './PostContent';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
import SquarePostCardArea from './SquarePostCardArea';
import Series from './Series';
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
            <div className="header">
                <h2>/ Latest Features</h2>
            </div>
            <div className="latest features">
                <PostContent posts={allPosts.slice(0,3)}/>
                <button className="oval-button">
                    view more features
                </button>
            </div>
            <div className="header">
                <h2>/ Latest Film </h2> 
            </div>
            <div className="latest film">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1Ee1TWHoCRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="film-text">
                    <h2>title</h2>
                    <p>description</p>
                </div>
            </div>
            <button className="oval-button">
                view more features
            </button>
            <div className="header">
                <h2>/ RA EXCHANGE</h2>
            </div>
            <div className="ra-exchange">
                <SquarePostCardArea posts={allPosts}/>
            </div>
            <button className="oval-button">
                view more exchanges
            </button>
            <div className="series">
                <Series posts={allPosts}/>
            </div>
        </div>
    )

}

export default Magazine;