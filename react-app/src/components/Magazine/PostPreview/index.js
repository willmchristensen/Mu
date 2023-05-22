import './PostPreview.css';
import {NavLink} from 'react-router-dom';

const PostPreview = ({event, post, type}) => {
    // conditional rendering a descriptive component for a variety of content cards.
    if(!post && !event) return null
    // classes----------
    const dynamicTitle = type === 'large' ? 'big-title' : 'post-title';
    const textClass = type === 'news' ?  "post-preview-text" : "news-preview-container";
    // data-----------
    const options = { day: 'numeric', month: 'long', year: 'numeric'}
    let date = post ? new Date(post.createdAt).toLocaleDateString('en-US', options)  : new Date(event.createdAt).toLocaleDateString('en-US', options);
    let [month, day, year] = date.split(' ');
    let formattedDate = `${day} ${month} ${year}`;
    const time = post ? post.createdAt.substring(11,16)  : event.createdAt.substring(11,16);
    const sentence = post ? post.description.split('.')[0].trim() : event.description.split('.')[0].trim();

    return (

        <div className="post-preview-container">
            {
                type == 'large' && <div className="time-type">
                    <div className="time">
                        {time}
                    </div>
                    {<i class="fas fa-circle"></i>}
                    <div className="type">
                        {post.type}
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
                        {post.type}
                    </div>
                </div>
            }
            {
                type == 'exchange' || type == 'popular' && <div className="time-type">
                    <div className="time">
                        {formattedDate}
                    </div>
                </div>
            }
            {
                type == 'square' && <div className="time">
                    {year}
                </div>
            }
            {/* {
                type == 'main-event-content' &&
                <div className="main-event-content">
                    {}
                </div>
            } */}
            <div className={textClass}>
                <div className="single-post-title">
                    {
                        post ?
                        <NavLink
                            to={`posts/${post.id}`}
                        >
                            <h3 className={dynamicTitle}>
                                {post.title}
                            </h3>
                        </NavLink>
                        :
                        <NavLink
                            to={`events/${event.id}`}
                        >
                            <h3 className={dynamicTitle}>
                                {event.title}
                            </h3>
                        </NavLink>
                    }
                </div>
                <div className="single-post-sentence">
                    <span className="post-sentence">
                        {sentence}
                    </span>
                    {
                        event &&
                        <p className='location'>

                            {
                                event && type!== 'popular' &&
                                <>
                                    <i class="fas fa-map-pin"></i>
                                    <span className='location-text'>
                                        {event.location}
                                    </span>
                                </>
                            }
                            {
                                event && type == 'popular' &&
                                <div className="location-container-small">
                                    <div className="location-content">
                                            <i class="fas fa-map-pin"></i>
                                            <span className='location-text'>
                                                {`TBA ${event.location.split(',')[0]}`}
                                            </span>
                                    </div>
                                    <div className="attending-content">
                                        <i class="fas fa-user"></i>
                                        <span className='location-text'>
                                            {`${event.attendees.length}`}
                                        </span>
                                    </div>
                                </div>

                            }
                        </p>
                    }
                </div>
            </div>

        </div>

    )

}

export default PostPreview;
