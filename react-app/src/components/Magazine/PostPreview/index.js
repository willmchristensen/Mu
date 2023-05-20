import './PostPreview.css';
import {NavLink} from 'react-router-dom';

const PostPreview = ({post, type}) => {
    // conditional rendering a descriptive component for a variety of content cards.
    if(!post) return null

    // classes----------
    const dynamicTitle = type === 'large' ? 'big-title' : 'post-title';
    const textClass = type === 'news' ?  "post-preview-text" : "news-preview-container";
    // data-----------
    const options = { day: 'numeric', month: 'long', year: 'numeric'}
    let date = new Date(post.createdAt).toLocaleDateString('en-US', options);
    let [month, day,year] = date.split(' ');
    let formattedDate = `${day} ${month} ${year}`;
    const time = post.createdAt.substring(11,16);
    const sentence = post.description.split('.')[0].trim();

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
                type == 'exchange' && <div className="time-type">
                    <div className="time">
                        {formattedDate}
                    </div>
                </div>
            }
            <div className={textClass}>
                <div className="single-post-title">
                    <NavLink
                        to={`posts/${post.id}`}
                    >
                        <h3 className={dynamicTitle}>
                            {post.title}
                        </h3>
                    </NavLink>
                </div>

                <div className="single-post-sentence">
                    {sentence}
                </div>
            </div>

        </div>

    )

}

export default PostPreview;
