import './Magazine.css';
import PostContent from './PostContent';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
import SquarePostCardArea from './SquarePostCardArea';
import Series from './Series';
import PageHeader from '../PageHeader';

const Magazine = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const allPosts = Object.values(posts);

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    return (
        <div className="magazine-wrapper">
            <PageHeader header={'Magazine'} subheader={'Interviews, films, news and more from the industry.'}/>
            <div className="magazine-container">
                <div className="magazine-page-one">
                    {/* TODO: local resource of every page's header data */}
                    <div className="m-p-section">
                        <LatestNews posts={allPosts}/>
                        <PopularNews posts={allPosts.reverse()}/>
                    </div>
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
        </div>
    )

}

export default Magazine;