import './Magazine.css';
import PostContent from './PostContent';
import {useEffect} from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts } from '../../store/post';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
import SquarePostCardArea from './SquarePostCardArea';
import Series from './Series';
import PageHeader from '../PageHeader';
import AreaButton from './AreaButton';
import ContentHeader from '../ContentHeader';

const Magazine = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const sessionUser = useSelector(state => state.session.user);
    const allPosts = Object.values(posts);

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    if(!posts || !allPosts.length) return null;

    return (
        <>
            <PageHeader header={'Magazine'} subheader={'Interviews, films, news and more from the industry.'}/>
            <div className="magazine-wrapper">
                {sessionUser &&
                    <NavLink
                        className='oval-button post-create'
                        to={`/posts/new`}
                    >
                        Create post
                    </NavLink>
                }
                <div className="magazine-container">
                    <div className="magazine-page-one">
                        {/* TODO: local resource of every page's header data */}
                        <div className="m-p-section">
                            <LatestNews posts={allPosts}/>
                        </div>
                    </div>
                    <ContentHeader content={'Latest features'}/>
                    <div className="latest features">
                        <PostContent posts={allPosts.slice(0,3)}/>
                    </div>
                    <AreaButton area={'features'} />
                    <ContentHeader content={'Latest Film'}/>
                    <div className="latest film">
                        <iframe width="821" height="450" src="https://www.youtube.com/embed/1Ee1TWHoCRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="film-text">
                        <h2>title</h2>
                        <p>description</p>
                    </div>
                    <AreaButton area={'film'} />
                    <ContentHeader content={'RA Exchange'}/>
                    <div className="ra-exchange">
                        <SquarePostCardArea posts={allPosts}/>
                    </div>
                    <AreaButton area={"exchanges"} />
                    <div className="series">
                        <Series posts={allPosts}/>
                    </div>
                    {/* TODO: add news sections with daily headers */}
                </div>
            </div>
        </>
    )

}

export default Magazine;
