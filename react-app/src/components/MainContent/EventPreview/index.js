import './EventPreview.css';
import {NavLink} from 'react-router-dom';

const EventPreview = ({event,type}) => {
    // conditional rendering a descriptive component for a variety of content cards.
    if(!event) return null
    // classes----------
    const dynamicTitle = type === 'large' ? 'big-title' : (type === 'popular' || type === 'main-event-content') ? 'popular-title' :'post-title';
    const textClass = type === 'news' ?  "post-preview-text" : "news-preview-container";
    // data-----------
    const options = { day: 'numeric', month: 'long', year: 'numeric'}
    let date = new Date(event?.date).toLocaleDateString('en-US', options);
    let [month, day, year] = date.split(' ');
    let formattedDate = `${day} ${month} ${year}`;
    // console.log('UNDEFINED?',post)
    const time = event?.createdAt?.substring(11,16);
    const sentence = event?.description?.split('.')[0].trim();
    const eventPreview = (type == 'post' || type == 'news') ? 'dark-post-preview-container' : 'post-preview-container';
    const eventPreviewTitle = (type == 'post' || type == 'news') ? 'dark-post-preview-title' : 'post-preview-title';
    const sliceOfDescription = type == 'popular' ? "light-slice-of-description" : "slice-of-description";
    // TODO: location and attending content: divs for each item and uniform margin around both

    return (
        <div className={eventPreview}>
            {
                type == 'large' && <div className="time-type">
                    <div className="time">
                        {time}
                    </div>
                    {<i class="fas fa-circle"></i>}
                    <div className="type">
                        post
                    </div>
                </div>
            }
            {
                type == 'news' && <div className="time-type">
                    <div className="time">
                        {time}
                    </div>
                {<i class="fas fa-circle"></i>}
                    <div className="type">
                        post
                    </div>
                </div>
            }
            {
                type == 'exchange' || type == 'popular' && <div className="time-type">
                    <div className="formatted-date">
                        {formattedDate}
                    </div>
                </div>
            }
            {
                type == 'square' && <div className="time">
                    {year}
                </div>
            }
            <div className={textClass}>
                <div className={eventPreviewTitle}>
                    {
                        <NavLink
                            to={`/events/${event?.id}`}
                        >
                            <h3 className={dynamicTitle}>
                                {event?.title}
                            </h3>
                        </NavLink>
                    }
                </div>
                <div className="post-preview-description">
                    <div className="description">
                        <span className={sliceOfDescription}>
                            {type !== 'main-event-content' && sentence}
                        </span>
                    </div>
                    {
                        event &&
                        <div className='dynamic-location-content'>

                            {
                                event && type!== 'popular' &&
                                <div className='regular-event-location-content'>
                                    <div className="location-content-location">
                                        <i class="fas fa-map-pin"></i>
                                        <span className='location-text'>
                                            {event?.location}
                                        </span>
                                    </div>
                                    <div className="location-content-attendees">
                                        <i class="fas fa-user"></i>
                                        <span className='location-text'>
                                            {`${event?.attendees?.length}`}
                                        </span>
                                    </div>
                                </div>
                            }
                            {
                                event && type == 'popular' &&
                                <div className="location-container-small">
                                    <div className="location-content">
                                            <i class="fas fa-map-pin"></i>
                                            <span className='location-text'>
                                                {`TBA ${event?.location?.split(',')[0]}`}
                                            </span>
                                    </div>
                                    <div className="attending-content">
                                        <i class="fas fa-user"></i>
                                        <span className='location-text'>
                                            {`${event?.attendees?.length}`}
                                        </span>
                                    </div>
                                </div>

                            }
                        </div>
                    }
                </div>
            </div>

        </div>

    )

}

export default EventPreview;
