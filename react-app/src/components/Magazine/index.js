import './Magazine.css';
import PostContent from './PostContent';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import LatestNews from './LatestNews';
import PopularNews from './PopularNews';
import SquarePostCardArea from './SquarePostCardArea';
import Series from './Series';
import PageHeader from '../PageHeader';
import AreaButton from './AreaButton';
import ContentHeader from '../ContentHeader';
import NewsContentArea from './LatestNews/NewsCardComponents/NewsContentArea';
const Magazine = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const sessionUser = useSelector(state => state.session.user);
    const allPosts = Object.values(posts);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options).toUpperCase();
    const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options).toUpperCase();
    const formattedDayAfterTomorrow = dayAfterTomorrow.toLocaleDateString('en-US', options).toUpperCase();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    if (!posts || !allPosts.length) return null;

    return (
        <>
        <div className="magazine-wrapper">
            <PageHeader header={'Magazine'} subheader={'Interviews, films, news and more from the industry.'} />
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
                    {/* <div className="m-p-section"> */}
                        <LatestNews posts={allPosts} />
                    {/* </div> */}
                </div>
                <div className="latest-features">
                    <ContentHeader content={'Latest features'} />
                    <PostContent posts={allPosts.slice(0, 3)} />
                    <AreaButton area={'features'} />
                </div>
                <div className="latest-film">
                    <ContentHeader content={'Latest Film'} />
                    <iframe width="821" height="450" src="https://www.youtube.com/embed/1Ee1TWHoCRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="film-text">
                        <h2>title</h2>
                        <p>description</p>
                    </div>
                    <AreaButton area={'film'} />
                </div>
                <div className="ra-exchange">
                    <ContentHeader content={'RA Exchange'} />
                    <SquarePostCardArea posts={allPosts} />
                    <AreaButton area={"exchanges"} />
                </div>
            </div>
            {/* TODO: add news sections with daily headers */}
        </div>
        <div className="series-wrapper">
            <div className="series-container">
                <Series posts={allPosts} />
            </div>
        </div>
        <div className="magazine-wrapper">
            <div className="magazine-container">
                <div className="header-wrapper">
                    <span className="main-header magazine-subheader">
                        <h1>News</h1>
                    </span>
                </div>
                <ContentHeader content={formattedDate} />
                <NewsContentArea posts={allPosts} />
                <ContentHeader content={formattedTomorrow} />
                <NewsContentArea posts={allPosts} />
                <ContentHeader content={formattedDayAfterTomorrow} />
                <NewsContentArea posts={allPosts} />
            </div>
        </div>
        </>
    )

}

export default Magazine;
