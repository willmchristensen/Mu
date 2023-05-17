import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainContent.css'
import ContentCard from './CardComponents/ContentCard'
import { getAllEvents } from '../../store/event';
// import {getUsers} from '../../store/users'
// import { useParams } from 'react-router-dom';
import PopularCardArea from './PopularCardArea';

const MainContent = () => {
    const events = useSelector(state => state.event.events);
    const eventsArray = Object.values(events);
    let recentEvents = eventsArray.slice(0,4);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEvents())
    }, [dispatch])

    // if (!sessionUser) return <Redirect to="/" />

    if(!eventsArray.length) return null;
    let date = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'long' }
    let today = date.toLocaleDateString('en-US', options);
    let [weekday, month, day] = today.split(' ');
    let formattedDate = `${weekday} ${day} ${month}`;

    return(
        <div className="main-content">
            <div className="popular-container">
                <div className='content-header'>
                    <h2>
                        / Popular
                    </h2>
                </div>
                <div className="popular-content">
                    <PopularCardArea events={recentEvents}/>
                </div>
            </div>
            {/* TODO: 
                sections of content separated by days??! dont have much data tho  
                make a slash similar to RA
            */}
            <div className="main-content-area">
                <div className='content-header'>
                    <h2>
                        {formattedDate}
                    </h2>
                </div>
                {
                    eventsArray.map(event => {
                        return (
                            <ContentCard event={event}>
                            </ContentCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainContent
